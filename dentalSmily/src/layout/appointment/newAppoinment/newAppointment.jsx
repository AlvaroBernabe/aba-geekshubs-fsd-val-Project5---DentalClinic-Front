import React, { useState, useEffect }  from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../../components/InputText/InputText';
import NavBar from '../../../components/NavBar';
import { nuevoAppointment } from '../../services/apiCalls';
import { userData } from '../../userSlice';
import './newAppointment.css';

export const Appointment = () => {
    const navigate = useNavigate();
    const [welcome, setWelcome] = useState("");
    const ReduxCredentials = useSelector(userData);


    const [treatments, setTreatments] = useState([
        {
          id: 1,
          servicename: "Cleaning"
        },
        {
          id: 2,
          servicename: "Broken Teeth"
        }
      ]);
      const [doctors, setDoctors] = useState([
        {
          id: 1,
          specialtyname: "Orthodontics"
        },
        {
          id: 2,
          specialtyname: "Oral Surgery"
        }
      ]);



    const [appointments, setAppointments] = useState({
        service_id: '',
        doctor_id: '',
        user_id: ReduxCredentials.credentials.usuario.userId,
        payment_id: '',
        date: '',
      });

    
      const inputHandler = (e) => {
        setAppointments((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
      console.log(appointments)

    const checkError = (e) => { }

const registerappointment = () => {

    nuevoAppointment(appointments, ReduxCredentials.credentials.token)
        .then( (resultado) => {
            setAppointments(resultado.data)
            setWelcome(`Cita creada correctamente para el día: ${appointments.date}`);
            setTimeout(()=>{
                navigate('/profile');
            },3500);
        })
        .catch(error => {
            setAppointments(error.message);
        });
}
    return (
        <>
        <NavBar />
        <hr />
        <div style={{ display: 'block', width: 700, padding: 30 }}>
            <div className="loginDesign">
                {welcome !== "" ? (
            <div>{welcome}</div>
        ) : (
            <div>
                <Container>
                    <Row className="LoginForm">
                        <Col lg={6}>
                            <Form className='formAppointment'>
                                <Form.Select name={"service_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                                    <option>Choose your Treatment:</option>
                                    {treatments.map((treatment) => {
                                        return (
                                            <option key={treatment.id} value={treatment.id}>{treatment.servicename}</option>
                                        )
                                    })}
                                </Form.Select>
                            <p></p>
                                <Form.Select name={"doctor_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                                    <option>Choose Doctor Specialist:</option>
                                    {doctors.map((doctor) => {
                                        return (
                                            <option key={doctor.id} value={doctor.id}>{doctor.specialtyname}</option>
                                        )
                                    })}
                                </Form.Select>
                                <p></p>
                                <Form.Select name={"payment_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                                    <option>Choose Default payment:</option>
                                    <option value="1">Cash</option>
                                    <option value="2">Card</option>
                                </Form.Select>
                                <p></p>
                                <Form.Group>
                                    <Form.Label>Date:</Form.Label>
                                    <InputText className={"date"}
                                                    type={"datetime-local"} name={"date"} placeholder={"date"} required={true}
                                                    changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
                                </Form.Group>
                                <p></p>
                                <div className='botonModificar'>
                                    <Button variant="primary" onClick={registerappointment}>
                                        New Date
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            )}
            </div>
        </div>
        </>
    );
}
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

    const [appointments, setAppointments] = useState({
        service_id: '',
        doctor_id: '',
        user_id: ReduxCredentials.credentials.usuario.userId,
        payment: '',
        date: '',
      });

    
      const inputHandler = (e) => {
        setAppointments((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
      console.log(appointments)

    const checkError = (e) => {
    }

const registerappointment = () => {

    nuevoAppointment(appointments, ReduxCredentials.credentials.token)
        .then(resultado => {
            setAppointments(resultado.data)
            setWelcome(`Cita creada correctamente para el día: ${appointments.date}`);
            // console.log(resultado)
            setTimeout(()=>{
                navigate('/');
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
                            <Form>
                            <Form.Group>
                <Form.Label>Service Id:</Form.Label>
                <InputText className={"service_id"}
                                type={"number"} name={"service_id"} placeholder={"service_id"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Doctor_id:</Form.Label>
                <InputText className={"inputProfile"}
                                type={"number"} name={"doctor_id"} placeholder={"doctor_id"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Payment:</Form.Label>
                <InputText className={"payment"}
                                type={"boolean"} name={"payment"} placeholder={"payment"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Date:</Form.Label>
                <InputText className={"date"}
                                type={"datetime-local"} name={"date"} placeholder={"date"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>
            <br />
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
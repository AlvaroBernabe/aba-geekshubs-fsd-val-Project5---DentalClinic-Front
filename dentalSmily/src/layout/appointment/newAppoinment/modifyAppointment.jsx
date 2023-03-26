import React, { useState, useEffect }  from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../../components/InputText/InputText';
import NavBar from '../../../components/NavBar';
import { appointmentData } from '../../appointmentSlice';
import { updateAppointment } from '../../services/apiCalls';
import { userData } from '../../userSlice';


export const ModifyAppointment = () => {
    const ReduxCredentials = useSelector(userData);
    const ReduxAppointment = useSelector(appointmentData)
    const [welcome, setWelcome] = useState("");
    const navigate = useNavigate();
    console.log(ReduxAppointment, "esto es Redux Appointment")
    let params = ReduxAppointment.choosenAppointment.id 

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
        id: params,
        service_id: "",
        doctor_id: "",
        user_id: ReduxCredentials.credentials.usuario.userId,
        payment: "",
        date: "",
      });
    
      const inputHandler = (e) => {
        setAppointments((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

    const checkError = (e) => { }

    const updateAppoinment = () => {
      updateAppointment(params, appointments, ReduxCredentials.credentials.token)
      .then( (resultado) => {
              setAppointments(resultado.data)
              setWelcome(`Cita modificada correctamente para el día: ${appointments.date}`);
              setTimeout(()=>{
                  navigate('/appointment/update');
              },3500);
          })
          .catch(error => {
              setAppointments(error.message);
          });
  }
    console.log(appointments, "Esto vale appointment")
 
    return (
      <>
      <NavBar />
      <hr />
      <div>
          <div className="loginDesign">
              {welcome !== "" ? (
          <div>{welcome}</div>
      ) : (
          <div>
              <Container>
                  <Row className="LoginForm2">
                      <Col lg={6}>
                          <Form className='formAppointments' style={{ width: "20rem" }}>
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
                              <Form.Select name={"payment"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
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
                                  <Button variant="primary" onClick={updateAppoinment}>
                                      Update Appointment
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
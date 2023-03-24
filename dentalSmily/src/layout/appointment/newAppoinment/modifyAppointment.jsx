import React, { useState, useEffect }  from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { InputText } from '../../../components/InputText/InputText';
import NavBar from '../../../components/NavBar';
import { appointmentData } from '../../appointmentSlice';
import { updateAppointment } from '../../services/apiCalls';
import { userData } from '../../userSlice';


export const ModifyAppointment = () => {

    const ReduxCredentials = useSelector(userData);
    const ReduxAppointment = useSelector(appointmentData)

    // let params = ReduxAppointment.choosenAppointment.id 

    const [appointments, setAppointments] = useState({
        service_id: 2,
        doctor_id: 2,
        user_id: ReduxCredentials.credentials.usuario.userId,
        payment: false,
        date: new Date(),
      });
    

      const inputHandler = (e) => {
        setAppointments((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

    //   console.log(appointments, "esto es appointment")
      console.log(ReduxAppointment, "esto es reduxappointment")

    const checkError = (e) => {

    }

    const updateAppoinment = () => {
        updateAppointment(params, appointments, ReduxCredentials.credentials.token)
            .then(resultado => {
                setAppointments(resultado.data)
                setWelcome(`Cita modificada correctamente para el día: ${appointments.date}`);
                // console.log(resultado)
                // setTimeout(()=>{
                //     navigate('/');
                // },3500);
            })
            .catch(error => {
                setAppointments(error.message);
            });
    }

 
    return (
        <>
        <NavBar />
        <hr />
        <div style={{ display: 'block', 
                    width: 700, 
                    padding: 30 }}>
        <h4>Modificar Appointment</h4>
        <Form>
           <Form.Group>
              <Form.Label>service_id:</Form.Label>
              <InputText className={"inputLogin"}
              type={"number"} name={"service_id"} placeholder={"service_id..."} required={true}
              changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
              </Form.Group>
          {/* <Form.Group>
              <Form.Label>user_id:</Form.Label>
              <InputText className={"user_id"}
                type={"number"} name={"user_id"} placeholder={"user_id..."} required={true}
                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
          </Form.Group> */}
          <Form.Group>
              <Form.Label>doctor_id:</Form.Label>
              <InputText className={"doctor_id"}
              type={"number"} name={"doctor_id"} placeholder={"doctor_id..."} required={true}
              changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
              </Form.Group>
          <Form.Group>
              <Form.Label>payment:</Form.Label>
              <InputText className={"payment"}
                type={"boolean"} name={"payment"} placeholder={"payment"} required={true}
                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
          </Form.Group>
          <Form.Group>
              <Form.Label>date:</Form.Label>
              <InputText className={"date"}
              type={"datetime-local"} name={"date"} placeholder={"date..."} required={true}
              changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
              </Form.Group>
              <br />
              <div className='botonModificar'>
                  <Button variant="primary" onClick={updateAppoinment}>
                      Modificar Cita
                  </Button>
              </div>
          </Form>
        </div>
        </>
    );
}
import React, { useState, useEffect }  from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { InputText } from '../../../components/InputText/InputText';
import NavBar from '../../../components/NavBar';
import { updateAppointment } from '../../services/apiCalls';
import { userData } from '../../userSlice';


export const ModifyAppointment = () => {

    const ReduxCredentials = useSelector(userData);
    let params = ReduxCredentials.choosenAppointment.id 

    const [appointments, setAppointments] = useState({
        service_id: '',
        doctor_id: '',
        user_id: '',
        payment: '',
        date: '',
      });
    

      const inputHandler = (e) => {
        setAppointments((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

    const checkError = (e) => {

    }

    const updateAppoinment = () => {
        updateAppointment(appointments, ReduxCredentials.credentials.token)
            .then(resultado => {
                setAppointments(resultado.data)
                setWelcome(`Cita modificada correctamente para el día: ${appointments.date}`);
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
          <Form.Group>
              <Form.Label>user_id:</Form.Label>
              <InputText className={"user_id"}
                type={"number"} name={"user_id"} placeholder={"user_id..."} required={true}
                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
          </Form.Group>
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
                  <Button variant="primary" type="submit" onClick={updateAppoinment}>
                      Modificar Datos
                  </Button>
              </div>
          </Form>
        </div>
        </>
    );
}
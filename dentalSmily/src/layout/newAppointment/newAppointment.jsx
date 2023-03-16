import React, { useState, useEffect }  from 'react';
import { Form } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import { InputText } from '../../components/InputText/InputText';
import NavBar from '../../components/NavBar';
import { nuevoAppointment } from '../services/apiCalls';


import './newAppointment.css';

export const Appointment = () => {
    const [appointment, setAppointment] = useState({
        service_id: '',
        doctor_id: '',
        payment: '',
        date: '',
      });
    
      const inputHandler = (e) => {
        setAppointment((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
    useEffect(()=>{
        if (appointment.name === ""){
          nuevoAppointment().then(
            resultado => {console.log(resultado)}
          ).catch(error => (console.log(error)))
        }
    }, [appointment]);

    const checkError = (e) => {

    }


    return (
        <>
        <NavBar />
        <hr />
        <div style={{ display: 'block', 
                    width: 700, 
                    padding: 30 }}>
        <h4>React-Bootstrap Form Component</h4>
        <Form>
            <Form.Group>
                <Form.Label>Service Id:</Form.Label>
                <InputText className={"service_id"}
                                type={"number"} name={"service_id"} placeholder={"service_id"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>doctor_id:</Form.Label>
                <InputText className={"inputProfile"}
                                type={"number"} name={"doctor_id"} placeholder={"doctor_id"} required={true}
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
                                type={"date"} name={"date"} placeholder={"date"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>
            <br />
            <div className='botonModificar'>
                <Button variant="primary" type="submit">
                    Nueva Cita
                </Button>
            </div>
        </Form>
        </div>
        </>
    );
}
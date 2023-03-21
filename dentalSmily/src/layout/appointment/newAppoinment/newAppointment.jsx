import React, { useState, useEffect }  from 'react';
import { Form } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import { decodeToken } from 'react-jwt';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../../components/InputText/InputText';
import NavBar from '../../../components/NavBar';
import { getUserData, nuevoAppointment } from '../../services/apiCalls';
import { userData } from '../../userSlice';
import { appointmentDetailData } from '../../appointmentSlice';


import './newAppointment.css';

export const Appointment = () => {

    // const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    const ReduxCredentials = useSelector(userData);
    const detallesAppointment = useSelector(appointmentDetailData)
    // console.log(ReduxCredentials.credentials.usuario.userId)


    // const integer = parseInt(service_id, doctor_id)

    // const [appointments, setAppointments] = useState({
    //     // let integerservice = parseInt(service_id, 10),
    //     // let integerdoctor = parseInt(doctor_id, 10),
    //     // service_id: parseInt('', 10),
    //     // doctor_id: parseInt('', 10),
    //     service_id: 2,
    //     doctor_id: 1,
    //     user_id: ReduxCredentials.credentials.usuario.userId,
    //     payment: 1,
    //     date: new Date(),
    //   });

      const [appointments, setAppointments] = useState([]);

    //   useEffect(()=>{
    //     getUserData
    //     console.log(ReduxCredentials,"patata")
    // },[])

    
    // useEffect(()=>{
    //     // console.log("console log de users", users)      // Este saca los el array con los usuarios
    //     if(appointment.name !== 0){
    //         nuevoAppointment(appointment)
    //         // console.log("esto es ", ReduxCredentials.credentials?.token)
    //         let token = ReduxCredentials.credentials?.token;
    //         // console.log(getUserData[token])
    //         getUserData()
    //             .then(
    //                 result => {
    //                     setAppointment(result.data)
    //                 }
    //             )
    //             .catch(error => console.log(error));
    //     }
    // },[appointment])
    
      const inputHandler = (e) => {
        setAppointments((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
      console.log(appointments)

    //   useEffect(() => {
    //     setAppointments((prevState) => ({
    //       ...prevState,
    //       user_id: ReduxCredentials.credentials.usuario.userId,
    //     }));
    //   }, [appointments]);



//     const checkError = (e) => {
//     }
//     const registerappointment = () => {
//       nuevoAppointment(appointments)
//       .then(() => {
//         // console.log("este es el  token decodificado",)
//         let token = ReduxCredentials.credentials.token
//         console.log("esto es ", token)
//         //   console.log(token)
//           //Este es el momento en el que guardo en REDUX
//           // console.log("este es el token decofdificado", decodificado)
//           // console.log("este es datosBacked", datosBackend)
//           // console.log("este es respuesta", respuesta)
//         //   setWelcome(`Bienvenid@ de nuevo ${datosBackend.usuario.fullName}`);
//   //Redirección a Home
//   // setTimeout(() => {
//   //     navigate("/login");
//   //   }, 3000);
//   })
//   .catch(error => console.log(error))
// };



const registerappointment = () => {
    let body = {
        service_id: 2,
        doctor_id: 1,
        user_id: ReduxCredentials.credentials.usuario.userId,
        payment: 1,
        date: 2012-10-10,
    }
    nuevoAppointment(body, ReduxCredentials.credentials.token)
        .then(resultado => {
            //Esto se ejecutará si el pedido se ha realizado correctamente
            //mostrando el mensaje
            setAppointments(resultado.data)
            console.log(body)
            //Después de haber realizado el pedido, llevamos al user a su perfil
            // setTimeout(()=>{
            //     navigate('/profile');
            // },1500);
        })
        .catch(error => {
            setMsg(error.message);
        });
}





// const citas = (token) => {
        
//     //Primero guardo en RDX los datos escogidos...

//     dispatch(addChoosen({ choosenObject: token }))

//     setTimeout(()=>{
//         navigate("/detail");
//     },500)
// }

        //   .then(() => {
        //     console.log("trying appointment")
        //     //   setTimeout(() => {
        //     //       navigate("/login");
        //     //   }, 2000);
        //   })

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
                                type={"datetime-local"} name={"date"} placeholder={"date"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>
            <br />
            <div className='botonModificar'>
                <Button variant="primary" onClick={registerappointment}>
                    Nueva Cita
                </Button>
            </div>
        </Form>
        </div>
        </>
    );
}
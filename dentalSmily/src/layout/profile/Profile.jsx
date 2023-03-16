import React, { useState, useEffect }  from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { InputText } from '../../components/InputText/InputText';
import NavBar from '../../components/NavBar';
import { getUserData } from '../services/apiCalls';
import './Profile.css';

export const Profile = () => {

    // let user = {
    //     fullName: '',
    //     dni: '',
    //     phone: '',
    //     email: '',
    // };
    // const [valor, setValor] = useState(user);
    // const { fullName, dni, phone, email} = valor;
    // const newValue = ({target}) => {
    //     console.log(target);
    //     const {name, value} = target;
    //     setValor({...valor,[name]:value});
    // }

    const [userData, setUserData] = useState({
        name: '',
        fullName: '',
        email: '',
        password: '',
        dni: '',
        phone: '' ,
      });
    
      const inputHandler = (e) => {
        setUserData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
    



    useEffect(()=>{
        if (userData.name === ""){
          getUserData().then(
            resultado => {console.log(resultado)}
          ).catch(error => (console.log(error)))
        }
    }, [userData]);

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
                <Form.Label>Full Name:</Form.Label>
                <InputText className={"inputProfile"}
                                type={"text"} name={"fullName"} placeholder={"fullName"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>DNI:</Form.Label>
                <InputText className={"inputProfile"}
                                type={"text"} name={"dni"} placeholder={"DNI"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone:</Form.Label>
                <InputText className={"inputProfile"}
                                type={"number"} name={"phone"} placeholder={"phone"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <InputText className={"inputProfile"}
                                type={"email"} name={"email"} placeholder={"email"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>
            <br />
            <Form.Select aria-label="Payment Method">
                <option>Default Payment Method</option>
                <option value="1">Card</option>
                <option value="2">Cash</option>
                <option value="3">Paypal</option>
            </Form.Select>
            <br />
            <div className='botonModificar'>
                <Button variant="primary" type="submit">
                    Modificar Datos
                </Button>
            </div>
        </Form>
        </div>
        </>
    );
}
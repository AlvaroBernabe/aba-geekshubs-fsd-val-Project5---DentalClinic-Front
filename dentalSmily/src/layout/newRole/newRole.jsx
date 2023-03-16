import React, { useState, useEffect }  from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { InputText } from '../../components/InputText/InputText';
import NavBar from '../../components/NavBar';
import { getUserData } from '../services/apiCalls';
import './newRole.css';

export const newRole = () => {
    const [userData, setUserData] = useState({
        name: '',
        fullName: '',
        email: '',
        password: '',
        dni: '',
        phone: '' ,
        role_id: ''
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
                <Form.Label>Role Id:</Form.Label>
                <InputText className={"roleId"}
                                type={"nomber"} name={"roleId"} placeholder={"Role"} required={true}
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
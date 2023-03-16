import React, { useState, useEffect }  from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import NavBar from '../../components/NavBar';
import './Login.css';



import { useJwt } from 'react-jwt';
import { InputText } from '../../components/InputText/InputText';
import { useDispatch } from 'react-redux';
import { logMe } from '../services/apiCalls';
import { decodeToken } from 'react-jwt/dist/jwt';

export function Login() {
    const dispatch = useDispatch();
    let user = {
        email: '',
        password: ''
    };
    const [valor, setValor] = useState(user);


    const inputHandler = (e) => {
        setCredenciales((prevState) => ({
            ...prevState, [e.target.name]: e.target.value,
        }));
    }

    const checkError = (e) => {}

    const logeame = () => {
        console.log('intento de log');
        logMe(credenciales)
            .then(
                respuesta => {
                    let tokenDecodificado = decodeToken(respuesta.data)
                    console.log(tokenDecodificado)
                    let datosBackend = {
                        token: respuesta.data,
                        usuario: tokenDecodificado
                    };
                    console.log("Bienvenido", datosBackend)
                    dispatch(login({credentials: datosBackend}));
                }
            ) .catch(error => console.log(error))
    }

    return (
        <>
        <NavBar />
        <hr />
        <div style={{ display: 'block', width: 700, padding: 30 }}>
            <div className='formularioLogin'>
            <Container>
                <Row className="LoginForm">
                    <Col lg={6}>
                        <Form>
                            <Form.Group>
                                <Form.Label>Enter your email account:</Form.Label>
                                <InputText className={"inputLogin"}
                                type={"email"} name={"email"} placeholder={"email..."} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
                            </Form.Group>
                            <div>{credencialesError.emailError}</div>
                            <Form.Group>
                                <Form.Label>Enter your password:</Form.Label>
                                <InputText className={"inputLogin"}
                                type={"password"} name={"password"} placeholder={""} required={true} 
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
                            </Form.Group>
                            <div>{credencialesError.passwordError}</div>
                            <br />
                            <Button className="botonLog" variant="primary" 
                            onClick={()=> logeame()}> Login User
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
        </>
    );
}
import React, {useState, useEffect} from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";
import { decodeToken } from "react-jwt";
import { InputText } from "../../components/InputText/InputText";
import { logMe } from "../services/apiCalls";
import NavBar from "../../components/NavBar";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


export const Login = () => {

    const dispatch = useDispatch();
    const [credenciales, setCredenciales] = useState({
    email: '',
    password: ''
    })

    const inputHandler = (e) => {

    setCredenciales((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));

  }

  const checkError = (e) => {

  }

  const logeame = () => {
    logMe(credenciales)
        .then(
            respuesta => {
              let decodificado = decodeToken(respuesta.data)
              console.log(decodificado)
                let datosBackend = {
                    token: respuesta.data,
                    usuario: decodificado
                };       
                console.log("Bienvenido" , datosBackend)
                // console.log(datosBackend);
                //Este es el momento en el que guardo en REDUX
                dispatch(login({credentials: datosBackend}));
            }
        )
        .catch(error => console.log(error))
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
                            <Form.Group>
                                <Form.Label>Enter your password:</Form.Label>
                                <InputText className={"inputLogin"}
                                type={"password"} name={"password"} placeholder={""} required={true} 
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
                            </Form.Group>
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
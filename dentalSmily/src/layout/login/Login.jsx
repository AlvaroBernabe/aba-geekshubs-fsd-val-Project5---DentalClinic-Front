import React, {useState, useEffect} from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../userSlice";
import { decodeToken } from "react-jwt";
import { InputText } from "../../components/InputText/InputText";
import { logMe } from "../services/apiCalls";
import NavBar from "../../components/NavBar";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [welcome, setWelcome] = useState("");

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
        .then( respuesta => {
            let decodificado = decodeToken(respuesta.data)
                let datosBackend = {
                    token: respuesta.data,
                    usuario: decodificado
                };       
                dispatch(login({credentials: datosBackend}));
                setWelcome(`Bienvenid@ de nuevo ${datosBackend.usuario.fullName}`);
        setTimeout(() => {
            navigate("/user/myprofile");
          }, 3000);
        })
        .catch(error => console.log(error))
  };
    return (
        <>
        <NavBar />
        <hr />
        <div className="divPrincipal">
            <div className="loginDesign">
                {welcome !== "" ? (
            <div>{welcome}</div>
        ) : (
            <div>
                <Container>
                    <Row className="LoginForm">
                        <Col lg={6}>
                            <Form className="formLogin">
                                <Form.Group>
                                    <Form.Label>Enter your email account:</Form.Label>
                                    <InputText className={"inputLogin"}
                                    type={"email"} name={"email"} maxLength = {50} placeholder={"email..."} required={true}
                                    changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Enter your password:</Form.Label>
                                    <InputText className={"inputLogin"}
                                    type={"password"} name={"password"} maxLength = {64} placeholder={""} required={true} 
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
            )}
            </div>
        </div>
        </>
    );
}
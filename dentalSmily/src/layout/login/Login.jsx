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
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const credentialsRdx = useSelector(userData);


    // const credentialsRdx = useSelector(userData);
    const [welcome, setWelcome] = useState("");
    const [credenciales, setCredenciales] = useState({
    email: '',
    password: ''
    })

    // useEffect(() => {
    //     if (credentialsRdx.credentials.token) {
    //       //Si No token...home redirect
    //       Navigate("/");
    //     }
    //   }, []);

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
              console.log("este es el  token decodificado", decodificado)
                let datosBackend = {
                    token: respuesta.data,
                    usuario: decodificado
                };       
                console.log("esto es respuesta.data", respuesta.data)
                //Este es el momento en el que guardo en REDUX
                // console.log("este es el token decofdificado", decodificado)
                // console.log("este es datosBacked", datosBackend)
                // console.log("este es respuesta", respuesta)
                dispatch(login({credentials: datosBackend}));
                setWelcome(`Bienvenid@ de nuevo ${datosBackend.usuario.fullName}`);
        //Redirección a Home
        // setTimeout(() => {
        //     navigate("/login");
        //   }, 3000);
        })
        .catch(error => console.log(error))
  };
    return (
        <>
        <NavBar />
        <hr />
        <div style={{ display: 'block', width: 700, padding: 30 }}>
            <div className="loginDesign">
                {welcome !== "" ? (
            <div>{welcome}</div>
        ) : (
            <div>
                <Container>
                    <Row className="LoginForm">
                        <Col lg={6}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Enter your email account:</Form.Label>
                                    <InputText className={"inputLogin"}
                                    type={"email"} name={"email"} maxLength = {50} placeholder={"email..."} required={true}
                                    changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Enter your password:</Form.Label>
                                    <InputText className={"inputLogin"}
                                    type={"password"} name={"password"} maxLength = {50} placeholder={""} required={true} 
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
import React, { useState, useEffect }  from 'react';
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { InputText } from '../../components/InputText/InputText';
import NavBar from '../../components/NavBar';
import { validate } from '../../helpers/useful';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Register.css';
import { newUser } from '../services/apiCalls';

export function Register() {

    const [credenciales, setCredenciales] = useState({
        fullname: "",
        email: "",
        password: "",
      });

    const [credencialesError, setCredencialesError] = useState({
        fullnameError: "",
        emailError: "",
        passwordError: "",
    });

    const [valiUser, setValiUser] = useState({
        fullnameVali: false,
        emailVali: false,
        passwordVali: false,
    });

    const [registerAct, setRegisterAct] = useState (false);

    const inputHandler = (e) => {
        setCredenciales((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }));
    };

    useEffect(() =>{
        console.log(credenciales);
        for (let error in credencialesError) {
            if (credencialesError[error] !== ""){
                setRegisterAct(false);
                return;
            }
        } for (let vacio in credenciales){
            if(credenciales[vacio] === ""){
                setRegisterAct(false);
                return;
            }
        } for (let validated in valiUser){
            if(valiUser[validated] === false){
                setRegisterAct(false);
                return;
            }
        } setRegisterAct(true)
    })

    const checkError = (e) => {
        let error = "";
        const checked = validate(
           e.target.name,
            e.target.value,
            e.target.required
        );
        error = checked.message;

        setValiUser((prevState) => ({
            ...prevState, [e.target.name + "Vali"]: checked.validated,
        }));

        setCredencialesError((prevState) => ({
            ...prevState, [e.target.name + "Error"]: error,
        }));
    };

    // const fakeRegister = () => {
    //     console.log("victoria");
    // };

    const registerUser = () => {
        newUser (credenciales)
              .then(() => {
                setTimeout(() => {
                  navigate("/login");
                }, 3500);
              })
              .catch(error => console.log(error));
          };
          
    return (
        <>
        <NavBar />
        <hr />
        <div style={{ display: 'block', width: 700, padding: 30 }}>
            <h4>Crea tu usuario</h4>
            <Container>
                <Row className="registerForm">
                    <Col lg={6}>
                        <Form>
                            <Form.Group>
                                <Form.Label>Enter your Name and Surname:</Form.Label>
                                <InputText className={ credencialesError.fullnameError === "" ? "inputBasicDesign" : "inputBasicDesign inputErrorDesign"}
                                type={"text"} name={"fullName"} placeholder={"Enter your complete name"}  required={true} 
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
                            </Form.Group>
                            <div>{credencialesError.fullnameError}</div>
                            <Form.Group>
                                <Form.Label>Enter your email address:</Form.Label>
                                <InputText className={ credencialesError.emailError === "" ? "inputBasicDesign" : "inputBasicDesign inputErrorDesign"}
                                type={"email"} name={"email"} placeholder={"Enter your email"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
                            </Form.Group>
                            <div>{credencialesError.emailError}</div>
                            <Form.Group>
                                <Form.Label>Enter your password:</Form.Label>
                                <InputText className={ credencialesError.passwordError === "" ? "inputBasicDesign" : "inputBasicDesign inputErrorDesign"}
                                type={"password"} name={"password"} placeholder={"Enter your password"} required={true} 
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
                            </Form.Group>
                            <div>{credencialesError.passwordError}</div>
                            <br />
                            <Button className={registerAct ? "registerSendDeac registerSendAct" : "registerSendDeac"} variant="primary" 
                                onClick={registerUser}>
                                Register User
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
}
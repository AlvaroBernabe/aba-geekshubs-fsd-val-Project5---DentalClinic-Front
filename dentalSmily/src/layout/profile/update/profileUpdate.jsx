import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login, userData, userout } from "../../userSlice";
import { InputText } from "../../../components/InputText/InputText";
import NavBar from "../../../components/NavBar";
import { userUpdate } from "../../services/apiCalls";

export const  ProfileUpdate = () => {
  const credentialsRdx = useSelector(userData);
  let email = credentialsRdx.credentials.email;


  const [user, setUser] = useState({
    dni_nif: "",
    fullName: "",
    phone: "",
    email: email,
    password: "",
    payment: "",
  });
  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkError = (e) => {
}

const body = {
    dni_nif: user.dni_nif,
    fullName: user.fullName,
    phone: user.phone,
    password: user.password,
    payment: user.payment,
    email: decodedToken.email,
  };


//   const updateUser = async () => {
//     await userUpdate(user, token).then((res) => {
//     //   let jwt = res.data.jwt;
//       let decodificado = decodeToken(respuesta.data)

//       let datosBackend = {
//         token: respuesta.data,
//         usuario: decodificado
//     };  
//     dispatch(login({ credentials: datosBackend }));
//     //   localStorage.setItem("CREDENTIALS", JSON.stringify(payload));
//     //   localStorage.setItem("TOKEN", JSON.stringify(jwt));
//     //   navigate("/");
//     // });
// })
// .catch(error => console.log(error))
//   };

  return (
    <>
    <NavBar />
    <hr />
        <div>
            <Container>
                <Row className="LoginForm">
                    <Col lg={6}>
                        <Form>
                            <Form.Group>
                                <Form.Label>Enter your dni_nif:</Form.Label>
                                <InputText className={"inputLogin"}
                                type={"text"} name={"dni_nif"} placeholder={"dni_nif..."} 
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Enter your fullName:</Form.Label>
                                <InputText className={"inputLogin"}
                                type={"text"} name={"fullName"} placeholder={"fullName..."}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Enter your phone:</Form.Label>
                                <InputText className={"inputLogin"}
                                type={"number"} name={"phone"} placeholder={"phone..."}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Enter your email account:</Form.Label>
                                <InputText className={"inputLogin"}
                                type={"email"} name={"email"} placeholder={"email..."}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Enter your password:</Form.Label>
                                <InputText className={"inputLogin"}
                                type={"password"} name={"password"} placeholder={""} 
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Enter your payment option:</Form.Label>
                                <InputText className={"inputLogin"}
                                type={"text"} name={"payment"} placeholder={""} 
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
                            </Form.Group>
                            <br />
                            <Button className="botonLog" variant="primary" 
                            onClick={()=> updateUser()}> Update User
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
    </div>
    </>
);
}

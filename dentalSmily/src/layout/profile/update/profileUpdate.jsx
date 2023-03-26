import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { userData } from "../../userSlice";
import { InputText } from "../../../components/InputText/InputText";
import NavBar from "../../../components/NavBar";
import { userUpdate } from "../../services/apiCalls";
import { validate } from "../../../helpers/useful";
import { useNavigate } from "react-router-dom";

export const ProfileUpdate = () => {
    const credentialsRdx = useSelector(userData);
    let email = credentialsRdx.credentials.email;
    const navigate = useNavigate();

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

    const [valiuser, setValiuser] = useState({
        dni_nifVali: true,
        fullNameVali: false,
        paymentVali: true,
        phoneVali: false,
        emailVali: true,
        passwordVali: false,
    });

    const [userError, setUserError] = useState({
        dni_nifError: "",
        fullNameError: "",
        paymentError: "",
        phoneError: "",
        emailError: "",
        passwordError: "",
    });

    const [registerAct, setRegisterAct] = useState(false);
    const [welcome, setWelcome] = useState("");

    useEffect(() => {
        for (let error in userError) {
            if (userError[error] != "") {
                setRegisterAct(false);
                return;
            }
        }

        for (let empty in user) {
            if (user[empty] === "") {
                setRegisterAct(false);
                return;
            }
        }

        for (let validated in valiuser) {
            if (valiuser[validated] === false) {
                setRegisterAct(false);
                return;
            }
        }
        setRegisterAct(true);
    });

    const checkError = (e) => {
        let error = "";
        let checked = validate(
            e.target.name,
            e.target.value,
            e.target.required
        );

        error = checked.message;
        setValiuser((prevState) => ({
            ...prevState,
            [e.target.name + "Vali"]: checked.validated,
        }));

        setUserError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: error,
        }));
    };

    const updateUser = () => {
        userUpdate(user, credentialsRdx.credentials.token);
        setWelcome(`Correctly Updated Profile`);
        setTimeout(() => {
            navigate("/user/myprofile");
        }, 2500);
    };

    console.log(user, "hola soy user");
    console.log(valiuser, "hola soy vali user");

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
                                        <Form>
                                            <Form.Group>
                                                <Form.Label>
                                                    Enter your dni_nif:
                                                </Form.Label>
                                                <InputText
                                                    className={"inputLogin"}
                                                    type={"text"}
                                                    name={"dni_nif"}
                                                    placeholder={"dni_nif..."}
                                                    changeFunction={(e) =>
                                                        inputHandler(e)
                                                    }
                                                    blurFunction={(e) =>
                                                        checkError(e)
                                                    }
                                                />
                                            </Form.Group>
                                            <div>{userError.dni_nifError}</div>
                                            <Form.Group>
                                                <Form.Label>
                                                    Enter your fullName:
                                                </Form.Label>
                                                <InputText
                                                    className={"inputLogin"}
                                                    type={"text"}
                                                    name={"fullName"}
                                                    placeholder={"fullName..."}
                                                    changeFunction={(e) =>
                                                        inputHandler(e)
                                                    }
                                                    blurFunction={(e) =>
                                                        checkError(e)
                                                    }
                                                />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>
                                                    Enter your phone:
                                                </Form.Label>
                                                <InputText
                                                    className={"inputLogin"}
                                                    type={"number"}
                                                    name={"phone"}
                                                    placeholder={"phone..."}
                                                    changeFunction={(e) =>
                                                        inputHandler(e)
                                                    }
                                                    blurFunction={(e) =>
                                                        checkError(e)
                                                    }
                                                />
                                            </Form.Group>
                                            <div>{userError.phoneError}</div>
                                            <Form.Group>
                                                <Form.Label>
                                                    Enter your password:
                                                </Form.Label>
                                                <InputText
                                                    className={"inputLogin"}
                                                    type={"password"}
                                                    name={"password"}
                                                    placeholder={""}
                                                    changeFunction={(e) =>
                                                        inputHandler(e)
                                                    }
                                                    blurFunction={(e) =>
                                                        checkError(e)
                                                    }
                                                />
                                            </Form.Group>
                                            <div>{userError.passwordError}</div>
                                            <Form.Group>
                                                <Form.Label>
                                                    Enter your payment option:
                                                </Form.Label>
                                                <InputText
                                                    className={"inputLogin"}
                                                    type={"text"}
                                                    name={"payment"}
                                                    placeholder={"Card, paypal, efective, whatever you want"}
                                                    changeFunction={(e) =>
                                                        inputHandler(e)
                                                    }
                                                    blurFunction={(e) =>
                                                        checkError(e)
                                                    }
                                                />
                                            </Form.Group>
                                            <br />
                                            <Button
                                                className="botonLog"
                                                variant="primary"
                                                onClick={() => updateUser()}
                                            >
                                                {" "}
                                                Update User
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
};

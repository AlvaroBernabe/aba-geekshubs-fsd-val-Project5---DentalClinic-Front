import React, { useState, useEffect }  from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import NavBar from '../../components/NavBar';
import './Register.css';

export function Register() {

    const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    // const [ conditional, setConditional ] = useState(false)

    const inputHandler = (e) => {
        setUserData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const inputValidate = (e) => {};

    return (
        <>
        <NavBar />
        <hr />
        <div style={{ display: 'block', width: 700, padding: 30 }}>
            <h4>React-Bootstrap Form Component</h4>
            <Form>
                <Form.Group>
                    <Form.Label>Enter your Name and Surname:</Form.Label>
                    {/* <Form.Control type="text" name="fullname" placeholder="Enter your name and surname" 
                    changeFunction={(e) => inputHandler(e)} validateFunction={(e) => inputValidate(e)} /> */}
                        <InputText type="text" name="fullname" placeholder="Enter your name and surname" changeFunction={(e) => inputHandler(e)}
                        validateFunction={(e) => inputValidate(e)}
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter your email address:</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your your email address" 
                    changeFunction={(e) => inputHandler(e)} validateFunction={(e) => inputValidate(e)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter your password:</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter your password" 
                    changeFunction={(e) => inputHandler(e)} validateFunction={(e) => inputValidate(e)} />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                    Click here to submit form
                </Button>
            </Form>
        </div>
        </>
    );
}
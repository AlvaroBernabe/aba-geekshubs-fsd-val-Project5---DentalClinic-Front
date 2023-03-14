import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import NavBar from '../../components/NavBar';
import './Register.css';

export function Register() {
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
                <Form.Label>Enter your username:</Form.Label>
                <Form.Control type="text" placeholder="Introduce tu nombre" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter your email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter your your email address" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter your password:</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
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
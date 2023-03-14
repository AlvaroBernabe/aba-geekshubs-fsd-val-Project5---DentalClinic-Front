import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import NavBar from '../../components/NavBar';
import './Login.css';

export function Login() {
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
                <Form.Label>Enter your email:</Form.Label>
                <Form.Control type="email" placeholder="Enter your your email address" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter your password:</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <br />
            <div className='botones'>
              <Button variant="primary" className='botonLogin' style={{ width: "5em", height: "1.9em",}}  type="submit">
                  Login
              </Button>
              <Button variant="info" className='botonRestaurar' style={{ width: "8em", height: "4em",}}  >Reset Password</Button>{' '}
            </div>
        </Form>
        </div>
        </>
    );
}
import React, { useState, useEffect }  from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import NavBar from '../../components/NavBar';
import './Login.css';

export function Login() {
    let user = {
        email: '',
        password: ''
    };
    const [valor, setValor] = useState(user);
    const { email, password} = valor;
    const newValue = ({target}) => {
        console.log(target);
        const {name, value} = target;
        setValor({...valor,[name]:value});
    }
    return (
        <>
        <NavBar />
        <hr />
        <div style={{ display: 'block', width: 700, padding: 30 }}>
            <div className='formulario'>
                <Form>
                    <Form.Group>
                        <Form.Label>Enter your email:</Form.Label>
                        <Form.Control type="email"  name="email" placeholder="Enter your email address"  value={email} onChange={newValue}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your password:</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter your password" value={password} onChange={newValue} />
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
        </div>
        </>
    );
}
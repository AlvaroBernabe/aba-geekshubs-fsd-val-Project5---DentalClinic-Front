import React, { useState, useEffect }  from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import NavBar from '../../components/NavBar';
import './Profile.css';

export function Profile() {

    let user = {
        fullName: '',
        dni: '',
        phone: '',
        email: '',
    };
    const [valor, setValor] = useState(user);
    const { fullName, dni, phone, email} = valor;
    const newValue = ({target}) => {
        console.log(target);
        const {name, value} = target;
        setValor({...valor,[name]:value});
    }

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
                <Form.Label>Full Name:</Form.Label>
                <Form.Control type="text"   name="fullName" placeholder="fullName input"  value={fullName} onChange={newValue}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>DNI:</Form.Label>
                <Form.Control type="text"   name="dni" placeholder="DNI input"  value={dni} onChange={newValue}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone:</Form.Label>
                <Form.Control type="tel"   name="phone" placeholder="Phone input"  value={phone} onChange={newValue}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email"  name="email" placeholder="Email input"  value={email} onChange={newValue}/>
            </Form.Group>
            <br />
            <Form.Select aria-label="Payment Method">
                <option>Default Payment Method</option>
                <option value="1">Card</option>
                <option value="2">Cash</option>
                <option value="3">Paypal</option>
            </Form.Select>
            <br />
            <div className='botonModificar'>
                <Button variant="primary" type="submit">
                    Modificar Datos
                </Button>
            </div>
        </Form>
        </div>
        </>
    );
}
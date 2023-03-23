
import React, {useEffect, useState} from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import NavBar from '../../components/NavBar';
import { detailData } from '../detailSlice';
import { getUserData } from '../services/apiCalls';
import { userData } from '../userSlice';

import './Profile.css'
 
export const Profile = () => {
    const [users, setUsers] = useState({
        name: "",
        surname: "",
        nif: "",
        birth_date: "",
        direction: "",
        email: "",
        phone: ""
    }
    );
    const ReduxCredentials = useSelector(userData);

    useEffect(() => {
        if (users.name === "") {
            getUserData(ReduxCredentials.credentials.token)
            .then((result) => {
            console.log(result.data.data);
            setUsers({
                fullName: result.data.data.fullName,
                email: result.data.data.email,
                dni_nif: result.data.data.dni_nif,
                payment: result.data.data.payment,
                phone: result.data.data.phone,
                role_id: result.data.data.role_id,
            });
            })
            .catch((error) => console.log(error));
        }
    }, [users]);
    console.log(users);
     return (
        <>
        <NavBar />
        <hr />
         <div className='divCartas'>
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>Nombre Usuario:{users.fullName}</ListGroup.Item>
                    <ListGroup.Item>Email: {users.email}</ListGroup.Item>
                    <ListGroup.Item>Dni_Nif:{users.dni_nif}</ListGroup.Item>
                    <ListGroup.Item>Default Payment: {users.payment}</ListGroup.Item>
                    <ListGroup.Item>Phone number: {users.phone}</ListGroup.Item>
                    <ListGroup.Item>Role Id: {users.role_id}</ListGroup.Item>
                </ListGroup>
            </Card>
         </div>
         </>
     )
}
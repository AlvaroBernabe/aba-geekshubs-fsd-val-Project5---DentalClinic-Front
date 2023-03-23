
import React, {useEffect, useState} from 'react';

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
                direction: result.data.data.direction,
                phone: result.data.data.phone
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
         <div className=''>
            <div className='texto'>Nombre Usuario: </div>
            {users.fullName}
            <div className='texto'>Email: </div>
            {users.email}
            <div className='texto'>Dni_Nif: </div>
            {users.dni_nif}
            <div className='texto'>Payment: </div>
            {users.payment}
            <div className='texto'>Phone: </div>
            {users.direction}
            <div className='texto'>Role Id: </div>
            {users.phone}
         </div>
         </>
     )
}
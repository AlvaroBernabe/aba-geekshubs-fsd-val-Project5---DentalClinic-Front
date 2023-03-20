import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './layout/about/About';
import { Home } from './layout/home/Home';
import { Login } from './layout/login/Login';
import { Profile } from './layout/profile/Profile';
import { Register } from './layout/register/Register';
import { Treatment } from './layout/treatment/Treatment';
import { Appointment} from './layout/appointment/newAppoinment/newAppointment';
import { NewRoles } from './layout/newRole/newRole';
import { GetAllUsers } from './layout/getUsersAdmin/getUsersAdmin';
import { UserDetails } from './layout/getUsersAdmin/userDetails/userDetails';
// import { UserDetails } from './layout/getUsersAdmin/userDetails/userDetails';

export const Router = () => {
  return (
    <>
    <hr />
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/treatment' element={<Treatment/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/role/new' element={<NewRoles />} />
        <Route path='/user/myprofile' element={<Profile />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/user/all' element={<GetAllUsers />} />
        <Route path='/user/all/details' element={<UserDetails />} />
    </Routes>
    </>
    )
}
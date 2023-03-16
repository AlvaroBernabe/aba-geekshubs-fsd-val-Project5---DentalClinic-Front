import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './layout/about/About';
import { Home } from './layout/home/Home';
import { Login } from './layout/login/Login';
import { Profile } from './layout/profile/Profile';
import { Register } from './layout/register/Register';
import { Treatment } from './layout/treatment/Treatment';
import { newRole } from './layout/newRole/newRole';
import { Appointment} from './layout/newAppointment/newAppointment';


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
        <Route path='/profile' element={<Profile />} />
        <Route path='/newrole' element={<newRole />} />
        <Route path='/appointment' element={<Appointment />} />
    </Routes>
    </>
    )
}

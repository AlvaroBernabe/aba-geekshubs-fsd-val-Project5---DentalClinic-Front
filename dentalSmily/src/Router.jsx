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
import { ProfileUpdate } from './layout/profile/update/profileUpdate';
import { GetAppointmentasUser } from './layout/appointment/getAppointmentasUser';
import { ModifyAppointment } from './layout/appointment/newAppoinment/modifyAppointment';
import { GetMyAppointmentAsDoctor } from './layout/appointment/getMyAppointmentAsDoctor/getMyAppointmentAsDoctor';
import { GetAllAppointment } from './layout/appointment/getAllAppointment/getAllAppointment';

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
        <Route path='/user/role' element={<NewRoles />} />
        <Route path='/user/myprofile' element={<Profile />} />
        <Route path='/user/myprofile/update' element={<ProfileUpdate />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/user/all' element={<GetAllUsers />} />
        <Route path='/user/all/details' element={<UserDetails />} />
        <Route path='/appointment/myappoinment' element={<GetAppointmentasUser />} />
        <Route path='/appointment/update' element={<ModifyAppointment/>} />
        <Route path='/appointment/dentist/myappointment' element={<GetMyAppointmentAsDoctor/>} />
        <Route path='/appointment/getall' element={<GetAllAppointment/>} />

    </Routes>
    </>
    )
}
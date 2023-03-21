
import React, {useEffect} from 'react';

import { useSelector } from 'react-redux';
import NavBar from '../../../components/NavBar';
import { detailData } from '../../detailSlice';
import './userDetails.css'
 
export const UserDetails = () => {

    //conexion a RDX en modo lectura
    const detailRedux = useSelector(detailData);

    useEffect(()=>{
        console.log(detailRedux,"patata")
    },[])


     return (
        <>
        <NavBar />
        <hr />
         <div className=''>
            <div className='texto'>Nombre Usuario: </div>
            {detailRedux?.choosenObject?.fullName}
            <div className='texto'>Email: </div>
            {detailRedux?.choosenObject?.email}
            <div className='texto'>Dni_Nif: </div>
            {detailRedux?.choosenObject?.dni_nif}
            <div className='texto'>Payment: </div>
            {detailRedux?.choosenObject?.payment}
            <div className='texto'>Phone: </div>
            {detailRedux?.choosenObject?.phone}
            <div className='texto'>Role Id: </div>
            {detailRedux?.choosenObject?.role_id}
            <div className='texto'>Comments: </div>
            {detailRedux?.choosenObject?.comments}
         </div>
         </>
     )
}
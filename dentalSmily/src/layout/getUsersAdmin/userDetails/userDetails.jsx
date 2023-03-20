
import React, {useEffect} from 'react';

import { useSelector } from 'react-redux';
import NavBar from '../../../components/NavBar';
import { detailData } from '../../detailSlice';
 
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
            <div>Nombre Usuario: </div>
            {detailRedux?.choosenObject?.fullName}
            <div>Email: </div>
            {detailRedux?.choosenObject?.email}
            <div>Dni_Nif: </div>
            {detailRedux?.choosenObject?.dni_nif}
            <div>Payment: </div>
            {detailRedux?.choosenObject?.payment}
            <div>Phone: </div>
            {detailRedux?.choosenObject?.phone}
            <div>Role Id: </div>
            {detailRedux?.choosenObject?.role_id}
         </div>
         </>
     )
}
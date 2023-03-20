
// import React, {useEffect} from 'react';
// import { useSelector } from 'react-redux';
// import { detailData } from '../../detailSlice';


 
// export const UserDetails = () => {

//     //conexion a RDX en modo lectura
//     const detailRedux = useSelector(detailData);

//     useEffect(()=>{
//         console.log(detailRedux,"patata")
//     },[])


//      return (
//          <div className=''>
//             {detailRedux?.choosenObject?.fullName}
//          </div>
//      )
// }



import React, { useState, useEffect }  from 'react';



import { useSelector } from 'react-redux';
import { detailData } from '../../detailSlice';

 

export const UserDetails = () => {

    const detailRedux = useSelector(detailData);


    useEffect(()=>{
        console.log(detailRedux,"patata")
    },[])


     return (
         <div className=''>
            {detailRedux?.choosenObject?.name}
         </div>
     )
}

    // const [userData, setUserData] = useState({
    //     name: '',
    //     fullName: '',
    //     email: '',
    //     password: '',
    //     dni: '',
    //     phone: '' ,
    //   });
    
    //   const inputHandler = (e) => {
    //     setUserData((prevState) => ({
    //       ...prevState,
    //       [e.target.name]: e.target.value,
    //     }));
    //   };
    



    // useEffect(()=>{
    //     if (userData.name === ""){
    //       getUserDataall().then(
    //         resultado => {console.log(resultado)}
    //       ).catch(error => (console.log(error)))
    //     }
    // }, [userData]);

    // const checkError = (e) => {

    // }


//     return (
//         <>
//         <NavBar />
//         <hr />
//         <div style={{ display: 'block', 
//                     width: 700, 
//                     padding: 30 }}>
//         <h4>React-Bootstrap Form Component</h4>
//         <Form>
//             <Form.Group>
//                 <Form.Label>Full Name:</Form.Label>
//                 <InputText className={"inputProfile"}
//                                 type={"text"} name={"fullName"} placeholder={"fullName"} required={true}
//                                 changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
//             </Form.Group>
//             <br />
//             <div className='botonModificar'>
//                 <Button variant="primary" type="submit" onClick={getUserDataall}>
//                     Modificar Datos
//                 </Button>
//             </div>
//         </Form>
//         </div>
//         </>
//     );
// }
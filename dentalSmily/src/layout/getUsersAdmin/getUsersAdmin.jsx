import React, { useState, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { addChoosen } from '../detailSlice';
import { getTodosUsers } from '../services/apiCalls';
import { userData } from '../userSlice';



export const GetAllUsers = () => {

    // const [users, setUsers] = useState({
    //     name: '',
    //     fullName: '',
    //     email: '',
    //     password: '',
    //     dni: '',
    //     phone: '' ,
    //   });
    
    const [users, setUsers] = useState([]);


      const ReduxCredentials = useSelector(userData);

      const dispatch = useDispatch();
      const navigate = useNavigate();

      // const inputHandler = (e) => {
      //   setUserData((prevState) => ({
      //     ...prevState,
      //     [e.target.name]: e.target.value,
      //   }));
      // };
    



      useEffect(()=>{
        console.log("console log de users", users)
        if(users.length === 0){
            // console.log(ReduxCredentials.credentials?.token)
            getTodosUsers(ReduxCredentials.credentials?.token)
                .then(
                    result => {
                        setUsers(result.data)
                    }
                )
                .catch(error => console.log(error));
        }
    },[users])

    const selected = (persona) => {
      dispatch(addChoosen({ choosenObject: persona }))
        setTimeout(() => {
            navigate("/user/all/details");
          }, 500);
    }


    return (
        <>
        <NavBar />
        <hr />
        <div className='usersDesign'>
            {  users.length > 0 ? 
                (<div>
                    {
                        users.map(
                            persona => {
                                return (
                                    <div 
                                        onClick={()=>selected(persona)} 
                                        key={persona.id}>
                                        {persona.fullName}
                                        
                                    </div>
                                )
                            }
                        )
                    }
                </div>)
                : 
                (<div>ESTAN VINIENDO</div>)
            }
         </div>
      </>
    );
}
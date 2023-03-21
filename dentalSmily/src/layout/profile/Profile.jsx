
import React, {useEffect} from 'react';

import { useSelector } from 'react-redux';
import NavBar from '../../components/NavBar';
import { detailData } from '../detailSlice';
import { getUserData } from '../services/apiCalls';

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
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (users.name === "") {
        getUserProfile(ReduxCredentials.credentials.token)
            .then((result) => {
            console.log(result.data.user);
            setUsers({
                name: result.data.user.name,
                surname: result.data.user.surname,
                nif: result.data.user.nif,
                birth_date: result.data.user.birth_date,
                direction: result.data.user.direction,
                email: result.data.user.email,
                phone: result.data.user.phone
            });
            })
            .catch((error) => console.log(error));
        }
    }, [users]);

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
         </div>
         </>
     )
}
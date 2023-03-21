import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userData, userout } from '../layout/userSlice';
import { getUserData, logMe } from '../layout/services/apiCalls';
import { decodeToken } from 'react-jwt';
import { addChoosen } from '../layout/detailSlice';

function NavBar ()  {

  const credencialesRedux = useSelector(userData);

  const dispatch = useDispatch();

  const logout = () => {
    // localStorage.setItem("token", JSON.stringify(null));
    dispatch(userout({ credentials: {}, token: '' }));
    return navigate("/");
  };




//   const [users, setUsers] = useState([]);


//   const ReduxCredentials = useSelector(userData);

//   const navigate = useNavigate();


//   useEffect(()=>{
//     // console.log("console log de users", users)      // Este saca los el array con los usuarios
//     if(users.length === 0){
//         // console.log(ReduxCredentials.credentials?.token)
//         getUserData(ReduxCredentials.credentials?.token)
//             .then(
//                 result => {
//                     setUsers(result.data)
//                 }
//             )
//             .catch(error => console.log(error));
//     }
// },[users])

//   const selected = (persona) => {
//     dispatch(addChoosen({ choosenObject: persona }))

//   }
  
//   const user = users.map(
//     persona => {
//         return (
//             <div 
//                 onClick={()=>selected(persona)} 
//                 key={persona.id}>
//                 {persona.fullName}
//             </div>
//         )
//     }
// )


  return (
    <div className='navbarstyle'>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/treatment">Treatment</Nav.Link>
            <Nav.Link  className='perfil' as={Link} to='/user/myprofile'   onClick={()=>selected()}>
              <div>{credencialesRedux?.credentials?.usuario?.fullName}</div>
            </Nav.Link>
            {credencialesRedux?.credentials?.usuario?.roleId === 3 ? (           
              <>
                {/* <Nav.Link as={Link} to='/user/myprofile'>Profile</Nav.Link> */}
                <Nav.Link as={Link} to='/logout' onClick={() => logout()}>Logout</Nav.Link>
                <Nav.Link as={Link} to='/user/role'>ChangeRole</Nav.Link>
                <Nav.Link as={Link} to='/appointment'>newAppointment</Nav.Link>
                <Nav.Link as={Link} to='/user/update/'>User Update</Nav.Link>
                <Nav.Link as={Link} to='/user/all'>allUsers</Nav.Link>
                <Nav.Link as={Link} to='/user/all/detail'>allUsersDetails</Nav.Link>
                
              </> 
              ) : credencialesRedux?.credentials?.usuario?.roleId === 2 ? (
                  <>
                  <Nav.Link as={Link} to='/logout' onClick={() => logout()}>Logout</Nav.Link>
                  <Nav.Link as={Link} to='/appointment'>newAppointment</Nav.Link>
                  <Nav.Link as={Link} to='/user/update/'>User Update</Nav.Link>
                  <Nav.Link as={Link} to='/user/all'>allUsers</Nav.Link>
                </> 
                ) : credencialesRedux?.credentials?.usuario?.roleId === 1 ? (
                  <>
                  <Nav.Link as={Link} to='/logout' onClick={() => logout()}>Logout</Nav.Link>
                  <Nav.Link as={Link} to='/user/update/'>User Update</Nav.Link>
                  <Nav.Link as={Link} to='/appointment'>newAppointment</Nav.Link>
                  <Nav.Link as={Link} to='/appointment/myappoinment'>My Appoinment</Nav.Link>
                  </>
                  ) : (
                  <>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                <Nav.Link as={Link} to='/register'>Register</Nav.Link>
              </>
                )}
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;
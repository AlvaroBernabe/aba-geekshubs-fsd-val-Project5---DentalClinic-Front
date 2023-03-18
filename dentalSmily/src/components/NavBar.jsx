import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from '../layout/userSlice';
import { logMe } from '../layout/services/apiCalls';
import { decodeToken } from 'react-jwt';

function NavBar ()  {

  const credencialesRedux = useSelector(userData);
  // const decriptToken = () => {
  //   logMe()
  //       .then(
  //           respuesta => {
  //             let decodificado = decodeToken(respuesta.data)
  //             console.log("este es el decodificado",  decodificado)
  //               let datosBackend = {
  //                   token: respuesta.data,
  //                   usuario: decodificado
  //               };       
  //               console.log("este es el datosBacked", datosBackend)
  //               // console.log(datosBackend);
  //               //Este es el momento en el que guardo en REDUX
  //               // dispatch(login({credentials: datosBackend}));
  //           }
  //       )
  //       .catch(error => console.log(error))
  // }


  useEffect(() => {
    // decriptToken()
    // console.log(credencialesRedux);
    // console.log("hola", credencialesRedux.credentials.usuario.roleId)
    // console.log(credencialesRedux.credentials)
  })

  return (
    <div className='navbarstyle'>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/treatment">Treatment</Nav.Link>
            <Nav.Link  className='perfil' as={Link} to='/user/myprofile'>
              <div>{credencialesRedux?.credentials?.usuario?.fullName}</div>
            </Nav.Link>
            {/* <Navbar.Brand  className='Logo'><div>{credencialesRedux?.credentials?.usuario?.fullName}</div></Navbar.Brand> */}
            {credencialesRedux?.credentials?.usuario?.roleId === 3 ? (           
              <>
                {/* <Nav.Link as={Link} to='/user/myprofile'>Profile</Nav.Link> */}
                <Nav.Link as={Link} to='/logout'>Logout</Nav.Link>
                <Nav.Link as={Link} to='/newRole'>ChangeRole</Nav.Link>
                <Nav.Link as={Link} to='/appointment'>newAppointment</Nav.Link>
                <Nav.Link as={Link} to='/user/getall'>allUsers</Nav.Link>
              </> 
              ) : credencialesRedux?.credentials?.usuario?.roleId === 2 ? (
                  <>
                  <Nav.Link as={Link} to='/user/myprofile'>Profile</Nav.Link>
                  <Nav.Link as={Link} to='/logout'>Logout</Nav.Link>
                  <Nav.Link as={Link} to='/appointment'>newAppointment</Nav.Link>
                  <Nav.Link as={Link} to='/user/getall'>allUsers</Nav.Link>
                </> 
                ) : credencialesRedux?.credentials?.usuario?.roleId === 1 ? (
                  <>
                  <Nav.Link as={Link} to='/user/myprofile'>Profile</Nav.Link>
                  <Nav.Link as={Link} to='/logout'>Logout</Nav.Link>
                  <Nav.Link as={Link} to='/appointment'>newAppointment</Nav.Link>
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
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userData, userout } from '../layout/userSlice';
import './NavBar.css'

function NavBar ()  {
  const credencialesRedux = useSelector(userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userout({ credentials: {}, token: '' }));
    return navigate("/");
  };

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
                <Nav.Link as={Link} to='/user/role'>Rol Update</Nav.Link>
                <Nav.Link as={Link} to='/user/myprofile/update'>User Update</Nav.Link>
                <NavDropdown title="Users" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to='/user/all'>Show all Users</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/user/all/detail'>Show Users Details</NavDropdown.Item>
                  </NavDropdown>
                <Nav.Link as={Link} to='/' onClick={() => logout()}>Logout</Nav.Link>
              </> 
              ) : credencialesRedux?.credentials?.usuario?.roleId === 2 ? (
                  <>
                  <Nav.Link as={Link} to='/user/myprofile/update'>User Update</Nav.Link>
                  <Nav.Link as={Link} to='/appointment/dentist/myappointment'>Show My Appointment</Nav.Link>
                  <Nav.Link as={Link} to='/' onClick={() => logout()}>Logout</Nav.Link>
                </> 
                ) : credencialesRedux?.credentials?.usuario?.roleId === 1 ? (
                  <>
                  <Nav.Link as={Link} to='/user/myprofile/update'>Update Profile</Nav.Link>
                  <NavDropdown title="Appointments" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to='/appointment'>New Appointment</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/appointment/myappoinment'>My Appoinments</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/appointment/update'>Update Appointment</NavDropdown.Item>                    
                  </NavDropdown>
                  <Nav.Link as={Link} to='/' onClick={() => logout()}>Logout</Nav.Link>
                  </>
                  ) : (
                  <>
                <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
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
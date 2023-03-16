import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from '../layout/login/userSlice';

function NavBar ()  {

  const credencialesRedux = useSelector(userData);

  useEffect(() => {
    console.log(credencialesRedux);
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
            <Navbar.Brand  className='Logo'>Welcome To dentalSmily</Navbar.Brand>
            

            {credencialesRedux.credentials.token ? (
              <>
                <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                <Nav.Link as={Link} to='/logout'>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                <Nav.Link as={Link} to='/register'>Register</Nav.Link>
              </>
              )}
            {/* <NavDropdown title="User" id="basic-nav-dropdown"> */}
              {/* <NavDropdown.Item as={Link} to="/login"> Login </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register"> Register </NavDropdown.Item> */}
            {/* </NavDropdown> */}
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;
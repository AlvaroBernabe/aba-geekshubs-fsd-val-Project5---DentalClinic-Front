import React, { useState, useEffect }  from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { InputText } from '../../components/InputText/InputText';
import NavBar from '../../components/NavBar';
import { changeRole, getUserData } from '../services/apiCalls';
import { userData } from '../userSlice';
import './newRole.css';

export const NewRoles = () => {
    const [credenciales, setCredenciales] = useState({
        // name: '',
        fullName: '',
        email: '',
        password: '',
        role_id: ''
      });
    
      const inputHandler = (e) => {
        setCredenciales((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
    



    useEffect(()=>{
        if (userData.name === ""){
          getUserData().then(
            resultado => {console.log(resultado)}
          ).catch(error => (console.log(error)))
        }
    }, [userData]);

    const checkError = (e) => {

    }

    const changeRol = () => {
      changeRole(credenciales)
          .then(() => {
              setTimeout(() => {
                  navigate("/");
              }, 2000);
          })
          .catch((error) => console.log(error));
  };

    return (
        <>
        <NavBar />
        <hr />
        <div style={{ display: 'block', 
                    width: 700, 
                    padding: 30 }}>
        <h4>React-Bootstrap Form Component</h4>
        <Form>
           <Form.Group>
              <Form.Label>userid:</Form.Label>
              <InputText className={"inputLogin"}
              type={"number"} name={"userid"} placeholder={"userid..."} required={true} maxLength={70}
              changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
              </Form.Group>
          {/* <Form.Group>
              <Form.Label>email:</Form.Label>
              <InputText className={"inputLogin"}
              type={"email"} name={"email"} placeholder={"email..."} required={true} 
                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
          </Form.Group>
          <Form.Group>
              <Form.Label>password:</Form.Label>
              <InputText className={"inputLogin"}
              type={"password"} name={"password"} placeholder={"password..."} required={true} 
                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
          </Form.Group>  */}
          <Form.Group>
              <Form.Label>Role Id:</Form.Label>
              <InputText className={"role_id"}
                type={"number"} name={"role_id"} placeholder={"role_id"} required={true} maxLength={70}
                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
          </Form.Group>
              <br />
              <div className='botonModificar'>
                  <Button variant="primary" type="submit" onClick={changeRol}>
                      Modificar Datos
                  </Button>
              </div>
          </Form>
        </div>
        </>
    );
}
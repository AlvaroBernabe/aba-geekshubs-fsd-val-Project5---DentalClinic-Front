import React, { useState, useEffect }  from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from '../../components/NavBar';
import { getAppointmentasUser } from "../services/apiCalls";
import { userData } from "../userSlice";

export const GetAppointmentasUser = () => {

    const ReduxCredentials = useSelector(userData);

    const [appointments, setAppointments] = useState([]);
  
    useEffect(() => {
      if (ReduxCredentials.credentials.token) {
        getAppointmentasUser(ReduxCredentials.credentials?.token)
          .then((data) => {
              console.log(data);
            setAppointments(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, [ReduxCredentials.credentials.token]);


    return (
        <>
        <NavBar />
        <hr />
        <Container className="appoinment">
            <Row>
                <Col>
                        <div className='usersDesign'>
                    {  appointments.length > 0 ? 
                        (<div>
                            {
                                appointments.map(
                                    console.log(appointments),
                                    appointment => {
                                        return (
                                            <div 
                                                onClick={()=>selected(appointment)} 
                                                key={appointment.id}>
                                                {appointment.id}
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
                </Col>
            </Row>
        </Container>
         
      </>
    );
}

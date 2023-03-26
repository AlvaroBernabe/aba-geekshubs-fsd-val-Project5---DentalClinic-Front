import React, { useState, useEffect } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardAppointment from "../../components/CardAppointment";
import NavBar from "../../components/NavBar";
import { addChoosenAppointment, appointmentData } from "../appointmentSlice";
import { getAppointmentasUser } from "../services/apiCalls";
import { userData } from "../userSlice";

export const GetAppointmentasUser = () => {

    const ReduxCredentials = useSelector(userData);
    const ReduxAppointment = useSelector(appointmentData);
    const [appointments, setAppointments] = useState([]);
    
  const dispatch = useDispatch();
  const navigate = useNavigate();

    useEffect(() => {
        if (appointments.length === 0) {
            getAppointmentasUser(ReduxCredentials?.credentials?.token)
                .then((result) => {
                    setAppointments(result.data);
                    console.log(result);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [appointments]);


    const appointSelect = (appointment) => {
        dispatch(addChoosenAppointment({ choosenAppointment: appointment }));
        setTimeout(() => {
          navigate("/appointment/update");
        }, 1000);
      };

    return (
        <>
            <NavBar />
            <hr />
            <Container fluid>
                <Row>
                    {appointments.map((citas) => {
                        return (
                            <Col onClick={() => appointSelect(citas)} key={citas.id}>
                                <CardAppointment appo={citas} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
};

import React, { useState, useEffect } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardAppointment from "../../components/CardAppointment";
import NavBar from "../../components/NavBar";
import { getAppointmentasUser } from "../services/apiCalls";
import { userData } from "../userSlice";

export const GetAppointmentasUser = () => {

    const ReduxCredentials = useSelector(userData);
    const [appointments, setAppointments] = useState([]);

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
    return (
        <>
            <NavBar />
            <hr />
            <Container fluid>
                <Row>
                    {appointments.map((citas) => {
                        return (
                            <Col key={citas.id}>
                                <CardAppointment appo={citas} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
};

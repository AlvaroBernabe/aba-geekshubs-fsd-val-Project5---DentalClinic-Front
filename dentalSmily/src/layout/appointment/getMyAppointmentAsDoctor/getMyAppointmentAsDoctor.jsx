import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import NavBar from "../../../components/NavBar";
import { getAppointmentasDoctor } from "../../services/apiCalls";
import { userData } from "../../userSlice";

export const GetMyAppointmentAsDoctor = () => {
    const ReduxCredentials = useSelector(userData);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if (appointments.length === 0) {
            getAppointmentasDoctor(ReduxCredentials?.credentials?.token)
                .then(result => {
                    // console.log(result, "hola soy result");
                    setAppointments(result.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [appointments]);
    console.log(appointments.data, "hola soy appointment")

    return (
        <>
            <NavBar />
            <hr />
            <div>My appointments as doctor
                { appointments.length > 0 ? 
                    (<div className="cardsContainer">
                        {
                        appointments.map(
                            appointment => {
                            return (
                                <div
                                    key={appointment.id}>
                                    <div> {appointment.date}</div>            
                                </div>
                            )
                            }
                        )
                        }  
                        </div>)
                        :
                        ( <Spinner animation="border" variant="primary" />)
                    
                    }
                    </div>
        </>
    );
};

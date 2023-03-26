import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import NavBar from "../../../components/NavBar";
import { getAllAppoinment } from "../../services/apiCalls";
import { userData } from "../../userSlice";

export const GetAllAppointment = () => {
    const ReduxCredentials = useSelector(userData);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if (appointments.length === 0) {
            getAllAppoinment(ReduxCredentials?.credentials?.token)
                .then((result) => {
                    setAppointments(result.data.citasActivas);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [appointments]);
    console.log(appointments, "esto vale appointments");

    return (
        <>
            <NavBar />
            <hr />
            <div>
                All The Appointment :
                {appointments.length > 0 ? (
                    <div className="cardsContainer">
                        {appointments.map((appointment) => {
                            return (
                                <div key={appointment.id}>
                                    <ul>
                                        <div> {appointment.date}</div>
                                        <div> Doctor ID: {appointment.doctor_id}</div>
                                        <div> Nombre Cliente: {appointment.User.fullName}</div>
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <ProgressBar animated now={45} />
                )}
            </div>
        </>
    );
};

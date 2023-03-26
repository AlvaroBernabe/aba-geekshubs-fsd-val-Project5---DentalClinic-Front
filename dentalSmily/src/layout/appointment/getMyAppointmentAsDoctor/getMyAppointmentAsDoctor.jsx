import React, { useEffect, useState } from "react";
import { ProgressBar  } from "react-bootstrap";
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
                    setAppointments(result.data.data);
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
                        ( <ProgressBar animated now={45} />)
                    
                    }
                    </div>
        </>
    );
};

import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar";
import { getUserData } from "../services/apiCalls";
import { userData } from "../userSlice";
import "./Profile.css"

export const Profile = () => {
    const ReduxCredentials = useSelector(userData);

    const [users, setUsers] = useState({
        name: "",
        surname: "",
        nif: "",
        birth_date: "",
        direction: "",
        email: "",
        phone: "",
    });

    useEffect(() => {
        if (users.name === "") {
            getUserData(ReduxCredentials.credentials.token)
                .then((result) => {
                    console.log(result.data.data);
                    setUsers({
                        fullName: result.data.data.fullName,
                        email: result.data.data.email,
                        dni_nif: result.data.data.dni_nif,
                        payment: result.data.data.payment,
                        phone: result.data.data.phone,
                        role_id: result.data.data.role_id,
                    });
                })
                .catch((error) => console.log(error));
        }
    }, [users]);

    return (
        <>
            <NavBar />
            <hr />
            <div className="divCartas">
                <Card style={{ width: "20rem" }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <span class="text1"> Nombre Usuario:</span> 
                            <span class="text2"> {users.fullName}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span class="text1"> Email: </span> 
                            <span class="text2"> {users.email}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span class="text1"> Dni_Nif: </span> 
                            <span class="text2"> {users.dni_nif}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span class="text1"> Default Payment: </span> 
                            <span class="text2"> {users.payment}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span class="text1"> Phone number: </span> 
                            <span class="text2"> {users.phone}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span class="text1"> Role Id: </span> 
                            <span class="text2"> {users.role_id}</span>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </>
    );
};

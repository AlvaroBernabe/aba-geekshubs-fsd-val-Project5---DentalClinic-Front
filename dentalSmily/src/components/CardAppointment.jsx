import dayjs from "dayjs";
import React from "react";
import Card from "react-bootstrap/Card";

function CardAppointment({ appo }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title >
                    {dayjs(appo.date).format("MM/DD HH:mm")}
                </Card.Title>
                <ul>
                    <li><span className="textColor">Type of Treatment: </span>{appo.Service.servicename}</li>
                    <li><span className="textColor">Duration Treatment: </span>{appo.Service.duration}</li>
                    <li><span className="textColor">Price: </span>{appo.Service.price}</li>
                    <li><span className="textColor">Payment Method: </span>{appo.User.payment}</li>
                    <li><span className="textColor">Description: </span>{appo.Service.description}</li>
                </ul>
            </Card.Body>
        </Card>
    );
}

export default CardAppointment;

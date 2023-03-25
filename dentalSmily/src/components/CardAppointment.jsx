import React from "react";
import Card from 'react-bootstrap/Card';

//   export const CardAppointment = ({appo}) => {
    function CardAppointment ({appo})  {
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{appo.date}</Card.Title>
                <ul>
                    <li><li>Tipo de tratemiento</li>{appo.Service.servicename}</li>
                    <li><li>Dutación tratamiento</li>{appo.Service.duration}</li>
                    <li><li>Precio tratamiento</li>{appo.Service.price}</li>
                    <li><li>Tipo de pago</li>{appo.User.payment}</li>
                </ul>
          </Card.Body>
        </Card>
      );
    }
    

    
export default CardAppointment;
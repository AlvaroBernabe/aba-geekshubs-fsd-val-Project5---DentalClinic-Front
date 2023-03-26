import React from "react";
import NavBar from "../../components/NavBar";
import "./Treatment.css";
import treatment1 from '../../assets/treatment1.png';
import treatment2 from '../../assets/treatment2.png';
import treatment3 from '../../assets/treatment3.png';
import treatment4 from '../../assets/treatment4.png';
import treatment5 from '../../assets/treatment5.png';
import treatment6 from '../../assets/treatment6.png';
import treatment7 from '../../assets/treatment7.png';
import treatment8 from '../../assets/treatment8.png';
import { Card, CardGroup, Figure } from "react-bootstrap";


export const Treatment = () => {
    return (
        <>
            <NavBar />
            <hr />
            <h1>Welcome To the treatments Available</h1>
            <div className="main">
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={treatment1} />
                    <Card.Body>
                    <Card.Title>Missing Teeth</Card.Title>
                    <Card.Text>
                    We can restore your smile, as well as speaking & eating ability with advanced prosthetics.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={treatment2} />
                    <Card.Body>
                    <Card.Title>Uneven Teeth</Card.Title>
                    <Card.Text>
                    We offer a state of the art solution of straightening your teeth through invisible dental braces.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={treatment3} />
                    <Card.Body>
                    <Card.Title>Tooth Stains</Card.Title>
                    <Card.Text>
                    We offer a couple of whitening procedures to brighten your teeth and return the smile yo tour face.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={treatment4} />
                    <Card.Body>
                    <Card.Title>Broken or Chipped Tooth</Card.Title>
                    <Card.Text>
                    Chipped teeth can be treated either by cosmetic bonding or porcelain restoration.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={treatment5} />
                    <Card.Body>
                    <Card.Title>Dental Anxiety</Card.Title>
                    <Card.Text>
                    We offer a wide range of services to help you overcome your fear and finally enjoy good oral health.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={treatment6} />
                    <Card.Body>
                    <Card.Title>Tooth Pain</Card.Title>
                    <Card.Text>
                    Tooth pain can be caused by various problems. Oral examination can help determine the cause.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={treatment7} />
                    <Card.Body>
                    <Card.Title>Periodontal Disease</Card.Title>
                    <Card.Text>
                    We offer a variety of periodontal treatments, customized for your specific health needs.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={treatment8} />
                    <Card.Body>
                    <Card.Title>Cavvities & Decay</Card.Title>
                    <Card.Text>
                    We use modern technology to detect decay in the earliest stages, saving and preserving your teeth.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
        </>
    );
};

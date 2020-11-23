import React, { Component } from 'react';
import { Container, Card, Button } from "react-bootstrap";
import { ProfessionalConsultantsMock } from './ProfessionalConsultantsMock';
import { Link } from 'react-router-dom';
class ProfessionalConsultants extends Component {
    state = {}
    render() {
        return (
            <div>
                <Container>
                    <input type="text" className="input" placeholder="Search..." />
                </Container>
                { ProfessionalConsultantsMock.map((item, index) => {
                    return (
                        <Container>
                            <Card key={index} style={{ width: '70rem', display: 'flex', flexDirection: 'row' }}>
                                <Card.Img className="profile" thumbnail src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.Des}
                                    </Card.Text>
                                    <Card.Footer>{item.Location}</Card.Footer>
                                    <Link to="/home/professionalconsultants/book">
                                        <Button variant="primary">Book an Appointment</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                            <br></br>
                        </Container>
                    );
                }
                )}
            </div>
        );
    }
}

export default ProfessionalConsultants;
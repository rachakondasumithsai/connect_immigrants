import React, { Component } from 'react';
import { FindPeopleMock } from './FindPeopleMock';
import { Container, Card, Button } from "react-bootstrap";

import "./FindPeople.css"
class Connection extends Component {
    state = {}
    render() {
        return (
            <div>
                <Container>
                    <input type="text" className="input" placeholder="Search..." />
                </Container>
                { FindPeopleMock.map((item, index) => {
                    return (
                        <Container>
                            <Card key={index} style={{ width: '70rem', display: 'flex', flexDirection: 'row' }}>
                                <Card.Img className="profile" thumbnail src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.Des}
                                    </Card.Text>
                                    <Card.Footer>{item.Uni}, {item.Location}</Card.Footer>
                                    <Button variant="primary">Request for Help</Button>
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

export default Connection;
import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { ProfessionalConsultantsMock } from './ProfessionalConsultantsMock';
import { ConnectionsMock } from "./ConnectionsMock"

const Connections = () => {
    return (
        <div>
            <h1>Connection Requests</h1>
            <div class="ui two doubling stackable cards">
                {ProfessionalConsultantsMock.map((item, index) => {
                    return (
                        <div>
                            <Card key={index} style={{ width: '46rem', height: '15rem' }}>
                                <Card.Content>
                                    <Image
                                        floated='right'
                                        size="tiny"
                                        src={item.image}

                                    />
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Meta>{item.Location}</Card.Meta>
                                    <Card.Description>
                                        {item.Des}
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='buttons'>
                                        <Button basic color='green'>
                                            Approve
              </Button>
                                        <Button basic color='red'>
                                            Decline
              </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </div>
                    )
                })}
            </div>
            <h1>Your Connections</h1>
            <div class="ui four doubling stackable cards">

                {ConnectionsMock.map((item, index) => {
                    return (
                        <div>
                            <Card key={index} style={{ width: '22rem' }}>
                                <Card.Content>
                                    <Image
                                        floated='right'
                                        size="tiny"
                                        src={item.image}

                                    />
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Meta>{item.Location}</Card.Meta>
                                    <Card.Description>
                                        {item.Des}
                                    </Card.Description>
                                </Card.Content>

                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Connections;
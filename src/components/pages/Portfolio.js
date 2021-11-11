import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Portfolio() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Din-Din A menu App</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Made by Anastayzia</Card.Subtitle>
                    <Card.Text>
                        This app is a resturant that was made with handlebars, js, sql and fuck 
                    </Card.Text>
                    <Card.Link href="https://secure-crag-98297.herokuapp.com/login" target="_blank" rel="noreferrer"> Din Din! </Card.Link>
                </Card.Body>
            </Card>
            
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>E-Commerence Backend</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        This app is a resturant that was made with handlebars, js, sql and fuck 
                    </Card.Text>
                    <Card.Link href="https://github.com/akerschen-coder/e-commerence" target="_blank" rel="noreferrer"> E-Commernce Backend </Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Weahter Dashboard</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                       weather dashboard 
                    </Card.Text>
                    <Card.Link href="https://akerschen-coder.github.io/weather-dashboard/" target="_blank" rel="noreferrer">Weather Dashbord </Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Note Taker</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                       Note Taker
                    </Card.Text>
                    <Card.Link href="https://limitless-eyrie-51099.herokuapp.com/" target="_blank" rel="noreferrer"> Weather Dashbord </Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Note Taker</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                       Note Taker
                    </Card.Text>
                    <Card.Link href="https://github.com/akerschen-coder/employee-page-builder" target="_blank" rel="noreferrer"> Note Taker</Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Backend employee builder</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                       Backend employee builder
                    </Card.Text>
                    <Card.Link href="https://github.com/akerschen-coder/employee-page-builder" target="_blank" rel="noreferrer"> Backend employee builder </Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}
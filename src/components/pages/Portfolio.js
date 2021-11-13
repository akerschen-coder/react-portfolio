import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Portfolio() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}} className = 'mb-3 mt-3 pl-3 pr-4'>
            <Card style={{ width: '18rem'}} className = 'mb-3 mt-3'>
                <Card.Body>
                    <Card.Title>Din-Din A menu App</Card.Title>
                    <Card.Text>
                        This app is a resturant that was made with handlebars, js, sql and includes authtification. Below is the link to the repo. 
                    </Card.Text>
                    <Card.Link href="https://secure-crag-98297.herokuapp.com/login" target="_blank" rel="noreferrer"> Din Din! </Card.Link>
                </Card.Body>
            </Card>
            
            <Card style={{ width: '18rem', display: 'flex', justifyContent: 'center' }} className = 'mb-3 mt-3 pt-3 pb-4'>
                <Card.Body>
                    <Card.Title>E-Commerence Backend</Card.Title>
                    <Card.Text>
                        This app was made with node js and express for a companies product information. Below is the link to the repo.
                    </Card.Text>
                    <Card.Link href="https://github.com/akerschen-coder/e-commerence" target="_blank" rel="noreferrer"> E-Commernce Backend </Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', display: 'flex', justifyContent: 'center' }}className = 'mb-3 mt-3 pt-3 pb-4'>
                <Card.Body>
                    <Card.Title>Weahter Dashboard</Card.Title>
                    <Card.Text>
                       This app was made by fetching from a restful API, using js, html and classic CSS5. Below is the link to the repo.
                    </Card.Text>
                    <Card.Link href="https://akerschen-coder.github.io/weather-dashboard/" target="_blank" rel="noreferrer">Weather Dashbord </Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', display: 'flex', justifyContent: 'center' }} className = 'mb-3 mt-3 pt-3 pb-4'>
                <Card.Body>
                    <Card.Title>Note Taker</Card.Title>
                    <Card.Text>
                        This app is made with js, html and css. Below is the link to the repo.
                    </Card.Text>
                    <Card.Link href="https://limitless-eyrie-51099.herokuapp.com/" target="_blank" rel="noreferrer"> Note Taker</Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', display: 'flex', justifyContent: 'center' }} className = 'mb-3 mt-3 pt-3 pb-4'>
                <Card.Body>
                    <Card.Title>Backend Employee Builder</Card.Title>
                    <Card.Text>
                      This is a backend app that takes in users information to create a team using node js and express. Below is the link to the repo.
                    </Card.Text>
                    <Card.Link href="https://github.com/akerschen-coder/employee-page-builder" target="_blank" rel="noreferrer"> Note Taker</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}
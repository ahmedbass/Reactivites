import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Button, Container, ListGroup } from "react-bootstrap";

function App() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/Activities").then((response) => {
            console.log(response);
            setActivities(response.data);
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <h1>HELLOOOOOUUUU</h1>
                    <Button>WOW</Button>
                    <ListGroup className="text-dark ">
                        {activities.map((activity: any, i) => (
                            <ListGroup.Item className={i === 0 ? "active" : ""} key={activity.id}>
                                {activity.title}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <h1>HELLOOOOOUUUU</h1>
                </Container>
            </header>
        </div>
    );
}

export default App;

import React from "react";
import { Container, Card } from "react-bootstrap";
import "./styles/Projects.css";



const Projects = () => {
    return (
        <>
            <Container className="projects-container">
                <h2>Projects</h2>
                <div className="project-list">
                    <Card className="project-item">
                        <Card.Body>
                            <Card.Title>Weather wave</Card.Title>
                            <Card.Text>Weather wave is a weather showcase website that displays weather information using data from the OpenWeatherMap API. The website provides users with current weather conditions, forecasts, and other relevant weather details for a specified location.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="project-item">
                        <Card.Body>
                            <Card.Title>Second project.</Card.Title>
                            <Card.Text>lorem</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Container>


        </>
    )
}

export default Projects
import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import "./styles/Projects.css";
import weatherwave1 from "../src/images/Weatherwave1.png"
import weatherwave2 from "../src/images/Weatherwave2.png"


const Projects = () => {
    return (
        <>
            <Container className="projects-container">
                <h2>Projects</h2>
                <div className="project-list">
                    <Card className="project-item">

                        <Card.Body>
                            <a href="https://weatherwaave.netlify.app/" target="_blank" rel="noopner noreferrer" className="card-link">
                                <Card.Title>Weather wave</Card.Title>
                            </a>
                            <Card.Text>Weather wave is a weather showcase website that displays weather information using data from the OpenWeatherMap API. The website provides users with current weather conditions, forecasts, and other relevant weather details for a specified location.</Card.Text>
                            <Card.Img variant="top" src={weatherwave1} className="custom-card-img" />
                            <Card.Img variant="top" src={weatherwave2} className="custom-card-img" />
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
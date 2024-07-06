import React from "react";
import { Link } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"


const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
                <LinkContainer to="/">
                    <Navbar.Brand>My app</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic.navbar-nav">
                    <nav className="ml-auto">
                        <LinkContainer to="/projects">
                            <Nav.Link>Projects</Nav.Link>
                        </LinkContainer>

                    </nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Header;

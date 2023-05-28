import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavbarTop extends React.Component {
    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand><Link to="/" className="text-decoration-none">Portfolio</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/" className="text-decoration-none">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/about" className="text-decoration-none">About</Link></Nav.Link>
                            <Nav.Link><Link to="/experience" className="text-decoration-none">Experience</Link></Nav.Link>
                            <Nav.Link><Link to="/skills" className="text-decoration-none">Skills</Link></Nav.Link>
                            <Nav.Link><Link to="/interest" className="text-decoration-none">Interest</Link></Nav.Link>
                            <Nav.Link><Link to="/award" className="text-decoration-none">Award</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavbarTop
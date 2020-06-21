import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';
import {Navbar, Nav } from 'react-bootstrap';


const NavbarPage = () => (
    <>
        <Navbar collapseOnSelect expand="md">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="menuHead flex-column">
                    <Nav.Link as={NavLink} className="menuItem" to="/">HOME</Nav.Link>
                    <Nav.Link as={NavLink} className="menuItem" to="/about">ABOUT ME</Nav.Link>
                    <Nav.Link as={NavLink} className="menuItem" to="/skills">SKILLS</Nav.Link>
                    <Nav.Link as={NavLink} className="menuItem" to="/experince">EXPERINCE</Nav.Link>
                    <Nav.Link as={NavLink} className="menuItem" to="/education">EDUCATION</Nav.Link>
                    <Nav.Link as={NavLink} className="menuItem" to="/portfolio">PORTFOLIO</Nav.Link>
                    <Nav.Link as={NavLink} className="menuItem" to="/contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
);

export default NavbarPage;
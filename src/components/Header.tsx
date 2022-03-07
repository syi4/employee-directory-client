import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Employee Directory</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ marginLeft: "auto" }}>
            <LinkContainer
              to="/add-employee"
              style={{ textDecoration: "none" }}
            >
              <Nav.Link>Add Employee</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

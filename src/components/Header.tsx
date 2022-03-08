import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [search, setSearch] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("");
  };

  return (
    <Navbar bg="primary" expand="lg" variant="dark" style={{ height: "80px" }}>
      <Container className="d-flex justify-content-between">
        <LinkContainer to="/">
          <Navbar.Brand>Employee Directory</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex justify-content-between">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Enter employee name"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-light" onClick={handleClick}>
                Search
              </Button>
            </Form>
          </div>
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

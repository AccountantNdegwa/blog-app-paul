import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import './MyNavbar.css'; // Import the custom CSS file

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Row className="w-100 align-items-center">
          <Col xs={6}>
            <Navbar.Brand href="/" className="text-primary">Paul Blog</Navbar.Brand>
          </Col>
          <Col xs={3} className="text-end">
            <Nav>
              <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            </Nav>
          </Col>
          <Col xs={3} className="text-end">
            <Nav>
              <Nav.Link as={Link} to="/create" className="nav-link-custom">Create</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

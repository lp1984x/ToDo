import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar
      variant="dark"
      sticky="top"
      className="mb-2"
      style={{ background: "#373684" }}
    >
      <Container>
        <Navbar.Brand>ToDo List</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">About</Nav.Link>
            </Nav.Item>
          </Nav>
          <Navbar.Text>
            <small>Made by:</small> <a href="#login">LP84</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

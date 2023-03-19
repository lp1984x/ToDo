import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as icon from "react-bootstrap-icons";

export default function Header() {
  return (
    <Navbar
      variant="dark"
      sticky="top"
      className="mb-2"
      style={{ background: "#373684" }}
    >
      <Container>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand>ToDo List</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link href="https://github.com/lp1984x/learn_react">
                <icon.Github color="white" size={20} />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="about" className="text-decoration-none">
                <Nav.Link href="/home">About</Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

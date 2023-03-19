import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as icon from "react-bootstrap-icons";
import "./header.scss";

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
              <Link to="https://github.com/lp1984x/learn_react" className="lkn">
                <icon.Github size={20} />
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to="/about" className="text-decoration-none fs-5 ms-3 lkn">
                About
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

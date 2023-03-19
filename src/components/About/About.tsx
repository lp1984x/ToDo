import React from "react";
import { Card } from "react-bootstrap";

export default function About() {
  return (
    <Card className="border-0 p-3 rounded-3 shadow wrap">
      <Card.Title className="text-center">About</Card.Title>
      <Card.Body>
        <Card.Text>
          This ToDo is made by{" "}
          <a
            href="https://lp84-demo.netlify.app"
            className="text-decoration-none"
          >
            Lp84
          </a>{" "}
          with:
          <ul>
            <li>react</li>
            <li>redux-toolkit</li>
            <li>typescript</li>
            <li>react-bootstrap</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

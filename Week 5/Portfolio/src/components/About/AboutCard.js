import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">AGUS SISWANTO </span>
            from <span className="purple"> Tasikmalaya, Indonesia.</span>
            <br />I am a Engineer Specialist in PT. Erafone Dot Com
            <br />
          </p>
          <br />
          <br />

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Agus Siswanto</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

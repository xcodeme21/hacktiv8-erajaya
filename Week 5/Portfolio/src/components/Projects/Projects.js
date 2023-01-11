import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import myeraspace from "../../Assets/Projects/myeraspace.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myeraspace}
              isBlog={false}
              title="MyEraspace"
              description="MyEraspace (sebelumnya ERACLUB) adalah program loyalitas pelanggan yang ditawarkan oleh PT. Erajaya Swasembada Tbk. (ERAJAYA) dan anak perusahaannya kepada pelanggannya (Keanggotaan)."
              demoLink="https://eraspace.com/myeraspace"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

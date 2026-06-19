import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      <Particle />

      <Container fluid className="about-section px-3 px-md-5">
        <Container>

          {/* TOP SECTION */}
          <Row
            className="align-items-center justify-content-center"
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
          >

            {/* LEFT SIDE */}
            <Col
              xs={12}
              md={7}
              className="text-center text-md-start mb-5 mb-md-0"
            >

              <h1
                style={{
                  fontSize: "clamp(2rem, 5vw, 2.8rem)",
                  paddingBottom: "20px",
                }}
              >
                Know Who <strong className="purple">I'M</strong>
              </h1>

              <AboutCard />
            </Col>

            {/* RIGHT SIDE IMAGE */}
            <Col
              xs={12}
              md={5}
              className="about-img text-center"
            >

              <img
                src={laptopImg}
                alt="about"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  paddingTop: "20px",
                }}
              />
            </Col>

          </Row>

          {/* SKILLS */}
          <h1
            className="project-heading text-center"
            style={{
              fontSize: "clamp(2rem, 5vw, 2.7rem)",
              marginBottom: "30px",
            }}
          >
            Professional <strong className="purple">Skillset</strong>
          </h1>

          <Techstack />

          {/* TOOLS */}
          <h1
            className="project-heading text-center"
            style={{
              fontSize: "clamp(2rem, 5vw, 2.7rem)",
              marginTop: "50px",
              marginBottom: "30px",
            }}
          >
            <strong className="purple">Tools</strong> I use
          </h1>

          <Toolstack />

          {/* GITHUB */}
          <div style={{ marginTop: "60px" }}>
            <Github />
          </div>

        </Container>
      </Container>
    </>
  );
}

export default About;
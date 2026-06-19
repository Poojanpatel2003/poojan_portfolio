import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Poojan Patel</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">

            {/* GITHUB */}
            <li className="social-icons">
              <a
                href="https://github.com/Poojanpatel2003"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>

            {/* LINKEDIN */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/poojan-patel-21022527b/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>

            {/* WHATSAPP */}
            <li className="social-icons">
              <a
                href="https://wa.me/919722379175"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaWhatsapp />
              </a>
            </li>

            {/* INSTAGRAM */}
            <li className="social-icons">
              <a
                href="https://www.instagram.com/poojan_patel_01?utm_source=qr&igsh=MWh0cjZrdDcyajZoMg%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>

          </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;

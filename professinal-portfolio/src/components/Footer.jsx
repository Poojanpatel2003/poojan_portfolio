import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Poojan Patel</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
                          <a
                            href="https://github.com/Poojanpatel2003"
                            target="_blank"
                            rel="noreferrer"
                             style={{ color: "white" }}
                          >
                            <AiFillGithub />
                          </a>
                        </li>
            <li className="social-icons">
                          <a
                            href="https://www.linkedin.com/in/poojan-patel-21022527b/"
                            target="_blank"
                            rel="noreferrer"
                             style={{ color: "white" }}
                          >
                            <FaLinkedinIn />
                          </a>
                        </li>
            <li className="social-icons">
                          <a
                            href="https://wa.me/919722379175"
                            target="_blank"
                            rel="noreferrer"
                             style={{ color: "white" }}
                          >
                            <FaWhatsapp />
                          </a>
                        </li>
            <li className="social-icons">
                          <a
                            href="https://www.instagram.com/poojan_patel_01?utm_source=qr&igsh=MWh0cjZrdDcyajZoMg%3D%3D"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "white" }}
                          >
                            <AiFillInstagram />
                          </a>
                        </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

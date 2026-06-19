import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../assets/TechIcons/Google Chrome.svg";
import vsCode from "../../assets/TechIcons/vscode.svg";
import render from "../../assets/TechIcons/Render Symbol SVG.svg"
import vercel from "../../assets/TechIcons/vercel-icon-svgrepo-com.svg"
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={render} style={{background:"white",padding:"4px"}} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Render</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={vercel} style={{background:"white",padding:"4px"}} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">vercel</div>
      </Col>
    </Row>
  );
}

export default Toolstack;

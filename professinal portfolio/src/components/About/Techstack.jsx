import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import Go from "../../assets/TechIcons/go.svg";
import C from "../../assets/TechIcons/C++.svg";
import Javascript from "../../assets/TechIcons/Javascript.svg";
import Node from "../../assets/TechIcons/Node.svg";
import ReactIcon from "../../assets/TechIcons/React.svg";
import HaskellIcon from "../../assets/TechIcons/Haskell.svg";
import Java from "../../assets/TechIcons/Java.svg";
import Python from "../../assets/TechIcons/Python.svg";
import Typescript from "../../assets/TechIcons/Typescript.svg";
import Git from "../../assets/TechIcons/Git.svg";
import Firebase from "../../assets/TechIcons/Firebase.svg";
import Redis from "../../assets/TechIcons/Redis.svg";
import Docker from "../../assets/TechIcons/Docker.svg";
import Mongo from "../../assets/TechIcons/Mongo.svg";
import SQL from "../../assets/TechIcons/SQL.svg";
import Kubernates from "../../assets/TechIcons/Kubernates.svg";
import Redux from "../../assets/TechIcons/Redux.svg";
import Tailwind from "../../assets/TechIcons/Tailwind.svg";
import MUI from "../../assets/TechIcons/MUI.svg";
import Postman from "../../assets/TechIcons/Postman.svg";
import AWS from "../../assets/TechIcons/AWS.svg";
import Kafka from "../../assets/TechIcons/Kafka.svg";
import expressjs from "../../assets/TechIcons/express.png"
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={expressjs} style={{height:"28px"}}alt="redux" />
        <div className="tech-icons-text">expressJs</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">Postgresql</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>
    </Row>
  );
}

export default Techstack;

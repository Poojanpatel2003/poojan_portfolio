import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view border-0 shadow-lg">

      <Card.Body className="p-4 p-md-5">

        <blockquote className="blockquote mb-0">

          <p
            style={{
              textAlign: "justify",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              lineHeight: "1.9",
            }}
          >
            Hi everyone! I’m{" "}
            <span className="purple">Poojan Patel</span> from{" "}
            <span className="purple">Mehsana, Gujarat, India</span>.

            <br />

            I’m currently a fresher as a{" "}
            <span className="purple">Software Developer</span>.

            <br />

            I've completed my B.Tech in{" "}
            <span className="purple">
              Computer Science & Engineering
            </span>{" "}
            from{" "}
            <span className="purple">
              Parul University, Vadodara, Gujarat
            </span>.
          </p>

          <br />

          <h4
            className="purple"
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
              marginBottom: "20px",
            }}
          >
            Activities I Enjoy
          </h4>

          <ul
            style={{
              paddingLeft: "10px",
              lineHeight: "2",
              fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
            }}
          >

            <li className="about-activity">
              <ImPointRight /> Playing Outdoor Games 🏏
            </li>

            <li className="about-activity">
              <ImPointRight /> Doing Exercise 🏃‍♂️
            </li>

            <li className="about-activity">
              <ImPointRight /> Traveling & Exploring Places 🌍
            </li>

          </ul>

          <br />

          <p
            style={{
              color: "rgb(155 126 172)",
              textAlign: "center",
              fontSize: "clamp(1rem, 3vw, 1.2rem)",
              fontStyle: "italic",
            }}
          >
            "संकल्पः निश्चयति भाग्यम्!"
          </p>

          <p
            style={{
              color: "rgb(155 126 172)",
              textAlign: "center",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            }}
          >
            "Decision Decide Destiny!"
          </p>

          <footer
            className="blockquote-footer text-center mt-3"
            style={{ fontSize: "1rem" }}
          >
            Poojan
          </footer>

        </blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import healthHub from "../../assets/Projects/healthhub.png";
import jobportal from "../../assets/Projects/jobportal.png"
import shopYatra from "../../assets/Projects/shopyatra.png"
import manageHub from "../../assets/Projects/manageHub.png"
import music from "../../assets/Projects/music.png"

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
            <ProjectCards
              imgPath={healthHub}
              isBlog={false}
              title="Doctor appointment booking System     (User-Admin)" description=" doctor appointment booking system using MERN with role-based authentication and REST APIs.Implemented doctor search,appointment scheduling, real-time updates, and admin dashboard for managing users,doctors, and appointments"
              ghLink="https://github.com/Poojanpatel2003/DoctorAppointment.git"
              demoLink="https://doctorappointment-1-bwtl.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={jobportal}
              isBlog={false}
              title="Job-Portal"
              description=" job-portal website using the MERN stack that caters to both job seekers and recruiters. The platform provides
job seekers with functionalities like profile creation, job search, filtering options. Recruiters can post job openings, manage applications, and filter candidates based on their
qualifications and experience. "
              ghLink="https://github.com/Poojanpatel2003/JobPortal.git"
              demoLink="https://jobportal-psqj.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={shopYatra}
              isBlog={false}
              title="ShopYatra"
              description="Developed a full-stack e-commerce website using the MERN stack with a responsive and modern user interface. Implemented features like product listing, shopping cart, user authentication, and category-based product browsing. Focused on smooth user experience, responsive design, and frontend-backend integration."
              ghLink="https://github.com/Poojanpatel2003/Ecommerce--MERN-.git"
              demoLink="https://shopyatra-frontend.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={manageHub}
              isBlog={false}
              title="Customer Management System"
              description="Developed a responsive Customer Management System using the MERN stack to manage customer records efficiently. Implemented features like adding, updating, deleting, and searching customer details with a user-friendly dashboard interface. Focused on CRUD operations, responsive UI, and smooth frontend-backend integration."
              ghLink="https://github.com/Poojanpatel2003/Manage_Hub.git"
              demoLink="https://manage-hub.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={music}
              isBlog={false}
              title="Music Player"
              description="Built a music player web application with features like play, pause, next/previous track controls, and dynamic song management. Designed an interactive and user-friendly UI with smooth audio playback functionality. Focused on responsive design, clean user experience, and media control integration."
              ghLink="https://github.com/Poojanpatel2003/Music_Player.git"
              demoLink="https://music-player-7hqk.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

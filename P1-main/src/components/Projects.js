import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/brain.webp";
import projImg2 from "../assets/img/med.jpg";
import projImg3 from "../assets/img/movie.webp";
import projImg4 from "../assets/img/market.webp";
import projImg5 from "../assets/img/ml.webp";
import projImg6 from "../assets/img/blank.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import './Project.css'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Brain Brain",
      description: "The brain tumor detection system utilizes a UNET-CNN algorithm, achieving an impressive 99.86% accuracy. This deep learning model excels in segmenting tumor regions from MRI scans with high precision, enhancing diagnostic accuracy.",
      imgUrl: projImg1,
      link: "https://github.com/Krish-Paul/brain-mri"
    },
    {
      title: "Inner Thoughts",
      description: "Developed an intuitive chatbot interface that facilitates user communication in a supportive environment. Implemented personalized Cognitive Behavioral Therapy exercises and engaging distractions to promote emotional well-being.",
      imgUrl: projImg2,
      link: "https://innerthoughts.vercel.app/"
    },
    {
      title: "MovieMate",
      description: "Developed a movie recommender system using collaborative filtering techniques with Python, pandas, and NumPy. The system analyzes user ratings to generate personalized movie suggestions through item-based collaborative filtering.",
      imgUrl: projImg3,
      link: "https://github.com/Krish-Paul/movie-recommendation"
    },
    {
      title: "MarketAI",
      description: "Developed a marketing strategy using AI and machine learning, employing K-means clustering for customer segmentation into distinct groups for targeted ad campaigns. Utilized autoencoders for data encoding and PCA for dimensionality reduction.",
      imgUrl: projImg4,
      link: "https://github.com/Krish-Paul/marketAI"
    },
    {
      title: "Advances in Brain Tumor Detection and Localization: A Comprehensive Survey",
      description: "Recently published as a book chapter in (Intelligent Data Analytics for Bioinformatics and Biomedical Systems), this survey explores the role of deep learning in advancing brain tumor detection and localization.",
      imgUrl: projImg5,
      link: "https://github.com/Krish-Paul/book-chapter"
    },
    {
      title: "Future Project",
      description: "To be updated soon",
      imgUrl: projImg6,
      link: "#"
    },
  ];

  const renderProjects = (startIndex, endIndex) => {
    return projects.slice(startIndex, endIndex).map((project, index) => (
      <div className="project-item" key={index}>
        <Row>
          <Col md={4}>
            <div className="project-img">
              <img src={project.imgUrl} alt={`Project ${index + 1}`} />
            </div>
          </Col>
          <Col md={8}>
            <div className="project-content">
              <h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <p>{project.description}</p>
            </div>
          </Col>
        </Row>
      </div>
    ));
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>These are some of my recent works. Click on the titles to visit the project repositories.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      {renderProjects(0, 2)}
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {renderProjects(2, 4)}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {renderProjects(4, 6)}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
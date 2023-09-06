import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import fit from "../assets/img/Fitness.png";
import Mern from "../assets/img/MERN.png"

export const Projects = () => {

  const projects = [
    {
      title: "Fitness Exercise App",
      description: "React 18",
      imgUrl: fit,
      navigate: "https://github.com/Prashansa2205/Gym-Exercises"
    },
    {
      title: "Finance Dashboard",
      description: "MERN Stack",
      imgUrl: Mern,
      navigate: "https://github.com/Prashansa2205/Sterling-Finance-Dashboard"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      navigate: ""
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 style={{marginBlockEnd:50}}>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

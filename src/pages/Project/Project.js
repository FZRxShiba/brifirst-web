import React from 'react'
import bgsection from "./background.png";
import project1 from "./project1.png";
import project2 from "./project2.png";
import project3 from "./project3.png";
import project4 from "./project4.png";
import project5 from "./project4.png";
import Carousel from 'react-bootstrap/Carousel';
import "./Project.css";


const Project = () => {
  return (
    <div class="imgBox bgcr" id="projectsection">
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project1} alt="Project 1" height="auto" width="100%" id="image-section"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project2} alt="Project 1" height="auto" width="100%" id="image-section"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project3} alt="Project 1" height="auto" width="100%" id="image-section"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project4} alt="Project 1" height="auto" width="100%" id="image-section"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={project5} alt="Project 1" height="auto" width="100%" id="image-section"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
  )
}

export default Project
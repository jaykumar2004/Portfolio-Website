import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import game from "../../Assets/Projects/game.png";
import emotion from "../../Assets/Projects/emotion.png";
import food from "../../Assets/Projects/food.png";
import todo from "../../Assets/Projects/todo.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import currency from "../../Assets/Projects/currency.png"

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
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Currency Converter"
              description="A simple and efficient currency converter built with React, allowing users to convert between multiple currencies in real time. It fetches live exchange rates from an API for accurate conversions. The intuitive UI ensures a seamless user experience."
              ghLink="https://github.com/jaykumar2004/Currency-Calculator"
              demoLink="https://currency-calculator-dusky.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce Site"
              description="A responsive eCommerce website built with HTML, CSS, and JavaScript, offering a seamless shopping experience. Features include product listings, a shopping cart, and interactive UI elements. Designed for smooth navigation and user-friendly interactions."
              ghLink="https://github.com/jaykumar2004/E-commerce-website"
              demoLink="https://jaykumar2004.github.io/E-commerce-website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food App"
              description=" 'JAY DA DABHA' is a dynamic food app built with React, integrating Swiggy's live API for real-time restaurant and menu updates. It offers a seamless food ordering experience with an intuitive UI. Users can browse, select, and order their favorite dishes effortlessly."
              ghLink="https://github.com/jaykumar2004/React-JS-with-AS/tree/main/Swiggy_from_episode-5"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Game Listing Site"
              description="A game listing site built with React, showcasing a collection of games with detailed information. Features include dynamic filtering, search functionality, and an engaging UI. Designed for gamers to explore and discover new titles easily."
              ghLink="https://github.com/jaykumar2004/Game_Listing_Website"
              demoLink="https://game-listing-website-roan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do list"
              description="A To-Do List app built with Redux Toolkit (RTK) for efficient state management. Users can add, edit, and delete tasks with a seamless and responsive UI. Designed for productivity with a smooth user experience."
              ghLink="https://github.com/jaykumar2004/To_Do_List_By_RTK"
              demoLink = "https://to-do-list-by-rtk.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

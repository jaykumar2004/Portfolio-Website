import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import game from "../../Assets/Projects/game.png";
import food from "../../Assets/Projects/food.png";
import todo from "../../Assets/Projects/todo.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import currency from "../../Assets/Projects/currency.png";
import devTinder from "../../Assets/Projects/devTinder.png";
import netflix from "../../Assets/Projects/netflix.png";
import quickblog from "../../Assets/Projects/quickblog.png";
import chatApp from "../../Assets/Projects/chatApp.png";

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
              imgPath={netflix}
              isBlog={false}
              title="Netflix-GPT"
              description="Netflix_GPT is a smart movie browsing app that integrates OpenAI's GPT capabilities to provide personalized movie recommendations, intelligent search, and a dynamic Netflix-like UI experience — all powered by React!"
              ghLink="https://github.com/jaykumar2004/Netflix"
              demoLink="https://netflix-n7nu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devTinder}
              isBlog={false}
              title="Dev-Tinder"
              description="Dev-Tinder is a matchmaking platform designed for developers to find potential collaborators for projects, hackathons, or startups. Inspired by the swipe-based model of dating apps, devTinder allows users to create profiles showcasing their skills, interests, and current projects."
              ghLink="https://github.com/jaykumar2004/Dev-Tinder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quickblog}
              isBlog={false}
              title="Quickblog"
              description="Quickblog is a personal blogging platform where users can read blog posts written and shared by you. It features a clean, user-friendly interface that allows visitors to easily browse through your thoughts, ideas, tutorials, or updates."
              ghLink="https://github.com/jaykumar2004"
              demoLink="https://quick-blog-mu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="Chat App"
              description="Chat App is a real-time messaging platform built using Socket.IO, enabling instant communication between users. It supports features like live message exchange, user join/leave notifications, and dynamic chat rooms."
              ghLink="https://github.com/jaykumar2004/Chat-App"
              demoLink="https://chat-app-bgpv.vercel.app"
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
              imgPath={todo}
              isBlog={false}
              title="To-Do list"
              description="A To-Do List app built with Redux Toolkit (RTK) for efficient state management. Users can add, edit, and delete tasks with a seamless and responsive UI. Designed for productivity with a smooth user experience."
              ghLink="https://github.com/jaykumar2004/To_Do_List_By_RTK"
              demoLink="https://to-do-list-by-rtk.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

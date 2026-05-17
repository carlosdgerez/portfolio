import React from "react";
import "./ProjectGallery.css";
import ML from "../images/code.jpg";
import Web from "../images/website.jpg";
import Programming from "../images/matrix.jpg";
import Infrastructure from "../images/machine.jpg";
import Docker from "../images/dockerq2a.png";
import Weather from "../images/bot.png";
import Bot from "../images/bot.png";
import Mastodon from "../images/mastodonDocker.png";
import Systems from "../images/desk.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectsGallery = () => {
  return (
    <div id="portfolio" className="projects-gallery">
      <h1>My Projects</h1>
      <div className="projects-container">
        <div className="project-card">
          <a href="https://github.com/carlosdgerez/carlosdgerez.github.io" target="_blank" rel="noopener noreferrer">
          <LazyLoadImage src={Infrastructure} alt="Infrastructure Proyect" width={'100%'} effect="blur"/>
          </a>
          <h3>Infrastructure with Vagrant</h3>
          <p>
            Infrastructure was developed for the Fall 2024 Hackathon to help BYU-I students rate and review their classes. Using <span className="tech-color">JavaScript</span>, <span className="tech-color">EJS</span>, <span className="tech-color">CSS</span>, and <span className="tech-color">HTML</span>, this platform allows students to share feedback and help others make informed decisions about their courses.
          </p>
        </div>
        <div className="project-card">
          <a href="https://github.com/carlosdgerez/carlosdgerez.github.io" target="_blank" rel="noopener noreferrer">
          <LazyLoadImage src={Systems} alt="Systems Proyect" width={'100%'} effect="blur"/>
          </a>
          <h3>System Administration Basics</h3>
          <p>
            Systems is built with <span className="tech-color">Svelte</span>, <span className="tech-color">JavaScript</span>, <span className="tech-color">CSS</span>, <span className="tech-color">HTML</span>, and the <span className="tech-color">Unsplash API</span>. Powered by <span className="tech-color">Vite</span>, it allows users to search, save, and download their favorite images directly from Unsplash using a keyword-based search bar.
          </p>
        </div>
        <div className="project-card">
          <a href="https://github.com/carlosdgerez/carlosdgerez.github.io" target="_blank" rel="noopener noreferrer">
            <LazyLoadImage src={ML} alt="Machine Learning" width={'100%'} effect="blur"/>
          </a>
          <h3>Machine Learning</h3>
          <p>
            This project is a digital catalog created for BYU-I’s Arts and Online Learning departments, utilizing <span className="tech-color">Angular</span>, <span className="tech-color">TypeScript</span>, <span className="tech-color">Bootstrap</span>, and <span className="tech-color">Firebase</span>. It allows users to manage and explore multimedia content in a digital store-like interface.
          </p>
        </div>
        <div className="project-card">
          <a href="https://github.com/carlosdgerez/carlosdgerez.github.io" target="_blank" rel="noopener noreferrer">
            <LazyLoadImage src={Web} alt="Web Proyect" width={'100%'} effect="blur"/>
          </a>
          <h3>Weather App Basic HTML</h3>
          <p>
            Developed for the Systems and Innovation Technology department at BYU-I, <span className="tech-color">SIT Store</span> is a simulated e-commerce platform using <span className="tech-color">Angular</span>, <span className="tech-color">TypeScript</span>, <span className="tech-color">Bootstrap</span>, and <span className="tech-color">Firebase</span> to manage products, user authentication, and transactions.
          </p>
        </div>
        <div className="project-card">
          <a href="https://github.com/carlosdgerez/carlosdgerez.github.io" target="_blank" rel="noopener noreferrer">
          
            <LazyLoadImage src={Programming} alt="Programming Proyect" width={'100%'} effect="blur"/>
          </a>
          <h3>Programming R code</h3>
          <p>
            <span className="tech-color">Programming</span>  <span className="tech-color">JavaScript</span>, <span className="tech-color">CSS</span>, <span className="tech-color">HTML</span>  I have learn several programming languages along my learning path. Here are some of them, and some code examples.Here are some examples of R projects with interesting visuals: Investment Stocks  Geodata 
.
          </p>
        </div>
        <div className="project-card">
          <a href="https://github.com/carlosdgerez/carlosdgerez.github.io" target="_blank" rel="noopener noreferrer">
            <LazyLoadImage src={Docker} alt="Docker Proyect" width={'100%'} effect="blur"/>
          </a>
          <h3>Docker</h3>
          <p>
            Built using <span className="tech-color">JavaScript</span>, <span className="tech-color">EJS</span>, and <span className="tech-color">CSS</span>, <span className="tech-color">CSE Motors</span> simulates a vehicle sales platform, allowing users to explore car models, prices, and make mock purchases.
          </p>
        </div>
        <div className="project-card">
          <a href="https://github.com/carlosdgerez/carlosdgerez.github.io" target="_blank" rel="noopener noreferrer">
            <LazyLoadImage src={Programming} alt="Weather Proyect" width={'100%'} effect="blur"/> 
          </a>
          <h3>Programming Python code</h3>
          <p>
            <span className="tech-color">Weather App</span> leverages <span className="tech-color">Java</span>, <span className="tech-color">AWT</span>, and <span className="tech-color">API calls</span> to provide real-time weather data and forecasts through a graphical user interface (GUI), offering a functional and user-friendly experience.
          </p>
        </div>
        <div className="project-card">
          <a href="https://github.com/carlosdgerez/carlosdgerez.github.io" target="_blank" rel="noopener noreferrer">
          <LazyLoadImage src={Bot} alt="N8N Bot Development" width={'100%'} effect="blur"/>
          </a>
          <h3>N8N Bot Development</h3>
          <p>
            Created using <span className="tech-color">JavaScript</span>, <span className="tech-color">HTML</span>, and the <span className="tech-color">Overpass API</span>, this project displays a map of historical sites and parks in Mexico City, integrating geospatial data for an interactive experience.
          </p>
        </div>
        <div className="project-card">
          <a href="https://github.com/carlosdgerez/carlosdgerez.github.io" target="_blank" rel="noopener noreferrer">
          <LazyLoadImage src={Mastodon} alt="Mastodon local with Docker" width={'100%'} effect="blur"/>
          </a>
          <h3>Mastodon local with Docker</h3>
          <p>
            Created using <span className="tech-color">JavaScript</span>, <span className="tech-color">HTML</span>, and the <span className="tech-color">Overpass API</span>, this project displays a map of historical sites and parks in Mexico City, integrating geospatial data for an interactive experience.
          </p>
        </div>
        
      </div>
      

      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </div>
  );
};

export default ProjectsGallery;

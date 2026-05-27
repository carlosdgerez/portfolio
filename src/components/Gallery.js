import React from "react";
import "./ProjectGallery.css";
import ML from "../images/code.jpg";
import Web from "../images/website.jpg";
import Programming from "../images/matrix.jpg";
import Infrastructure from "../images/machine.jpg";
import Docker from "../images/dockerq2a.png";

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
          <a
            href="https://github.com/carlosdgerez/mynetworklab1#vagrant-virtualbox-setup-for-multiple-vms"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LazyLoadImage
              src={Infrastructure}
              alt="Infrastructure Proyect"
              width={"100%"}
              effect="blur"
            />
          </a>
          <h3>Infrastructure with Vagrant</h3>
          <p>
            Infrastructure-as-Code environment built with{" "}
            <span className="tech-color">Vagrant</span>,{" "}
            <span className="tech-color">VirtualBox</span>, and{" "}
            <span className="tech-color">Puppet</span> to automate the
            deployment of a multi-VM network architecture. The project includes
            a Puppet master, load balancer, web servers, and database server
            with secure segmented networking, automated provisioning, and
            scalable configuration management for development and infrastructure
            learning.
          </p>
        </div>
        <div className="project-card">
          <a
            href="https://github.com/carlosdgerez/tutorialssystems#network-architecture"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LazyLoadImage
              src={Systems}
              alt="Systems Proyect"
              width={"100%"}
              effect="blur"
            />
          </a>
          <h3>Virtual Infrastructure Security Training</h3>
          <p>
            This are a serie of tutorials designed for a virtual network created
            with vms and firewalls to practice installation, configuration and
            management of diferent resources.It has 2 firewalls and 3 diferent
            zones protected by them. <span className="tech-color">DMZ</span> has
            5 vms with <span className="tech-color">web services</span>,{" "}
            <span className="tech-color">proxy</span> and{" "}
            <span className="tech-color">load balancer</span>.
            <span className="tech-color">Inside zone</span> has{" "}
            <span className="tech-color">Active directory</span>,{" "}
            <span className="tech-color">dhcp</span> and{" "}
            <span className="tech-color">DNS</span> servers.
            <span className="tech-color"> Secure zone</span> holds the most
            secure area with databases.
          </p>
        </div>
        <div className="project-card">
          <a
            href="https://github.com/carlosdgerez/carlosdgerez.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LazyLoadImage
              src={ML}
              alt="Machine Learning"
              width={"100%"}
              effect="blur"
            />
          </a>
          <h3>Machine Learning</h3>
          <p>
            This project is under construction I want to create a{" "}
            <span className="tech-color">Yolo</span>project using{" "}
            <span className="tech-color">Roboflow</span>,{" "}
            <span className="tech-color">OpenCV</span>, and{" "}
            <span className="tech-color">Python</span>.
          </p>
        </div>
        <div className="project-card">
          <a
            href=" https://carlosdgerez.github.io/weatherSite/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LazyLoadImage
              src={Web}
              alt="Web Proyect"
              width={"100%"}
              effect="blur"
            />
          </a>
          <h3>Weather App Basic HTML</h3>
          <p>
            Developed for testing and learning the use of <span className="tech-color">APIs</span>, this weather
            application utilizes the <span className="tech-color">OpenWeatherMap API</span> to fetch and display current
            weather data based on user input. Built with basic <span className="tech-color">HTML</span>, <span className="tech-color">CSS</span>, and
            <span className="tech-color"> JavaScript</span>, the app allows users to search for weather information by
            city name, providing real-time updates on temperature, humidity,
            wind speed, and weather conditions in a simple and user-friendly
            interface.
          </p>
        </div>
        <div className="project-card">
          <a
            href="https://carlosdgerez.github.io/Rproject/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LazyLoadImage
              src={Programming}
              alt="Programming Proyect"
              width={"100%"}
              effect="blur"
            />
          </a>
          <h3>R Data Analytics Projects</h3>

          <p>
            Collection of <span className="tech-color">R</span> projects focused
            on financial analytics, stock market forecasting, and geospatial
            data visualization using statistical models and interactive analysis
            tools.
          </p>

          <div className="project-links">
            <a
              href="https://carlosdgerez.github.io/dygraphs/"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-color"
            >
              Investment Analysis
            </a>
            {" | "}
            <a
              href="https://carlosdgerez.github.io/stocksAnalisis/"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-color"
            >
              Stock Forecasting
            </a>
            {" | "}
            <a
              href="https://carlosdgerez.github.io/Rproject/"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-color"
            >
              Geodata Analysis
            </a>
          </div>
        </div>
        <div className="project-card">
          <a
            href="https://github.com/carlosdgerez/Docker/#architecture"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LazyLoadImage
              src={Docker}
              alt="Docker Proyect"
              width={"100%"}
              effect="blur"
            />
          </a>
          <h3>Docker</h3>
          <p>
            <span className="tech-color">Question2Answer (Q2A)</span> deployment
            built with <span className="tech-color">Docker Compose</span> using
            a secure 3-zone architecture. The project implements{" "}
            <span className="tech-color">Nginx</span> round-robin{" "}
            <span className="tech-color">load balancing</span>, horizontally{" "}
            <span className="tech-color">scaled Q2A replicas</span>,{" "}
            <span className="tech-color">Redis-based shared sessions</span>, and
            isolated database networking to simulate scalable and secure{" "}
            <span className="tech-color">
              real-world application infrastructure
            </span>
            .
          </p>
        </div>
        <div className="project-card">
          <a
            href="https://github.com/carlosdgerez/carlosdgerez.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LazyLoadImage
              src={Programming}
              alt="Weather Proyect"
              width={"100%"}
              effect="blur"
            />
          </a>
          <h3>Programming Python code</h3>
          <p>
            <span className="tech-color">Not yet ready</span> This is under
            construction.
          </p>
        </div>
        <div className="project-card">
          <a
            href="https://github.com/carlosdgerez/carlosdgerez.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LazyLoadImage
              src={Bot}
              alt="N8N Bot Development"
              width={"100%"}
              effect="blur"
            />
          </a>
          <h3>N8N Bot Development</h3>
          <p>
            Will be created using <span className="tech-color">n8n</span>,{" "}
            <span className="tech-color">Not yet ready</span> This is under
            construction.
          </p>
        </div>
        <div className="project-card">
          <a
            href="https://github.com/carlosdgerez/mastodon/blob/main/README-Local-dev-guide.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LazyLoadImage
              src={Mastodon}
              alt="Mastodon local with Docker"
              width={"100%"}
              effect="blur"
            />
          </a>
          <h3>Mastodon local with Docker</h3>
          <p>
            Custom local Mastodon development environment built with{" "}
            <span className="tech-color">Docker</span>,{" "}
            <span className="tech-color">Caddy</span>, and{" "}
            <span className="tech-color">mkcert</span> to enable secure{" "}
            <span className="tech-color">HTTPS</span> testing and streamlined
            deployment. The project includes{" "}
            <span className="tech-color">
              automated container orchestration
            </span>
            ,{" "}
            <span className="tech-color">local SSL certificate management</span>
            , <span className="tech-color">Rails database setup</span>, and{" "}
            <span className="tech-color">troubleshooting documentation</span>{" "}
            for debugging common configuration and networking issues.
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

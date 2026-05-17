import { Component } from 'react';
import CarlosImage from '../../src/images/carlos.png';
import "./NavbarStyles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

class Navbar extends Component {
    state = {
        clicked: false,
        activeSection: "home", // Estado para la sección activa
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    handleScroll = () => {
        const sections = document.querySelectorAll("section");
        let activeSection = "home"; // Por defecto, si estamos al inicio, se selecciona "home"
        const offset = 700; // Ajusta esta distancia para que se active cuando estés más cerca de la parte superior
    
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 80; // Ajusta según la altura del navbar
            const sectionHeight = section.clientHeight;
    
            // Activar la sección solo cuando la parte superior de la sección está cerca del viewport
            if (
                window.scrollY + offset >= sectionTop && // +offset para ajustarlo un poco más arriba
                window.scrollY < sectionTop + sectionHeight
            ) {
                activeSection = section.getAttribute("id");
            }
        });
    
        // Si el scroll está en la parte superior, asegúrate de que "home" sea activa
        if (window.scrollY === 0) {
            activeSection = "home";
        }
    
        this.setState({ activeSection });
    };
    
    

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <>
                <nav>
                    <a href="#home">
                        <img className="rotating-icon" src={CarlosImage} alt="Carlos Logo"></img>
                    </a>
                    <div>
                    <ul
                        id="navbar"
                            className={this.state.clicked ? "#navbar active" : "#navbar"}
                    >

                            <li>
                                <a
                                    className={this.state.activeSection === "home" ? "active" : ""}
                                    href="#home"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className={this.state.activeSection === "about" ? "active" : ""}
                                    href="#about"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    className={this.state.activeSection === "portfolio" ? "active" : ""}
                                    href="#portfolio"
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    className={this.state.activeSection === "contact" ? "active" : ""}
                                    href="#contact"
                                >
                                    Contact
                                </a>
                            </li>
                            <li className="resume">
                            <a 
                                href="https://carlosdgerez.github.io/Gerez-Resume" 
                                download="Resume">
                                My Resume
                                <i className="fas fa-download"></i>
                            </a>
                            </li>

                        </ul>
                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        <i
                            id="bar"
                            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
                        ></i>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;

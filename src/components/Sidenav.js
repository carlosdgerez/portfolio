import React, { useEffect, useState } from "react";
import "./Sidenav.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Sidenav = () => {
  const [contactVisible, setContactVisible] = useState(false); // Estado para detectar si la sección de contacto está visible
  const [isMobile, setIsMobile] = useState(false); // Estado para detectar si la pantalla es pequeña

  const handleScroll = () => {
    const contactSection = document.getElementById("contact"); // Asegúrate de que el id de tu sección de contacto sea "contact"
    const rect = contactSection.getBoundingClientRect(); // Obtener la posición de la sección en la pantalla
    
    // Para cambiar el color cuando la mitad de la sección esté visible
    const threshold = window.innerHeight / 1.8; // Puedes ajustar este valor

    // Verificar si el centro de la sección de contacto está dentro del viewport
    if (rect.top <= threshold && rect.bottom >= threshold) {
      setContactVisible(true); // La sección de contacto está visible según el umbral
    } else {
      setContactVisible(false); // La sección de contacto no está visible
    }
  };

  const checkIfMobile = () => {
    // Detectar pantallas pequeñas (menos de 768px de ancho)
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Agregar el evento de scroll
    window.addEventListener("resize", checkIfMobile); // Agregar el evento de cambio de tamaño para pantallas pequeñas
    checkIfMobile(); // Verificar el tamaño de pantalla al cargar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpiar el evento cuando el componente se desmonte
      window.removeEventListener("resize", checkIfMobile); // Limpiar el evento de cambio de tamaño
    };
  }, []);

  return (
    <div
      id="sidenav"
      className={isMobile ? "mobile" : ""}
    >
      <a
        href="https://www.linkedin.com/in/carlos-gerez-solid-state928b98a4"
        target="_blank"
        rel="noopener noreferrer"
        className={contactVisible ? "active" : ""}
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/carlosdgerez"
        target="_blank"
        rel="noopener noreferrer"
        className={contactVisible ? "active" : ""}
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Sidenav;

import React, { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import './HomePage.css'; // Asegúrate de importar tu archivo de estilos
import linkedinImage from './img/linkedin.png';
import githubImage from './img/github.png';
import emailImage from './img/mail.png';
import whatssappImage from './img/whatssapp.webp';
import compisImage from './img/compis.png';
import faceImage from './img/face.png';

function HomePage() {

  const Project = ({ title, description, myWork, technologies, imageUrl, githublink }) => {
    return (
      <div className="project">
        <div className="project-details">
          <a href={githublink} target="_blank" ><h3>{title}</h3></a>
          <p>{description}</p>
          <p><strong>Trabajo realizado por mí:</strong> {myWork}</p>
          <p><strong>Tecnologías utilizadas:</strong> {technologies}</p>
        </div>
        <div className="project-image">
          <img src={imageUrl}/>
        </div>
      </div>
    );
  };  

  const handleLinkedInClick = () => {
    // Redirigir al perfil de LinkedIn
    window.open('https://www.linkedin.com/in/yongbum-park-933b7319a/', '_blank');
  };

  const handleGithubInClick = () => {
    // Redirigir al perfil de LinkedIn
    window.open('https://github.com/Yong-Park', '_blank');
  };

  const handleWhatssappClick = () => {
    // Agrega lógica para mostrar el número de WhatsApp
    alert('Número de WhatsApp: +502 4045-9702');
  };

  const [currentSection, setCurrentSection] = useState('about');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  useEffect(() => {
    const contentElement = document.querySelector('.content');

    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'education'];
      let current = '';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        const rect = element.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section;
        }
      });

      if (current !== currentSection) {
        handleSectionChange(current);
      }
    };

    contentElement.addEventListener('scroll', handleScroll);

    return () => {
      contentElement.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  return (
    <div className="container">
      <Scrollspy
        items={['about', 'projects', 'skills', 'education']}
        currentClassName="active"
        className="scrollspy"
        rootEl=".content"
      >
        <li>
          <a href="#about" style={{ fontSize: currentSection === 'about' ? '1.2em' : '1em' }}>
            Sobre Mi
          </a>
        </li>
        <li>
          <a href="#projects" style={{ fontSize: currentSection === 'projects' ? '1.2em' : '1em' }}>
            Proyectos
          </a>
        </li>
        <li>
          <a href="#skills" style={{ fontSize: currentSection === 'skills' ? '1.2em' : '1em' }}>
            Habilidades Tecnicas
          </a>
        </li>
        <li>
          <a href="#education" style={{ fontSize: currentSection === 'education' ? '1.2em' : '1em' }}>
            Educacion
          </a>
        </li>
      </Scrollspy>

      <div className="content" id="content">
        <br />
        <br />
        <section id="about">
        <h3>Hola! Soy</h3>
          <h1>Yongbum Park</h1>
          <div className='basicinfo' id="basicinfo">
            <h4>Universitario!</h4>
            <p>Estudiante de Ingenieria de Ciencias de la Computación en especialidad de Ciberseguridad, cursando 5to año noveno semestre, en la Universidad del Valle De Guatemala. Planeo profundizar mis conocimientos en la 
              especialización como Pentester y Arquitecto de Seguridad. Durante el transcurso de mi carrera eh tomado distintos cursos para ampliar mis conocimientos en el área.</p>
              <br/>
          <h3>Certificaciones</h3>
          <ul className="certification-list">
            <li>Hacking Ético y Ciberseguridad | Udemy (2023-2024)</li>
            <li>Ethical Hacking Bootcamp | Udemy (2024)</li>
            <li>Principios de la seguridad de la información | ESET (2024) </li>
            {/* Agrega más habilidades según sea necesario */}
          </ul>
          <br/>
            <h3>Habilidades personales</h3>
            <ul className="personal-skills-list">
              <li>Responsabilidad</li>
              <li>Autodidacta</li>
              <li>Capacidad para resolver problemas</li>
              <li>Capacidad de adaptación</li>
              <li>Trabajo en equipo</li>
              <li>Liderazgo</li>
              <li>Comunicación </li>
              {/* Agrega más habilidades según sea necesario */}
            </ul>
          <br/>
          <h3>Idiomas</h3>
          <ul className="certification-list">
            <li>Inglés - Nivel B2 | Eastbourne United Kingdom- EF international language school</li>
            <li>Coreano - NIVEL 5 | TOPIK</li>
            {/* Agrega más habilidades según sea necesario */}
          </ul>
          <br/>
          <h3>Contactame</h3>
          <img
            className="linkedin-button"
            src={linkedinImage}
            alt="LinkedIn"
            onClick={handleLinkedInClick}
          />
          <img
            className="github-button"
            src={githubImage}
            alt="Github"
            onClick={handleGithubInClick}
          />
          <a href="mailto:parkyong0721@gmail.com">
          <img
            className="mail-button"
            src={emailImage}
            alt="Correo Electrónico"
          />
          </a>
          <img
            className="phone-button"
            src={whatssappImage}
            alt="WhatsApp"
            onClick={handleWhatssappClick}
          />
          </div>
          
        </section>
        <br />
        <br />
        <section id="projects">
          <h1>Proyectos</h1>
          <Project
            title="Compilador YAPL"
            description="Crear un compilador utilizando el lenguaje de YAPL, donde es un lenguaje muy parecido al del COOL, pero con algunas funcionalidades extras implementadas, para que el compilador sea mas robusto"
            myWork="Trabaje desde todo el armado del lenguaje, hasta la conversion del codigo de alto nivel al bajo nivel y la adaptacion de esta para poder compilarlo utilizando qtspim."
            technologies="Python, ANTLR"
            imageUrl={compisImage}
            githublink="https://github.com/Yong-Park/UVG_COMPILADORES_2023"
          />
          <Project
            title="Chat Messenger"
            description="Crear un chat que permite hablar entre uno a uno o con varios conectandose a un servidor xmpp que se creo para este curso de la clase"
            myWork="Trabaje toda la implementacion, me toco aprender java para ello."
            technologies="Java, Maven, Smack"
            githublink="https://github.com/Yong-Park/Proyecto_Chat_Redes_2023"
          />
        </section>
        <br />
        <br />
        <section id="skills">
          <h1>Abilidades Tecnincas</h1>
          <h3>Sistemas operativos</h3>
          <ul className="personal-skills-list">
            <li>Windows 10 & 11</li>
            <li>Linux</li>
            {/* Agrega más habilidades según sea necesario */}
          </ul>
          <br/>
          <h3>Software Productividad</h3>
          <ul className="personal-skills-list">
            <li>Microsoft Office</li>
            {/* Agrega más habilidades según sea necesario */}
          </ul>
          <br/>
          <h3>Lenguajes de programacion</h3>
          <ul className="personal-skills-list">
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>JavaScript</li>
            {/* Agrega más habilidades según sea necesario */}
          </ul>
        </section>
        <br />
        <br />
        <section id="education">
          <h1>Educación</h1>
          <h3>Bachillerato en Ciencias y letras con orientación a Computación</h3>
          <ul className="personal-skills-list">
            <li>Colegio Montano Cortijo | 2017- 2018</li>
            {/* Agrega más habilidades según sea necesario */}
          </ul>
          <h3>Reconocimientos</h3>
          <h4>Premio Dr. Roberto Montano</h4>
          <ul className="personal-skills-list">
            <li>Colegio Montano Cortijo | 2018</li>
            {/* Agrega más habilidades según sea necesario */}
          </ul>
          <br />
          <h3>Ingenieria de Ciencias de la Computación en especialidad de Ciberseguridad</h3>
          <ul className="personal-skills-list">
            <li>Universidad del Valle Guatemala | 2020 - en curso 5to año 9° semestre</li>
            {/* Agrega más habilidades según sea necesario */}
          </ul>
          <h3>Reconocimientos</h3>
          <h4>Mérito Académico</h4>
          <ul className="personal-skills-list">
            <li>UVG | 2020-2023</li>
            {/* Agrega más habilidades según sea necesario */}
          </ul>
        </section>
        <br/>
        <br/>
      </div>
    </div>
  );
}

export default HomePage;

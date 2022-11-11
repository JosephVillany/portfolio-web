import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Acerca de</h5>
      <h2>Mi!</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Acerca de Mi" />
          </div>
        </div>
        <div className="container__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>1 año Experiencia</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>cliente</h5>
              <small>1 cliente</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>5+ Completados</small>
            </article>
          </div>
          <p>
          Hola mi nombre es Joseph Villany.  Soy una persona que disfruta la tecnología y mas lo 
          relacionado con la programación, ya que siento que desde allí puedo crear y brindar soluciones 
          tecnológicas a muchas personas desde el desarrollo web. 
          </p>
          <a href="#contact" className="btn btn-primary">Contactame!</a>
        </div>
      </div>
    </section>
  );
};

export default About;

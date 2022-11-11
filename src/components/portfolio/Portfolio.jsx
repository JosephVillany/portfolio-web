import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
/* import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png"; */


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'WEATHER APP',
    github: 'https://github.com/JosephVillany/app-clima',
    demo: 'https://aquamarine-marzipan-c7fc57.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'E-COMERCE ',
    github: 'https://github.com/JosephVillany/e-comerce',
    demo: 'https://e-comerce-puce.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'API GitHub',
    github: 'https://github.com/JosephVillany/app-github',
    demo: 'https://app-github-phi.vercel.app/'
  }/* ,
  {
    id: 4,
    image: IMG4,
    title: 'API DRAGON BALL ',
    github: 'https://github.com/JosephVillany/e-comerce',
    demo: 'https://e-comerce-puce.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'TODO',
    github: 'https://github.com/JosephVillany/e-comerce',
    demo: 'https://e-comerce-puce.vercel.app/'
  } */
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mis Proyectos</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn"> GitHub </a>
                <a
                  href={demo} className="btn btn-primary" nel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
            )
          })
        }
      </div>
      
    </section>
  );
};

export default Portfolio;

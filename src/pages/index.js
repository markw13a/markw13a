import React from "react";
import Layout from "../components/Layout";
import { LinkButton } from "../components/Button";
import { ProjectCard } from "../components/ProjectCard";
import SEO from "../components/Seo";
import "../styles/index.scss";

const Introduction = () => (
  <div className="introduction">
    <div className="content">
      <h1> Web developer </h1>
      <p> 
        I am a Glasgow based web developer from the Isle of Lewis. Coding websites and mobile apps is what I'm best at, but I also have a strong interest in design and business. 
      </p>
      <p>
        Whether you know what you want, or are just beginning to explore how an app or website could improve the way you do business, I can help. 
      </p>
      <div className="introduction__ctas">
        <LinkButton text="Contact me" to="/contat" />
        <LinkButton text="See my work" type="outline" to="/#portfolio" />
      </div>
    </div>
  </div>
);
const RecentProjects = () => (
  <div id="portfolio">
    <h1> Recent projects </h1>
    <ProjectCard 
      title="Faclair na Gàidhlig"
      to="/portfolio/faclair"
      description="The most comprehensive Gaelic dictionary available for Android"
      imageSrc="/images/faclair.png"
    />
  </div>
);

const AboutMe = () => (
  <div className="about-me">
    <h1> About me </h1>
    <p>
      I have worked as a salaried web developer for the last two and a half years. My off-hours are often spent working on my own projects, through which I have learned about mobile development, product development and design.
    </p>
    <p>
      I am interested in the entire process of creating an app or website, and am always trying to broaden my skills. You can find out a bit more about me on my <a href="https://www.linkedin.com/in/mark-wood-922a8912a/"> Linkedin page</a>.
    </p>
  </div>
);

const Services = () => (
  <div className="services">
    <h1> Services </h1>
  </div>
);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
    <RecentProjects />
    <AboutMe />
    <Services />
  </Layout>
)

export default IndexPage

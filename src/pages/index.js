import React from "react";
import Layout from "../components/Layout";
import { LinkButton } from "../components/Button";
import { ProjectCard } from "../components/ProjectCard";
import SEO from "../components/Seo";
import "../styles/indexPage.scss";

const Introduction = () => (
  <div className="introduction">
    <div className="content">
      <div className="text">
        <h1> Web developer </h1>
        <p> 
          I am a Glasgow based web developer from the Isle of Lewis. Coding websites and mobile apps is what I'm best at, but I also have a strong interest in design and business. 
        </p>
        <p>
          Whether you know what you want, or are just beginning to explore how an app or website could improve the way you do business, I can help. 
        </p>
        <div className="introduction__ctas">
          <LinkButton text="Contact me" to="/#contact" />
          <LinkButton text="See my work" type="outline" to="/#portfolio" />
        </div>
      </div>
      <div className="image-container">
        <img className="birlinn" src="/images/birlinn_trace.svg" />
      </div>
    </div>
  </div>
);
const RecentProjects = () => (
  <div id="portfolio">
    <h1> Recent projects </h1>
    <p> A selection of some of the things I have been working on. </p>
    <ProjectCard 
      title="Faclair na Gàidhlig"
      to="/portfolio/faclair"
      description="The most comprehensive Gaelic dictionary available on the Google Play Store."
      subtitle="Android app"
    />
  </div>
);

const AboutMe = () => (
  <div id="about" className="about-me">
    <h1> About me </h1>
    <p>
      I have worked as a salaried web developer for the last two and a half years. My off-hours are often spent working on my own projects, through which I have learned about mobile development, product development and design.
    </p>
    <p>
      I am interested in the entire process of creating an app or website, and am always trying to broaden my skills.
    </p>
  </div>
);

const Contact = () => (
  <div id="contact">
		<h1> Contact </h1>
		<p> You can get in touch via phone, email or LinkedIn to discuss your project. </p>
		<ul className="contact-information">
			<li>
				Phone: 07594515541
			</li>
			<li>
				Email: markw13a@gmail.com
			</li>
		</ul>
  </div>
);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
    <RecentProjects />
    <AboutMe />
    <Contact />
  </Layout>
)

export default IndexPage

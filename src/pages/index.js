import React from "react";
import Layout from "../components/Layout/Layout";
import { LinkButton } from "../components/Button/Button";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import SEO from "../components/seo";

const Introduction = () => (
  <>
    <h1> Web developer </h1>
    <p> 
      I am a Glasgow based web developer from the Isle of Lewis. Technology &mdash; mainly creating websites and mobile apps &mdash; is what I'm best at, but I also have a strong interest in design and business. 
    </p>
    <p>
      I enjoy figuring out how to make life easier for businesses and their customers.
    </p>
    <p>
      Whether you know what you want, or are just beginning to explore how technology could improve the way you do business, I can help. 
    </p>
  </>
);
const RecentProjects = () => (
  <>
    <h1> Recent projects </h1>
    <ProjectCard 
      title="Faclair na Gàidhlig"
      to="/portfolio/faclair"
      description="The most comprehensive Gaelic dictionary available for Android"
      imageSrc="/images/faclair.png"
    />
  </>
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
    <Services />
    <LinkButton text="Get in touch" to="/contact" />
  </Layout>
)

export default IndexPage

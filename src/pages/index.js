import React from "react";
import Layout from "../components/Layout/Layout";
import { LinkButton } from "../components/Button/Button";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import SEO from "../components/seo";

const Introduction = () => (
  <>
    <h1> Web developer </h1>
    <p> Hi, I'm Mark: a Glasgow-based freelancer with experience in all aspects of web development. I can help you to get your first website online, or make changes to an existing website. </p>
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

import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/Layout";
import { LinkButton, Button } from "../components/Button/Button";
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

    />
  </>
);
const ProjectCard = ({ title, imageSrc, description, to }) => (
  <Link className="project-card" to={to}>
    <h1 className="project-card--title"> 
      { title } 
    </h1>
    <img className="project-card--image" src={imageSrc} />
    <p className="project-card--description"> 
      { description } 
    </p>
    <Button text="Find out more" />
  </Link>
);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
    <RecentProjects />
    <LinkButton text="Get in touch" to="/contact" />
  </Layout>
)

export default IndexPage

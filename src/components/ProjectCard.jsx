import React from "react";
import { LinkButton } from "./Button";

const ProjectCard = ({ title, imageSrc, description, to }) => (
	<div className="project-card" to={to}>
	  <h1 className="project-card--title"> 
		{ title } 
	  </h1>
	  <img className="project-card--image" src={imageSrc} />
	  <p className="project-card--description"> 
		{ description } 
	  </p>
	  <LinkButton text="Find out more" to={to} />
	</div>
);

export {
	ProjectCard
};

import React from "react";
import { LinkButton } from "./Button";

const ProjectCard = ({ title, description, to, subtitle }) => (
	<div className="project-card" to={to}>
	  <div className="project-card__title-container"> 
		<h1 className="project-card__title"> 
			{ title } 
		</h1>
		<span className="project-card__subtitle"> 
			{ subtitle } 
		</span> 
	  </div>
	  <p className="project-card__description"> 
		{ description } 
	  </p>
	  <LinkButton text="Find out more" to={to} />
	</div>
);

export {
	ProjectCard
};

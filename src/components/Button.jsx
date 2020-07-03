import React from "react";
import { Link } from "gatsby";

const Button = ({ text="Click", onClick, className }) => (
	<button 
		className={"button-primary " + ( className || "" )} 
		onClick={onClick} 
	>
		{ text }
	</button>
);

// A link masquerading as a button
// TODO: might want to add some handling of external links?
const LinkButton = ({ text="Click", className, to }) => (
	<Link className={"button-primary " + ( className || "" )} to={to}>
		{ text }
	</Link>
);

export {
	Button,
	LinkButton
};

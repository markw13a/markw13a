import React from "react";
import { Link } from "gatsby";

const generateClassName = ({ type }) => {
	let className;
	switch(type) {
		case "outline": {
			className = "button-outline";
			break;
		}
		default: {
			className = "button-primary";
			break;
		}
	}

	return className;
};

const Button = ({ text="Click", onClick, type }) => {
	const className = generateClassName({ type });

	return (
		<button className={className} onClick={onClick}>
			{ text }
		</button>
	);
};

// A link masquerading as a button
// TODO: might want to add some handling of external links?
const LinkButton = ({ text="Click", to, type }) => {
	const className = generateClassName({ type });

	return (
		<Link className={className} to={to}>
			{ text }
		</Link>
	);
};

export {
	Button,
	LinkButton
};

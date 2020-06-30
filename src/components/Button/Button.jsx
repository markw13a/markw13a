import React from "react";
import "./button.scss";

const Button = ({ text="Click", onClick, className }) => (
	<button 
		className={"button-primary " + ( className || "" )} 
		onClick={onClick} 
	>
		{ text }
	</button>
);

export {
	Button
};

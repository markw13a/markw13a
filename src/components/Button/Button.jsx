import React from "react";
import "./button.scss";

const Button = ({ text="Click" }) => {
	return (
		<button className="button-primary">
			{ text }
		</button>
	)
};

export {
	Button
};

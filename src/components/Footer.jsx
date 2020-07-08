import React from "react";
import linkedInLogo from "../images/linkedin.png";

const Footer = () => (
	<footer>
		<div className="content">
	        © {new Date().getFullYear()} Mark Wood
			<div className="contact-information">
				<span className="contact-information__item" > 
					07594515541 
				</span>
				<span className="contact-information__item"> 
					markw13a@gmail.com 
				</span>
				<a className="contact-information__item" href="https://www.linkedin.com/in/mark-wood-922a8912a/" target="_blank" rel="noopener noreferrer"> 
					<img className="linkedin-logo" alt="linkedin-logo" src={linkedInLogo} /> 
				</a>
			</div>
		</div>
	</footer>
);

export {
	Footer
};

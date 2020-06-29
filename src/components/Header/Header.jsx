import React from "react";
import "./header.scss";

const Header = () => (
	<header>
		<a href="/" className="home-logo">
			Mark Wood
		</a>
		<div className="page-links">
			<a className="page-links--link" href="/"> Home </a>
			<a className="page-links--link" href="/contact"> Contact </a>
		</div>
	</header>
);

export default Header;

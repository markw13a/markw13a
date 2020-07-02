import React from "react";
import "./header.scss";

const Header = () => (
	<header>
		<div className="home-logo">
			<a href="/"> Mark Wood </a>
			<span> Web developer </span>
		</div>
		<div className="page-links">
			<a className="page-links--link" href="/"> Home </a>
			<a className="page-links--link" href="/contact"> Contact </a>
		</div>
	</header>
);

export default Header;

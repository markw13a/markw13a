import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./header.css";

const Header = () => (
	<header>
		<a href="/" className="home-logo">
			Mark Wood
		</a>
		<div className="page-links">
			<a href="/"> Home </a>
			<a href="/contact"> Contact </a>
		</div>
	</header>
);

export default Header;

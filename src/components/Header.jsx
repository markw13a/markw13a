import React, { useState } from "react";
import hamburgerIcon from "../images/hamburger_icon.svg";

// Expect one of PageLinks or Hamburger menu to be hidden by CSS at any given time
const PageLinks = () => (
	<div className="page-links">
		<a className="page-links--link" href="/"> Home </a>
		<a className="page-links--link" href="/#about"> About </a>
		<a className="page-links--link" href="/#contact"> Contact </a>
	</div>
);

const HamburgerMenu = ({ isOpen, setIsOpen }) => (
	<div className="hamburger-menu">
		<button className="hamburger-menu__button" onClick={() => setIsOpen(!isOpen)}>
			<img alt="hamburger-menu" src={hamburgerIcon} />
		</button>
	</div>
);

const MobileHeader = () => {
	const [ isOpen, setIsOpen ] = useState(false);

	return (
		<header className="mobile-header">
			<div className="home-logo">
				<a href="/"> Mark Wood </a>
				<HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
			{ isOpen && <PageLinks /> }
		</header>
	);
};

const DesktopHeader = () => (
	<header className="desktop-header">
		<div className="home-logo">
			<a href="/"> Mark Wood </a>
		</div>
		<PageLinks />
	</header>
);

const Header = () => {
	// NB: Render both and use CSS to hide one of them
	// Found that using JS to render lead to mobile menu "popping in"
	// Heart of issue is that you can't check window.innerWidth on first render
	// as Gatsby has no access to window object 
	return (
		<>
			<DesktopHeader />
			<MobileHeader />
		</>
	);
};

export default Header;

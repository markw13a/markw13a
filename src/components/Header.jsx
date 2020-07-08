import React, { useState } from "react";
import { useEffect } from "react";
import hamburgerIcon from "../images/hamburger_icon.svg";

const useWindowDimensions = () => {
	const [ width, setWidth ] = useState();
	const [ height, setHeight ] = useState();

	useEffect(() => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);

		const handleResize = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [ setWidth, setHeight ]);

	return ({
		width,
		height
	});
};

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

const Header = () => {
	const { width } = useWindowDimensions();

	if( width < 700 ) {
		return <MobileHeader />
	}
	
	return (
		<header>
			<div className="home-logo">
				<a href="/"> Mark Wood </a>
				<span> Web developer </span>
			</div>
			<PageLinks />
		</header>
	);
};

export default Header;

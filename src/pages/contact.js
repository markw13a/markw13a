import React from "react";
import Layout from "../components/Layout";
import "../styles/contact.scss";

const ContactPage = () => (
	<Layout>
		<h1> Contact </h1>
		<p> You can get in touch via phone, email or LinkedIn to discuss your project. </p>
		<ul className="contact-information">
			<li>
				Phone: 07594515541
			</li>
			<li>
				Email: markw13a@gmail.com
			</li>
		</ul>
	</Layout>
);

export default ContactPage;

import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { LinkButton } from "../components/Button";

const Portfolio = ({ data }) => {
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;

	return (
		<Layout className="portfolio">
			<h1> 
				{ frontmatter.title } 
			</h1>
			<div dangerouslySetInnerHTML={{ __html: html }} />
			{
				frontmatter.marketingTagline
				&& <div dangerouslySetInnerHTML={{ __html: frontmatter.marketingTagline }} />
			}
			<div className="link-container">
				<LinkButton text="Contact me" to="/#contact" />
			</div>
		</Layout>
	);
};

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				slug
				title,
				marketingTagline
			}
		}
	}	
`

export default Portfolio;

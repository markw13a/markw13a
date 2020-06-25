import React from "react";
import { graphql } from "gatsby";

const Portfolio = ({ data }) => {
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;

	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: html }} />
			{
				frontmatter.marketingTagline
				&& <div dangerouslySetInnerHTML={{ __html: frontmatter.marketingTagline }} />
			}
			<a href="/contact"> Get in touch </a>
		</div>
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

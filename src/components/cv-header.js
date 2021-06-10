import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	margin: 1.2em 0;

	font-size: 75px;

	@media not print {
		@media (max-width: 990px) {
			font-size: 48px;
			flex-direction: column;
		}
	}
`

const ProfileImage = styled(Img)`
	width: 300px;
	border-radius: 50%;

	@media not print {
		@media (max-width: 990px) {
			width: 200px;
		}
	}
`

const CustomH1 = styled.h1`
	font-size: inherit;
`

const CvHeader = ({ children }) => {
	const image = useStaticQuery(graphql`
		query {
			profile: file(relativePath: { eq: "profile.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`)

	return (
		<HeaderContainer>
			<div>
				<ProfileImage
					fluid={image.profile.childImageSharp.fluid}
					alt="André's profile photo"
				/>
			</div>
			<CustomH1>{children}</CustomH1>
		</HeaderContainer>
	)
}

export default CvHeader

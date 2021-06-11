import React from "react"
import { Container } from "react-bootstrap"

import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const CustomFooter = styled.footer`
	padding: 1rem 0;
	margin-top: 2rem;
	background-color: #393c47;
	color: white;
`

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			currentBuildDate {
				currentDate
			}
		}
	`)

	return (
		<CustomFooter>
			<Container>
				<div className="d-flex justify-content-between flex-wrap">
					<span>Updated on {data.currentBuildDate.currentDate}.</span>
					<span>André Rodrigo B. A. Maciel</span>
				</div>
			</Container>
		</CustomFooter>
	)
}

export default Footer

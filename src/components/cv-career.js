import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"
import CvLinkNewTab from "./cv-link-new-tab"

const CvCareer = () => (
	<>
		<CvSectionTitle>Carreira</CvSectionTitle>
		<ul className="list-unstyled">
			<CvCustomLi
				title="Advanced Programmer Analyst"
				subtitle={
					<CvLinkNewTab link="https://www.qat.com">
						QAT Global
					</CvLinkNewTab>
				}
				startEnd="2020~*"
			>
				Developing and maintaining a large utility automation
				application in a team of 14 people. Working with Scrum, Java,
				Spring Boot, SQL Server, HTML, CSS, JavaScript, jQuery, Jenkins,
				Unit Testing (JUnit) and SVN.
			</CvCustomLi>
		</ul>
	</>
)

export default CvCareer

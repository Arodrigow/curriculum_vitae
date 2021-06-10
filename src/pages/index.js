import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Col, Container, Row } from "react-bootstrap"
import CvLinks from "../components/cv-links"
import CvEducation from "../components/cv-education"
import CvHeader from "../components/cv-header"
import CvAbout from "../components/cv-about"
//import CvCareer from "../components/cv-career"
import CvSkills from "../components/cv-skills"
import CvLanguages from "../components/cv-languages"
import CvOtherSkills from "../components/cv-other-skills"
import CvProjects from "../components/cv-projects"

const IndexPage = () => (
	<Layout>
		<Container>
			<SEO description={"André Rodrigo's Curriculum Vitae"} />
			<CvHeader>André Rodrigo Brito Alves Maciel</CvHeader>
			<Row>
				<Col md={5} lg={4}>
					<CvLinks />
					<CvEducation />
					<CvLanguages />
				</Col>
				<Col md={7} lg={8}>
					<CvAbout />
					<CvSkills />
				</Col>
				<Col lg={{ offset: 4, span: 8 }}>
					<CvOtherSkills />
					<CvProjects />
				</Col>
			</Row>
		</Container>
	</Layout>
)

export default IndexPage

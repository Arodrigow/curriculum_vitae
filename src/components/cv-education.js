import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"

import SvgEducation1 from "../assets/svg/education1.svg"
import SvgEducation2 from "../assets/svg/education2.svg"
import SvgEducation3 from "../assets/svg/education3.svg"
import CvLinkNewTab from "./cv-link-new-tab"

const EducationItem = ({ svg, degree, school, startEnd }) => (
	<CvCustomLi
		svg={svg}
		title={degree}
		subtitle={school}
		startEnd={startEnd}
	/>
)

const CvEducation = () => (
	<>
		<CvSectionTitle>Educação</CvSectionTitle>
		<ul className="list-unstyled">
			<EducationItem
				svg={<SvgEducation2 />}
				degree="Bacharelado em Ciência e Tecnologia"
				school={
					<CvLinkNewTab link="http://portal.ufvjm.edu.br/a-universidade/cursos/bct">
						UFVJM
					</CvLinkNewTab>
				}
				startEnd="2011~2016"
			/>
			<EducationItem
				svg={<SvgEducation2 />}
				degree="Bacharelado em Engenharia Hídrica"
				school={
					<CvLinkNewTab link="http://portal.ufvjm.edu.br/a-universidade/cursos/ehd">
						UFVJM
					</CvLinkNewTab>
				}
				startEnd="2016~2019"
			/>
			<EducationItem
				svg={<SvgEducation3 />}
				degree="Pós-Graduação em Engenharia Ambiental e Saneamento Básico"
				school={
					<CvLinkNewTab link="https://estacio.br/cursos/pos-graduacao/engenharia-ambiental-e-saneamento-basico">
						Estácio
					</CvLinkNewTab>
				}
				startEnd="2020~2021"
			/>
			<EducationItem
				svg={<SvgEducation1 />}
				degree="Ignite - NodeJS"
				school={
					<CvLinkNewTab link="https://rocketseat.com.br/ignite">
						Rocketseat
					</CvLinkNewTab>
				}
				startEnd="2020"
			/>
			<EducationItem
				svg={<SvgEducation1 />}
				degree="Educação continuada"
				school={
					<CvLinkNewTab link="">Udemy / Coursera / EDx</CvLinkNewTab>
				}
				startEnd="2019~"
			/>
		</ul>
	</>
)

export default CvEducation

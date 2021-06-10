import React from "react"
import CvCustomLi from "./cv-custom-li"

import SvgEmail from "../assets/svg/email.svg"
import SvgGithub from "../assets/svg/github.svg"
import SvgLinkedin from "../assets/svg/linkedin.svg"
import SvgWhatsapp from "../assets/svg/whatsapp.svg"
import SvgSite from "../assets/svg/site.svg"
import SvgLattes from "../assets/svg/lattes.svg"

const CvLink = ({ svg, link, linkText }) => (
	<CvCustomLi
		svg={svg}
		title={
			<a href={link} target="_blank" rel="noreferrer">
				{linkText}
			</a>
		}
	/>
)

const CvLinks = () => (
	<ul className="list-unstyled">
		<CvLink
			svg={<SvgEmail />}
			link="mailto:andre.rodrigo.maciel@gmail.com"
			linkText="andre.rodrigo.maciel@gmail.com"
		/>
		<CvLink
			svg={<SvgGithub />}
			link="https://github.com/Arodrigow"
			linkText="github.com/Arodrigow"
		/>
		<CvLink
			svg={<SvgLinkedin />}
			link="https://www.linkedin.com/in/andrerodrigomaciel/"
			linkText="in/andrerodrigomaciel"
		/>
		<CvLink
			svg={<SvgWhatsapp />}
			link="https://api.whatsapp.com/send?phone=33988921316&text=Olá,%20I%20found%20you%20at%20your%20cv%20site"
			linkText="+55 (33) 98892-1316"
		/>
		<CvLink
			svg={<SvgLattes />}
			link="http://lattes.cnpq.br/4865006143751523"
			linkText="Currículo Lattes"
		/>
		<CvLink svg={<SvgSite />} link="" linkText="" />
	</ul>
)

export default CvLinks

import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"

const CvOtherSkills = () => (
	<>
		<CvSectionTitle>Habilidades adicionais</CvSectionTitle>
		<ul className="list-unstyled">
			<CvCustomLi title="Microsoft Office">
				<p>Word, Excel e PowerPoint em alto nível.</p>
			</CvCustomLi>
		</ul>
	</>
)

export default CvOtherSkills

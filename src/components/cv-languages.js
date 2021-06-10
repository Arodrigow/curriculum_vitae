import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"

const CvLanguages = () => (
	<>
		<CvSectionTitle>Línguas</CvSectionTitle>
		<ul className="list-unstyled">
			<CvCustomLi title="Português" subtitle="Native" />
			<CvCustomLi title="Inglês" subtitle="Advanced (B1~B2)" />
			<CvCustomLi title="Mandarim" subtitle="Um dia eu chego lá" />
		</ul>
	</>
)

export default CvLanguages

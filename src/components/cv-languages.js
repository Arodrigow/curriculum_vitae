import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"

const CvLanguages = () => (
	<>
		<CvSectionTitle>Línguas</CvSectionTitle>
		<ul className="list-unstyled">
			<CvCustomLi title="Português" subtitle="Nativo" />
			<CvCustomLi title="Inglês" subtitle="Avançado" />
			<CvCustomLi
				title="Mandarim"
				subtitle="Estudando - Um dia eu chego lá!"
			/>
		</ul>
	</>
)

export default CvLanguages

import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"

const CvSkills = () => (
	<>
		<CvSectionTitle>Habilidades</CvSectionTitle>
		<ul className="list-unstyled">
			<CvCustomLi title="Linguagens de programação">
				<ul>
					<li>Java: desde 2011</li>
					<li>JavaScript (Typescript): desde 2019</li>
					<li>html: desde 2020</li>
					<li>css: desde 2020</li>
					<li>C/C++: treinei em 2010~2011</li>
					<li>C#: treinei em 2020</li>
					<li>Go (golang): treinei em 2020</li>
					<li>Python: treinei em 2019</li>
				</ul>
			</CvCustomLi>
			<CvCustomLi title="Databases">
				<ul>
					<li>PostgreSQL: desde 2019</li>
					<li>H2: desde 2020</li>
					<li>SQLite: desde 2021</li>
					<li>MongoDB: treinei em 2020</li>
				</ul>
			</CvCustomLi>
			<CvCustomLi title="Outros">
				<ul>
					<li>.NET: treinei 2020</li>
					<li>Angular: treinei em 2020</li>
					<li>
						AWS: <b>em treinamento</b>
					</li>
					<li>Bootstrap 3/4: desde 2019</li>
					<li>
						Docker (Docker Compose): <b>em treinamento</b>
					</li>
					<li>Git: desde 2020</li>
					<li>Insomnia: desde 2021</li>
					<li>Jest e SuperTest: desde 2021</li>
					<li>
						NestJS: <b>em treinamento</b>
					</li>
					<li>
						NextJS: <b>em treinamento</b>
					</li>
					<li>React: treinei em 2020</li>
					<li>
						Serverless: <b>em treinamento</b>
					</li>
					<li>Spring Boot: desde 2019</li>
					<li>Tailwind CSS: treinei em 2020</li>
				</ul>
			</CvCustomLi>
		</ul>
	</>
)

export default CvSkills

import React from "react"
import CvSectionTitle from "./cv-section-title"
import CvCustomLi from "./cv-custom-li"
import CvLinkNewTab from "./cv-link-new-tab"

const CvLiWithLink = ({ children, title, link, startEnd }) => (
	<CvCustomLi
		title={title}
		subtitle={link ? <CvLinkNewTab link={link} /> : ""}
		startEnd={startEnd}
	>
		{children}
	</CvCustomLi>
)

const CvProjects = () => (
	<>
		<CvSectionTitle>Projetos</CvSectionTitle>
		<ul className="list-unstyled">
			<CvLiWithLink
				title="Aplicação de Redes Bayesianas no auxílio à tomada de decisão"
				startEnd="2011~2014"
			>
				Em um time de 3 pessoas, como aluno de iniciação científica,
				buscava-se o desenvolvimento de uma aplicação que ajudasse
				cardiologistas à detectar processos isquêmicos através da
				deformação em ondas de eletrocardiograma de longa duração.
				<p></p>
				Tecnologias: MATLAB, Java, Excel;
				<p></p>
				Responsabilidades:
				<ul>
					<li>Treinar novos membros do time,</li>
					<li>Adaptar toolboxes do MATLAB para Java ou PHP,</li>
					<li>Organizar e analisar os dados.</li>
				</ul>
			</CvLiWithLink>
			<CvLiWithLink
				title="Análise de séries sintéticas"
				startEnd="2016~2019"
			>
				Através da análise de séries sintéticas geradas a partir das
				vazões dos rios do Vale do Mucuri, buscou-se provar que as
				fontes de dados apresentadas pela atual legislação ambiental
				estadual estavam defasadas.
				<p></p>
				Tecnologias: Java, Excel;
				<p></p>
				Responsabilidades:
				<ul>
					<li>Organizar e testar os dados (consistência),</li>
					<li>
						Desenvolver um software para gerar as séries sintéticas,
					</li>
					<li>
						Desenvolver uma boa solução para a visualização dos
						grafos resultantes.
					</li>
				</ul>
			</CvLiWithLink>
			<CvLiWithLink
				title="Levantamento do potencial hidrelétrico remanescente"
				startEnd="2016~2019"
			>
				Visto a necessidade de expansão continua da matriz energética
				nacional, e o crescente foco em hidrelétricas de pequeno porte,
				buscou-se o levantamento de possíveis eixos de instalação de
				usinas hidrelétricas na bacia do rio Mucuri.
				<p></p>
				Tecnologias: Python, ArcGIS;
				<p></p>
				Responsabilidades:
				<ul>
					<li>Levantar as principais metodoligias,</li>
					<li>
						Propor um método fixo de aplicação da metodologia dentro
						do ArcGIS,
					</li>
					<li>
						Desenvolver os scripts de automatização do processo no
						ArcGIS API, em python.
					</li>
				</ul>
			</CvLiWithLink>
		</ul>
	</>
)

export default CvProjects

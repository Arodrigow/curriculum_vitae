const name = "André's CV"
const shortName = "AM"
const description =
	"Bacharel em Engenharia Hídrica e Ciência e Tecnologia," +
	" desenvolvedor Java e NodeJS"

const primaryColor = "##393c47"
const bgColor = "#ffffff"

module.exports = {
	siteMetadata: {
		title: name,
		description: description,
		author: `André Rodrigo Brito Alves Maciel`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-build-date`,
			options: {
				formatAsDateString: true,
				formatting: {
					format: "MMM DD, YYYY",
				},
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets/,
				},
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Montserrat\:400,500`],
				display: "swap",
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: name,
				short_name: shortName,
				start_url: `/`,
				background_color: bgColor,
				theme_color: primaryColor,
				display: `standalone`,
				icon: `src/assets/favicon.svg`,
			},
		},
		"gatsby-plugin-offline",
	],
}

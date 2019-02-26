/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * Gatsby configuration file.
 */

module.exports = {
	siteMetadata: {
		title: `UCSC Xena`,
		description: 'X',
		author: 'xx'
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: "./images/favicon/favicon.png",

				// WebApp Manifest Configuration
				appName: null, // Inferred with your package.json
				appDescription: null,
				developerName: null,
				developerURL: null,
				dir: 'auto',
				lang: 'en-US',
				background: '#fff',
				theme_color: '#fff',
				display: 'standalone',
				orientation: 'any',
				start_url: '/?homescreen=1',
				version: '1.0',

				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					opengraph: false,
					twitter: false,
					yandex: false,
					windows: false
				}
			}
		},
		`gatsby-plugin-manifest`,
		{
			resolve: 'gatsby-plugin-react-css-modules',
			options: {
				filetypes: {
					'.scss': {syntax: 'postcss-scss'},
				},
				// Exclude global styles from the plugin
				exclude: '\/global\/'
			}
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown-pages`,
				path: `${__dirname}/content`,
			},
		},
		`gatsby-remark-katex`,
		`gatsby-remark-prismjs`,
		`gatsby-transformer-remark`,
		`gatsby-transformer-sharp`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	],
}

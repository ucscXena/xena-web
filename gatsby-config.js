/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * UCSC Xena Web configuration file.
 */

module.exports = {
	siteMetadata: {
		title: `UCSC Xena`,
		description: `Securely analyze and visualize your private functional genomics data set in the context of public and shared genomic/phenotypic data sets.`,
		author: `UCSC Xena Team`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: './images/favicon/favicon.png',

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
		{
			resolve: `gatsby-plugin-mailchimp`,
			options: {
				endpoint: '//ucsc.us13.list-manage.com/subscribe/post?u=854efce54e145c49d29e0bb59&amp;id=65986d18f3',
			},
		},
		`gatsby-plugin-manifest`,
		{
			resolve: `gatsby-plugin-react-css-modules`,
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
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-custom-blocks`,
						options: {
							blocks: {
								contentHero: {
									classes: 'contentHero',
								}
							}
						}
					},
					{
						resolve: `gatsby-remark-embed-video`,
						options: {
							width: 550,
							ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
							related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
							noIframeBorder: true //Optional: Disable insertion of <style> border: 0
						}
					},
					`gatsby-remark-external-links`,
					`gatsby-remark-responsive-iframe`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 550,
							linkImagesToOriginal: false,
							wrapperStyle: `margin: 0 !important;`,
						}
					},
				]
			}
		},
		`gatsby-transformer-sharp`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// `gatsby-plugin-offline`,
	],
};

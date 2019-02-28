/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * UCSC Xena Web Typography.js file.
 *
 * Reference https://www.gatsbyjs.org/tutorial/part-two/#typographyjs. Typography.js docs
 * can be found at https://kyleamathews.github.io/typography.js/.
 */

// Core dependencies
import Typography from 'typography';

const typography = new Typography({
	baseFontSize: '16px',
	baseLineHeight: '24px',
	bodyColor: '#5f6368',
	bodyFontFamily: ['Roboto', 'sans-serif'],
	bodyWeight: '400',
	headerColor: '#202124',
	headerFontFamily: ['Roboto', 'sans-serif'],
	headerWeight: '500',
	googleFonts: [
		{
			name: 'Roboto',
			styles: ['300', '400', '500', '700', '900'],
		}
	],
	includeNormalize: true,
	overrideStyles: ({adjustFontSizeTo, scale}, options, styles) => {
		return {
			'body, html': {},
			'*, *:before, *:after': {
				mozBoxSizing: 'border-box',
				webkitBoxSizing: 'border-box',
				boxSizing: 'border-box',
			},
			p: {
				...adjustFontSizeTo('16px'),
				lineHeight: '24px',
				margin: '0 0 16px',
			},
			'p:last-child': {
				margin: '0',
			},
			h1: {
				...adjustFontSizeTo('32px'),
				fontWeight: 400,
				letterSpacing: '0.25px',
				lineHeight: '38px',
				margin: '0 0 24px',
			},
			h2: {
				...adjustFontSizeTo('24px'),
				fontWeight: 400,
				lineHeight: '28px',
				margin: '10px 0 10px',
			},
			h3: {
				...adjustFontSizeTo('20px'),
				fontWeight: 400,
				letterSpacing: '0.15px',
				lineHeight: '24px',
				margin: '10px 0 10px',
			},
			'p + h2, p + h3': {
				margin: '24px 0 10px',
			},
			'a': {
				color: '#3c4043',
				cursor: 'pointer',
				font: 'inherit',
				textDecoration: 'underline',
			},
			'a:focus,a:active,a:hover': {
				outline: 0,
			},
			'dd,dl,ol,ul': {
				margin: '12px 0 24px',
			},
			'ol, ul': {
				listStylePosition: 'outside',
				paddingLeft: '16px',
			},
			'ul li, ol li': {
				margin: 0,
				paddingLeft: '8px',
			},
			img: {
				border: 0,
				marginBottom: 0,
			},
			strong: {
				fontWeight: '500',
			},
			blockquote: {
				boxShadow: 'inset 2px 0 0 rgba(0, 0, 0, 0.12)',
				margin: '0 0 24px',
				padding: '4px 0',
			},
			'blockquote p': {
				paddingLeft: '12px'
			},
			pre: {
				margin: '0 0 24px',
			},
			'pre, code': {
				backgroundColor: 'rgba(0, 0, 0, 0.03)',
				borderRadius: '4px',
				font: 'inherit',
				fontFamily: 'Courier New',
				padding: '4px'
			},
			'pre code': {
				backgroundColor: 'transparent',
				borderRadius: '0',
				padding: '0',
			},
			'.contentHero p': {
				...adjustFontSizeTo('20px'),
				fontWeight: 300,
				letterSpacing: '0.15px',
				lineHeight: '24px',
				margin: '0 0 32px',
			},
		}
	}
});

export default typography;

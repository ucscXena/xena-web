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
    bodyColor: '#1a535c',
    bodyFontFamily: ['Roboto', 'sans-serif'],
    bodyWeight: '400',
    headerColor: 'inherit',
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
        let primary = '#1a535c';
        let secondary = '#4ecdc4';
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
                margin: '28px 0 24px',
            },
            h1: {
                ...adjustFontSizeTo('80px'),
                color: secondary,
                fontWeight: 900,
                lineHeight: '80px',
                margin: '0 0 16px',
            },
            h3: {
                ...adjustFontSizeTo('34px'),
                lineHeight: '40px',
                margin: '0',
            },
            h5: {
                ...adjustFontSizeTo('28px'),
                lineHeight: '40px',
                margin: '0',
            },
            h6: {
                ...adjustFontSizeTo('22px'),
                lineHeight: '32px',
                margin: '12px 0 0',
            },
            'a': {
                color: primary,
                cursor: 'pointer',
                font: 'inherit',
                textDecoration: 'none',
            },
            'a:hover': {
                color: 'none',
            },
            'a:focus,a:active,a:hover': {
                outline: 0,
            },
            'dd,dl,ol,ul,li': {
                margin: 0,
                padding: 0,
            },
            img: {
                border: 0,
                marginBottom: 0,
            },
            strong: {
                fontWeight: '500',
            },
        }
    }
});

export default typography;

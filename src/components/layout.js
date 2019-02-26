/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * UCSC Xena Web layout template component.
 */

// Core dependencies
import Helmet from 'react-helmet';
import normalize from 'normalize.css';
import React from 'react';

// App dependencies
import Header from './header/header';
import Footer from './footer/footer';

// Styles

require(`katex/dist/katex.min.css`);
require(`prismjs/themes/prism-solarizedlight.css`);

export default ({children}) =>
	<div>
		<Helmet>
			<title>UCSC Xena</title>
			<meta name="description"
				  content="Securely analyze and visualize your private functional genomics data set in the context of public and shared genomic/phenotypic data sets."/>
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"/>
		</Helmet>
		<div>
			<Header/>
			{children}
			<Footer/>
		</div>
	</div>

/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * UCSC Xena Web layout template component.
 */

// Core dependencies
import React from 'react';
import {Helmet} from 'react-helmet';

// App dependencies
import Footer from './footer/footer';
import Header from './header/header';

// Styles
import compStyles from './layout.module.css';

let classNames = require('classnames');

require(`katex/dist/katex.min.css`);
require(`prismjs/themes/prism-solarizedlight.css`);

class Layout extends React.Component {

	constructor(props) {
		super(props);
		this.state = {noScroll: false};
	}

	onMenuOpen = (event) => {
		this.setState({noScroll: !event});
	};

	render() {
		const {children, markdownPages} = this.props;
		return (
			<div>
				<Helmet>
					<title>UCSC Xena</title>
					<meta name="UCSC Xena"
						  content="Securely analyze and visualize your private functional genomics data set in the context of public and shared genomic/phenotypic data sets."/>
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"/>
				</Helmet>
				<div className={classNames(compStyles.site, {[compStyles.noScroll]: this.state.noScroll})}>
					<Header onMenuOpen={this.onMenuOpen.bind(this)} markdownPages={markdownPages}/>
					{children}
					<Footer/>
				</div>
			</div>
		)
	}
}

export default Layout;

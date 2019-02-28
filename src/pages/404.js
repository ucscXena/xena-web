/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * UCSC Xena Web error page.
 */

// Core dependencies
import React from 'react';

// App dependencies
import Layout from '../components/layout';
import { Link } from 'gatsby';

// Styles
import compStyles from './404.module.css';
import globalStyles from '../styles/global.module.css';

let classNames = require('classnames');

const NotFoundPage = () => (
	<Layout markdownPages={true}>
		<div className={classNames(globalStyles.wrapper, globalStyles.wrapperFlex)}>
			<div className={compStyles.errorPage}>
				<div className={globalStyles.contentWrapper}>
				<h1>Page Not Found</h1>
				<p>We can’t find the page you were looking for.</p>
					<p>Return to the <Link to='/'>home page</Link>.</p>
			</div>
			</div>
		</div>
	</Layout>
);

export default NotFoundPage

/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * UCSC Xena Web whats new component.
 */

// Core dependencies
import React from 'react';

// Styles
import compStyles from './whatsNew.module.css';
import fontStyles from '../../styles/xenaFonts.module.css';
import globalStyles from '../../styles/global.module.css';

let classNames = require('classnames');

class WhatsNew extends React.Component {

	render() {
		return (
			<div id='whatsnew' className={globalStyles.wrapper}>
				<div
					className={classNames(globalStyles.section, globalStyles.bgWhite, globalStyles.fixed, globalStyles.separator, compStyles.whatsNew)}>
					<h5 className={fontStyles.sectionTitle}>What's New</h5>
					<a className="twitter-timeline" data-width="380" data-theme="light" data-tweet-limit="1" data-link-color="#1a535c" data-chrome="noborders nofooter noheader transparent" href="https://twitter.com/UCSCXena">Tweets by UCSCXena</a>
				</div>
			</div>
		);
	}
}

export default WhatsNew;

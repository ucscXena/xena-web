/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * UCSC Xena Web footer component.
 */

// Core dependencies
import React from 'react';

// Styles
import compStyles from './footer.module.css';
import globalStyles from '../../styles/global.module.css';
import fontStyles from '../../styles/xenaFonts.module.css';

class Footer extends React.Component {

	render() {
		return (
			<div className={globalStyles.bgPaleGreen}>
				<div className={globalStyles.wrapper}>
					<div className={compStyles.footerLinks}>
						<div className={fontStyles.mdBody2}>
							<a href='/'>UCSC</a>
							<a href='/'>UCSC Genomics Institute</a>
							<a href='/'>UCSC Computational Genomics Laboratory</a>
						</div>
						<div className={fontStyles.mdBody2}>
							<a href='https://twitter.com/ucscxena' target='_blank' rel='noopener noreferrer'>Twitter</a>
							<a href='mailto:genome-cancer@soe.ucsc.edu'>Email</a>
							<a href='https://github.com/ucscXena' target='_blank' rel='noopener noreferrer'>GitHub</a>
							<a href='https://ucsc-xena.gitbook.io' target='_blank' rel='noopener noreferrer'>User
								Guide</a>
						</div>
					</div>
					<div className={compStyles.disclaimer}>
						<span className={fontStyles.mdCaption}>Copyright © 2019, The Regents of the University of California, Santa Cruz.</span>
						<span className={fontStyles.mdCaption}>All Rights Reserved. Apache-2.0 licence.</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;

/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * UCSC Xena Web whats new component.
 */

// Core dependencies
import React from 'react';
import Img from "gatsby-image"
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
					<h6 className={fontStyles.sectionSubtitle}><a href='https://twitter.com/ucscxena' target='_blank'
																  rel='noopener noreferrer'>
						<span>@UCSCXena</span><span>{this.props.data.date}</span><FontAwesomeIcon icon={faTwitter}/></a>
					</h6>
					<div className={classNames(globalStyles.contentCol4)}>
						<p className={classNames(fontStyles.mdBody1, fontStyles.sectionText)}>{this.props.data.title}</p>
						<a href={this.props.data.hrefLink} target='_blank'
						   rel='noopener noreferrer'>{this.props.data.hrefLink}</a>
						<div>{this.props.data.twitterHashtag}</div>
						<div className={compStyles.twitterImg}><Img fluid={this.props.data.image.childImageSharp.fluid}
																	alt='Twitter Image'/></div>
					</div>
				</div>
			</div>
		);
	}
}

export default WhatsNew;

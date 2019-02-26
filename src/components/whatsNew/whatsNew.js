/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * UCSC Xena Web whats new component.
 */

// Core dependencies
import Img from "gatsby-image"
import React from 'react';

// Images
import xenaTwitter from '../../../images/socials/xenaTwitterPrimary.png';

// Styles
import compStyles from './whatsNew.module.css';
import globalStyles from '../../styles/global.module.css';

let classNames = require('classnames');

class WhatsNew extends React.Component {

	render() {
		return (
			<div className={globalStyles.wrapper}>
				<div className={classNames(globalStyles.section, globalStyles.fixed, globalStyles.separator, compStyles.whatsNew)}>
					<h5>What's New</h5>
					<h6><a href='https://twitter.com/ucscxena' target='_blank' rel='noopener noreferrer'>
						<span>@UCSCXena</span><span>{this.props.data.date}</span><img src={xenaTwitter}
																					  alt='UCSC Twitter'/></a>
					</h6>
					<div className={classNames(globalStyles.contentCol4)}>
						<p>{this.props.data.title}</p>
						<a href={this.props.data.hrefLink} target='_blank' rel='noopener noreferrer'>{this.props.data.hrefLink}</a>
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

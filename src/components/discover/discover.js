/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * UCSC Xena Web discover component.
 */

// Core dependencies
import Img from "gatsby-image"
import React from 'react';

// Images

// Styles
import compStyles from './discover.module.css';
import globalStyles from '../../styles/global.module.css';
import fontStyles from '../../styles/xenaFonts.module.css';

let classNames = require('classnames');

class Discover extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={classNames(globalStyles.section, globalStyles.large)}>
                <div className={globalStyles.wrapper}>
                    <div className={globalStyles.wrapperContent}>
                        <h5>{this.props.data.title}</h5>
                        {this.props.data.linked.map((link, i) => <div key={i} className={compStyles.discover}>
                            <div className={compStyles.learnMore}>
                                {link.childMarkdownRemark.frontmatter.image ? <Img className={classNames(globalStyles.roundImage, globalStyles.discoverImg)}
                                     fluid={link.childMarkdownRemark.frontmatter.image.childImageSharp.fluid}
                                     alt='Discover'/> : <div className={globalStyles.roundImage}/>}
                                {link.childMarkdownRemark.frontmatter.hrefLink ? <div className={classNames(globalStyles.roundImage, compStyles.bgLearnMore)}>
                                    <a href={link.childMarkdownRemark.frontmatter.hrefLink} alt='Discover' target='_blank'
                                       rel='noopener noreferrer' className={classNames(globalStyles.xenaButton, globalStyles.learnMore, globalStyles.small)}>
                                        Learn
                                        More
                                    </a>
                                </div> : null }
                            </div>
                            <div className={classNames(compStyles.learnMoreDetails, globalStyles.contentCol7)}>
                                <h5>{link.childMarkdownRemark.frontmatter.title}</h5>
                                <div className={fontStyles.mdBody1}
                                     dangerouslySetInnerHTML={{__html: link.childMarkdownRemark.html}}/>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Discover;

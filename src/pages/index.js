/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * UCSC Xena Web content template component.
 */

// Core dependencies
import React from 'react';
import {graphql} from 'gatsby';

// App dependencies
import Discover from '../components/discover/discover';
import Layout from '../components/layout';

// Images
import xenaHero from '../../images/jumbotron/xena-public-private@3x.png';

// Styles
import compStyles from './index.module.css';
import fontStyles from '../styles/xenaFonts.module.css';
import globalStyles from '../styles/global.module.css';

let classNames = require('classnames');

export default ({data}) => {

    const allMarkdownRemark = data.allMarkdownRemark.edges;

    const discover = allMarkdownRemark.filter((x) => {
        return x.node.frontmatter.component === "discover";
    }).map(n => n.node.frontmatter)[0];

    return (
        <Layout>
            <div className={classNames(compStyles.jumbotron, globalStyles.wrapper)}>
                <h1 className={fontStyles.hero}>UCSC Xena</h1>
                <h3 className={fontStyles.heroSubtitle}>See the bigger picture</h3>
                <img src={xenaHero} alt='UCSC Xena'/>
            </div>
            <div className={classNames(globalStyles.wrapper, compStyles.overview)}>
                <div
                    className={classNames(globalStyles.wrapperContent, globalStyles.contentCol4)}>
                    <p className={fontStyles.mdBody1}>An online exploration tool for public and private multi-omics
                        functional genomics and
                        clinical/phenotype data</p>
                    <a className={classNames(globalStyles.xenaButton, globalStyles.yellow)} alt='Launch Xena'
                       href='https://xenabrowser.net/' target='_blank' rel='noopener noreferrer'>Launch Xena</a>
                </div>
            </div>
            <div className={classNames(globalStyles.section, globalStyles.bgPeach)}>
                <div className={globalStyles.wrapper}>
                    <div className={classNames(globalStyles.wrapperContent, globalStyles.contentCol4)}>
                        <h5>Tutorials and walkthroughs</h5>
                        <p className={classNames(fontStyles.mdBody1, fontStyles.medium)}>Don't know where to start?
                            Jump in with one of our
                            tutorials or "How do I …" walkthroughs</p>
                        <a className={classNames(globalStyles.xenaButton, globalStyles.white)} alt='Tutorials'
                           href='https://xena.ucsc.edu/getting-started/' target='_blank' rel='noopener noreferrer'>Tutorials</a>
                    </div>
                </div>
            </div>
            <div className={classNames(globalStyles.bgAccentGreen, compStyles.publicPrivate)}>
                <div className={classNames(globalStyles.wrapper, globalStyles.flex)}>
                    <div
                        className={classNames(globalStyles.wrapperContent, globalStyles.contentCol4, compStyles.public)}>
                        <h5>Explore TCGA, GDC, and other public cancer genomics resources</h5>
                        <h6>Discover new trends and validate your findings with 1500+ datasets and 50+ cancer
                            types.</h6>
                        <a className={classNames(globalStyles.xenaButton, globalStyles.peach)} alt='Public Data'
                           href='https://xena.ucsc.edu/public-hubs/' target='_blank' rel='noopener noreferrer'>Learn
                            More</a>
                    </div>
                    <div
                        className={classNames(globalStyles.wrapperContent, globalStyles.contentCol4, compStyles.private)}>
                        <h5>View your own private data, or data you are interested in from a paper</h5>
                        <h6>View your data, securely and privately. Our step-by-step wizard will guide you
                            whether you're on a Windows or Mac.</h6>
                        <a className={classNames(globalStyles.xenaButton, globalStyles.peach)} alt='Public Data'
                           href='https://xena.ucsc.edu/private-hubs/' target='_blank' rel='noopener noreferrer'>Learn
                            More</a>
                    </div>
                </div>
            </div>
            {discover ? <Discover data={discover}/> : null}
            <div className={classNames(globalStyles.section, compStyles.subscribe)}>
                <div className={globalStyles.wrapper}>
                    <div className={classNames(globalStyles.row, globalStyles.rowFlexCol)}>
                        <h6 className={fontStyles.light}><span>We’re constantly improving UCSC Xena.</span><span>Subscribe to our newsletter and stay up to date.</span></h6>
                        <div className={classNames(fontStyles.mdHeadline5, fontStyles.light)}></div>
                        <a className={classNames(globalStyles.xenaButton, globalStyles.peach)} alt='Subscribe'
                           href='/' target='_blank' rel='noopener noreferrer'>Subscribe</a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

// modified to find the page by id which is passed in as context
export const query = graphql`
  query
{
  allMarkdownRemark {
    edges {
      node {
        html
        frontmatter {
          title
          path
          date
          component
          linked {
            childMarkdownRemark {
              html
              frontmatter {
                title
                path
                date
                hrefLink
                image {
                  childImageSharp {
                    fluid(maxWidth: 200, maxHeight: 200) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

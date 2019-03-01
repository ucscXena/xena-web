/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * UCSC Xena Web home page.
 */

// Core dependencies
import React from 'react';
import {graphql} from 'gatsby';
import {Link} from 'gatsby';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

// App dependencies
import Discover from '../components/discover/discover';
import Layout from '../components/layout';
import WhatsNew from '../components/whatsNew/whatsNew';

// Images
import xenaHero from '../../images/jumbotron/xena-public-private@3x.png';
import biojs from '../../images/partners/logo-biojs.png';
import globalAlliance from '../../images/partners/logo-global-alliance.png';
import nci from '../../images/partners/logo-nci.png';
import nciGA from '../../images/partners/logo-nci-ga.png';
import nciITCR from '../../images/partners/logo-nci-itcr.png';
import nih from '../../images/partners/logo-nih-bd2k.png';
import pcawg from '../../images/partners/logo-pcawg.png';
import treehouse from '../../images/partners/logo-treehouse.png';
import ucscGI from '../../images/partners/logo-ucsc-gi.png';

// Styles
import compStyles from './index.module.css';
import fontStyles from '../styles/xenaFonts.module.css';
import globalStyles from '../styles/global.module.css';

let classNames = require('classnames');

class Index extends React.Component {

	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

	handleSubmit = e => {
		e.preventDefault();

		if (!this.state.value) {
			this.setState({
				status: 'error',
				msg: "Please enter valid email!",
			})
		}
		else {
			this.setState(
				{
					status: 'sending',
					msg: null,
				}
			);
			// setState callback (subscribe email to MC)
			this.postEmailToMailchimp(this.state.value)
		}
	};

	postEmailToMailchimp = (email) => {
		addToMailchimp(email)
			.then(result => {
				// Mailchimp always returns a 200 response
				// Check the result for MC errors & failures
				if (result.result !== 'success') {
					this.setState({
						status: 'error',
						msg: result.msg,
					})
				} else {
					// Email address subscribed to Mailchimp
					this.setState({
						value: '',
						status: 'success',
						msg: result.msg,
					})
				}
			})
			.catch(err => {
				// Network failures, timeouts, etc
				this.setState({
					status: 'error',
					msg: err,
				})
			})
	};

	allMarkdownRemark = this.props.data.allMarkdownRemark.edges;

	discover = this.allMarkdownRemark.filter((x) => {
		return x.node.frontmatter.component === "discover";
	}).map(n => n.node.frontmatter)[0];

	twitter = this.allMarkdownRemark.filter((x) => {
		return x.node.frontmatter.component === "twitter";
	}).map(n => n.node.frontmatter)[0];

	render() {
		return (
			<Layout>
				<div className={globalStyles.wrapper}>
					<div className={compStyles.jumbotron}>
						<h1 className={fontStyles.hero}>UCSC Xena</h1>
						<h3 className={fontStyles.heroSubtitle}>See the bigger picture</h3>
						<img src={xenaHero} alt='UCSC Xena'/>
					</div>
				</div>
				<div id='overview' className={globalStyles.wrapper}>
					<div className={classNames(compStyles.overview, globalStyles.section, globalStyles.bgWhite)}>
						<div className={classNames(globalStyles.contentCol4, globalStyles.heroContent)}>
							<p className={fontStyles.mdBody1}>An online exploration tool for public and private
								multi-omics
								functional genomics and
								clinical/phenotype data</p>
							<a className={classNames(globalStyles.xenaButton, globalStyles.yellow)} alt='Launch Xena'
							   href='https://xenabrowser.net/' target='_blank' rel='noopener noreferrer'>Launch Xena</a>
						</div>
					</div>
				</div>
				<div id='tutorials' className={globalStyles.bgPeach}>
					<div className={globalStyles.wrapper}>
						<div className={classNames(globalStyles.section)}>
							<div className={classNames(globalStyles.contentCol4, globalStyles.heroContent)}>
								<h5 className={fontStyles.sectionTitle}>Tutorials and walkthroughs</h5>
								<p className={classNames(fontStyles.mdBody1, fontStyles.sectionText)}>Don't know where
									to
									start? Jump in with one of our tutorials or "How do I …" walkthroughs</p>
								<a href='https://ucsc-xena.gitbook.io/project/tutorials' alt='Tutorials' target='_blank'
								   rel='noopener noreferrer'
								   className={classNames(globalStyles.xenaButton, globalStyles.white)}
								   to='/getting-started'>Tutorials</a>
							</div>
						</div>
					</div>
				</div>
				<div className={classNames(globalStyles.bgAccentGreen, compStyles.publicPrivate)}>
					<div className={globalStyles.wrapper}>
						<div className={classNames(globalStyles.section, globalStyles.publicPrivate)}>
							<div
								className={classNames(globalStyles.contentCol4, compStyles.public)}>
								<h5 className={fontStyles.sectionTitle}>Explore TCGA, GDC, and other public cancer
									genomics
									resources</h5>
								<h6 className={fontStyles.sectionSubtitle}>Discover new trends and validate your
									findings
									with 1500+ datasets and 50+ cancer
									types.</h6>
								<Link className={classNames(globalStyles.xenaButton, globalStyles.peach)} to="/public">Learn
									More</Link>
							</div>
							<div
								className={classNames(globalStyles.contentCol4, compStyles.private)}>
								<h5 className={fontStyles.sectionTitle}>View your own private data, or data from a paper</h5>
								<h6 className={fontStyles.sectionSubtitle}>View your data, securely and privately. Our
									step-by-step wizard will guide you
									whether you're on a Windows or Mac.</h6>
								<Link className={classNames(globalStyles.xenaButton, globalStyles.peach)} to='/private'>Learn
									More</Link>
							</div>
						</div>
					</div>
				</div>
				{this.discover ? <Discover data={this.discover}/> : null}
				{this.twitter ? <WhatsNew data={this.twitter}/> : null}
				<div id='subscribe' className={globalStyles.wrapper}>
					<div
						className={classNames(globalStyles.section, globalStyles.bgWhite, globalStyles.separator, compStyles.subscribe)}>
						<h6 className={classNames(fontStyles.sectionSubtitle, fontStyles.light)}>
							<span>We’re constantly improving UCSC Xena.</span><span>Subscribe to our newsletter and stay up to date.</span>
						</h6>
						<form method='post' noValidate>
							<div>
								<input type="email" placeholder="Your email address" value={this.state.value}
									   onChange={this.handleChange} required/>
								<div className={classNames(compStyles.subscribeResponse, fontStyles.mdCaption)}>
									{this.state.status === 'error' && (
										<div dangerouslySetInnerHTML={{__html: this.state.msg}}/>)}
									{this.state.status === 'success' ? <div>Thank you for subscribing!</div> : null}
								</div>
							</div>
							<button className={classNames(globalStyles.xenaButton, globalStyles.peach)} type='submit'
									onClick={this.handleSubmit}>Subscribe
							</button>
						</form>
					</div>
				</div>
				<div className={globalStyles.wrapper}>
					<div
						className={classNames(globalStyles.section, globalStyles.small, globalStyles.separator, compStyles.socials)}>
						<a href='https://twitter.com/ucscxena' target='_blank' rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faTwitter}/>
							<div className={fontStyles.xenaSocials}>@UCSCXena</div>
						</a>
						<a href='mailto:genome-cancer@soe.ucsc.edu' target='_blank' rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faEnvelope}/>
							<div className={fontStyles.xenaSocials}>genome-cancer@soe.ucsc.edu</div>
						</a>
						<a href='https://groups.google.com/forum/#!forum/ucsc-cancer-genomics-browser' target='_blank'
						   rel='noopener noreferrer'>
							<i className='material-icons'>people</i>
							<div className={fontStyles.xenaSocials}>UCSC Xena Forum</div>
						</a>
					</div>
				</div>
				<div className={globalStyles.wrapper}>
					<div className={classNames(globalStyles.section, globalStyles.separator, compStyles.partners)}>
						<div>
							<a href='https://www.cancer.gov/' target='_blank' rel='noopener noreferrer' alt='NCI'><img
								src={nci} alt='National Cancer Institute'/></a>
							<a href='http://itcr.nci.nih.gov/' target='_blank' rel='noopener noreferrer'
							   alt='NCIGA'><img
								src={nciGA} alt='The Cancer Genome Atlas'/></a>
							<a href='https://cancergenome.nih.gov/' target='_blank' rel='noopener noreferrer'
							   alt='NCIITCR'><img
								src={nciITCR}
								alt='National Cancer Institute Informatics Technology for Cancer Research'/></a>
						</div>
						<div>
							<a href='https://www.soe.ucsc.edu/' target='_blank' rel='noopener noreferrer'
							   alt='Treehouse'><img src={treehouse} alt='Treehouse Childhood Cancer Initiative'/></a>
							<a href='https://dcc.icgc.org/pcawg#!%2Fmutations' target='_blank' rel='noopener noreferrer'
							   alt='PCAWG'><img src={pcawg} alt='PCAWG'/></a>
							<a href='https://www.biojs.net/' target='_blank' rel='noopener noreferrer' alt='bioJS'><img
								src={biojs} alt='bioJS'/></a>
							<a href='https://datascience.nih.gov/bd2k' target='_blank' rel='noopener noreferrer'
							   alt='NIH'><img src={nih} alt='NIH'/></a>
							<a href='https://www.ga4gh.org/' target='_blank' rel='noopener noreferrer'
							   alt='Global Alliance'><img src={globalAlliance} alt='Global Alliance'/></a>
						</div>
						<div>
							<a href='https://genomics.soe.ucsc.edu/' target='_blank' rel='noopener noreferrer'
							   alt='UCSC Genomics Institute'><img src={ucscGI} alt='UCSC Genomics Institute'/></a>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
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
          author
          path
          date
          hidePagePost
          hideImprovePage
          component
          twitterHashtag
          hrefLink
          image {
            childImageSharp {
              fluid(maxWidth: 200, maxHeight: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          linked {
            childMarkdownRemark {
              html
              frontmatter {
                title
                author
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
}`;

export default Index;

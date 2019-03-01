/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * UCSC Xena Web template component.
 */

// Core dependencies
import React from 'react';
import {graphql} from "gatsby"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

// App dependencies
import Layout from '../components/layout';

// Styles
import compStyles from './contentTemplate.module.css';
import fontStyles from '../styles/xenaFonts.module.css';
import globalStyles from '../styles/global.module.css';

let classNames = require('classnames');

export default ({data}) => {
	const post = data.markdownRemark;
	const docPath = post.frontmatter.path;
	const docTitle = post.frontmatter.title;
	const socialsPath = 'https://xena.ucsc.edu' + docPath;
	const socialsTitle = encodeURI(docTitle);
	const editPath = 'https://github.com/ucscXena/xena-web/blob/master/content' + docPath + '.md';

	return (
		<Layout markdownPages={true}>
			<div className={classNames(globalStyles.wrapper, globalStyles.wrapperFlex)}>
				<div className={compStyles.markdownContent}>
					<div className={globalStyles.contentWrapper}>
						<h1>{docTitle}</h1>
						{post.frontmatter.hidePagePost ? null :
							<div className={classNames(fontStyles.mdCaption, compStyles.pagePost)}>
								<div>
									<span>{post.frontmatter.author}</span>
									<span>{post.frontmatter.date}</span>
								</div>
								<div>
									<a href={'https://twitter.com/share?url=' + socialsPath + ';text=' + docTitle + ';via=UCSCXena'}
									   alt='Share Twitter' target='_blank' rel='noopener noreferrer'>
										<FontAwesomeIcon icon={faTwitter}/></a>
									<a href={'mailto:?subject=UCSC Xena&body=' + socialsTitle + '%0D%0A' + socialsPath}
									   alt='Share Mail' target='_blank' rel='noopener noreferrer'>
										<FontAwesomeIcon icon={faEnvelope}/></a>
								</div>
							</div>}
						<div dangerouslySetInnerHTML={{__html: post.html}}/>
						{post.frontmatter.hideImprovePage ? null :
							<a className={compStyles.editContent} href={editPath} alt='Edit Page' target='_blank'
							   rel='noopener noreferrer'>Improve this page</a>}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export const query = graphql`
query($slug: String!) {
	markdownRemark(fields: {slug: {eq: $slug}}) {
	html
	frontmatter {
	title
	author
	path
	date
	hidePagePost
	hideImprovePage
}
}
}
`;

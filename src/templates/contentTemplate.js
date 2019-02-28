/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * UCSC Xena Web template component.
 */

// Core dependencies
import React from 'react';
import {graphql} from "gatsby"

// App dependencies
import Layout from '../components/layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

// Images

// Styles
import compStyles from './contentTemplate.module.css';
import fontStyles from '../styles/xenaFonts.module.css';
import globalStyles from '../styles/global.module.css';

let classNames = require('classnames');

export default ({data}) => {
	const post = data.markdownRemark;
	const docPath = post.frontmatter.path;
	const editPath = 'https://github.com/ucscXena/xena-web/blob/master/content' + docPath + '.md';

	return (
		<Layout markdownPages={true}>
			<div className={classNames(globalStyles.wrapper, globalStyles.wrapperFlex)}>
				<div className={compStyles.markdownContent}>
					<div className={globalStyles.contentWrapper}>
						<h1>{post.frontmatter.title}</h1>
						<div className={classNames(fontStyles.mdCaption, compStyles.pagePost)}>
							<div>
								<span>{post.frontmatter.author}</span>
								<span>{post.frontmatter.date}</span>
							</div>
							<div>
								<a href={'https://twitter.com/share?url=https://xena.ucsc.edu' + post.frontmatter.path + ';text=' + post.frontmatter.title + ';via=UCSCXena'}
								   alt='Share Twitter' target='_blank' rel='noopener noreferrer'>
									<FontAwesomeIcon icon={faTwitter}/></a>
								<a href={'mailto:?Subject=UCSC Xena;Body=' + post.frontmatter.title + ';https://xena.ucsc.edu' + post.frontmatter.path}
								   alt='Share Mail' target='_blank' rel='noopener noreferrer'>
									<FontAwesomeIcon icon={faEnvelope}/></a>
							</div>
						</div>
						<div dangerouslySetInnerHTML={{__html: post.html}}/>
						<a className={compStyles.editContent} href={editPath} alt='Edit Page' target='_blank'
						   rel='noopener noreferrer'>Improve this page</a>
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
}
}
}
`;

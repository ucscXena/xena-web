/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * UCSC Xena Web header component.
 */

// Core dependencies
import { Link } from 'gatsby';
import React from 'react';

// App dependencies

// Images
import headerLogo from '../../../images/logo/logo-ucsc@3x.png';

// Styles
import compStyles from './header.module.css';
import globalStyles from '../../styles/global.module.css';
import fontStyles from '../../styles/xenaFonts.module.css';

let classNames = require('classnames');

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {menuOpen: false};
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu = () => {
		this.setState({menuOpen: !this.state.menuOpen});
		this.props.onMenuOpen(this.state.menuOpen);
	};

	render() {

		const getFontClass = () => {

			return classNames({
				[compStyles.navLinks]: true,
				[fontStyles.mdBody2]: !this.state.menuOpen,
				[fontStyles.mdHeadline5]: this.state.menuOpen,
				[globalStyles.bgGreen]: this.state.menuOpen
			});
		};

		return (
			<div>
				<div className={globalStyles.wrapper}>
					<div className={classNames(compStyles.navBar, {[compStyles.open]: this.state.menuOpen})}>
						<Link to='/'><img src={headerLogo} alt='UCSC Xena'/></Link>
						{this.props.markdownPages ? null : <div className={compStyles.navBarMenu} onClick={this.toggleMenu}><span/></div>}
						{this.props.markdownPages ? null : <div className={getFontClass()}>
							<Link to='/#overview' onClick={this.state.menuOpen? this.toggleMenu : null}>Overview</Link>
							<Link to='/#analysis' onClick={this.state.menuOpen? this.toggleMenu : null}>Analysis</Link>
							<Link to='/#tutorials' onClick={this.state.menuOpen? this.toggleMenu : null}>Tutorials</Link>
							<Link to='/#whatsnew' onClick={this.state.menuOpen? this.toggleMenu : null}>What's New</Link>
							<Link to='/cite-us' onClick={this.state.menuOpen? this.toggleMenu : null}>Cite Us</Link>
							<Link to='/#subscribe' onClick={this.state.menuOpen? this.toggleMenu : null}>Subscribe</Link>
						</div>}
					</div>
				</div>
			</div>
		);
	}
}

export default Header;

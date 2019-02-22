/*
 * UCSC Xena Web
 * https://xena.ucsc.edu/
 *
 * UCSC Xena Web header component.
 */

// Core dependencies
import React from 'react';

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
        this.state = {toggleNavBarMenu: false};
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({toggleNavBarMenu: !this.state.toggleNavBarMenu});
        /*this.props.onMenuOpen(this.state.toggleNavBarMenu);*/
    };

    render() {

        const getFontClass = () => {

            return classNames({
                [compStyles.navLinks]: true,
                [fontStyles.mdBody2]: !this.state.toggleNavBarMenu,
                [fontStyles.mdHeadline5]: this.state.toggleNavBarMenu,
                [globalStyles.bgGreen]: this.state.toggleNavBarMenu
            });
        };

        return (
            <div>
                <div className={globalStyles.wrapper}>
                    <div className={classNames(compStyles.navBar, {[compStyles.open]: this.state.toggleNavBarMenu})}>
                        <img src={headerLogo} alt='UCSC Xena'/>
                        <div className={compStyles.navBarMenu} onClick={this.toggleMenu}><span/></div>
                        <div className={getFontClass()}>
                            <a href='/'>Overview</a>
                            <a href='/'>Analysis</a>
                            <a href='/'>Tutorials</a>
                            <a href='/'>What's New</a>
                            <a href='/'>Cite Us</a>
                            <a href='/'>Subscribe</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

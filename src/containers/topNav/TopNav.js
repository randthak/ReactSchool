import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import classes from './TopNav.module.css';

class TopNav extends Component{

    render(){
        return (
            <nav className={classes.NavItems}>
                <Link to="/" className={classes.NavItem}> Home</Link>
                <Link to="/school" className={classes.NavItem}> School</Link>
                <Link to="/contact" className={classes.NavItem}> Contact</Link>
            </nav>
        )
    }
}

export default TopNav;
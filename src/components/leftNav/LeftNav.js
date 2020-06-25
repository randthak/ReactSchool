import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import classes from './LeftNav.module.css';

class LeftNav extends Component{

    render(){
        return (
            <nav >
                <Link to="/school/stList" className={classes.LeftNavItem}> Students List</Link>
                <Link to="/school/stNew" className={classes.LeftNavItem}> New Student</Link>
            </nav>
        )
    }
}

export default LeftNav;
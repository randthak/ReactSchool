import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Wrap from "../../hoc/wrap";

import classes from './Page.module.css';
import Welcome from '../../components/welcome/Welcome';
import Contact from '../../components/contact/Contact';
import School from "../../containers/school/School"

class Page extends Component{

    render(){
        console.log("Page props: " + this.props);
        return (
            <Wrap>
                <Switch>
                    <Route path="/" exact render={()=> <Welcome repeat={4}/>} />
                    <Route path="/contact"  render={()=> <Contact/>} />
                    <Route path="/school"  render={()=> <School/>} />
                    <Route render = {()=> <h1> OOOOPS something went wrong!!!!!!!</h1>} />
                </Switch>
            </Wrap>
        )
    }
}

export default Page;
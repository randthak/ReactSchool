import React, {Component} from "react";

import classes from "./Welcome.module.css";

class Welcome extends Component{
    
    render() {
        console.log("Welcome component: props.repeat: " + this.props.repeat)
        const paras = [];
        for (var i=0; i<this.props.repeat; i++) {paras.push(<p key={i}>  Learn all what you want here !!!!! </p>);}
        paras.join(' ');

        // let paras = new Array(this.props.repeat);
        // const parasList=paras.map((el, id) => (
        //     <p key={id}>  Learn all what you want here !!!!! </p>
        // ));
        console.log("Welcome component: props.repeat: " + paras)

        return (
            <div className= {classes.WelcomeContainer}>
                <h2> Welcome to React School </h2>
                {paras}
            </div>
        );
    }
}

export default Welcome;
import  React from "react";
import Wrap from "../../hoc/wrap";
import classes from "./Logo.module.css";
import logoImg from "../../assets/images/react.svg";

const logo = (props) => {
    const classList = [classes.Logo, classes.LogoImg].join(' ');
    return (
        <Wrap>
            <img src={logoImg} className= {classList} alt="Logo"/>

            <p className= {classes.Name}><span >   React School  </span></p>
        </Wrap>
    );
}

export default logo;
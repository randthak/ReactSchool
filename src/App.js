import React from 'react';
import classes from "./App.module.css";
import Wrap from "./hoc/wrap"
import Welcome from "./components/welcome/Welcome"
import {BrowserRouter} from 'react-router-dom';
import TopNav from './containers/topNav/TopNav';
import LeftNav from './components/leftNav/LeftNav'

import Logo from "./components/Logo/Logo";
import Page from './containers/page/Page';

function App() {
  return (
    <BrowserRouter>
      <Wrap>
        <div className={classes.TopNav}>
          <Logo />
          <TopNav></TopNav>
        </div>
        <div className={classes.Bottom}>
          <div className={classes.LeftNav}>
            <LeftNav />
          </div>
          <div className={classes.Page}>
            <Page />
          </div>
        </div>
      </Wrap>
    </BrowserRouter>
  );
}

export default App;

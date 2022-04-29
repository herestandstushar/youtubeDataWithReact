import React from 'react'
import {Route, Switch} from "react-router-dom";
import "./App.css";

import Data from "./data/data.js";

import Header from "./components/header/header.component";
import NavBar from "./components/nav-bar/nav-bar.component";
import DataContainer from "./components/data-container/data-container.component";
import { Core } from './components/dataview/core';


const  App = ()=> {
  const {introduction, dataVisualization, dataAnalysis, correlation, dataImputities} = Data;

  return (
    <div>
      <Header />
      <div className="container">
        <div className="navbar-container">
          <NavBar data={Data} />
        </div>
        <Switch>
          <div className="data-container">
            <Route exact path="/">
              <DataContainer title={introduction.title} body={introduction.body} imageUrl={introduction.imageUrl} />
              <DataContainer title={dataVisualization.title} body={dataVisualization.body} imageUrl={dataVisualization.imageUrl} />
              <DataContainer title={dataAnalysis.title} body={dataAnalysis.body} imageUrl={dataAnalysis.imageUrl}/>
              <DataContainer title={correlation.title} body={correlation.body} imageUrl={correlation.imageUrl} />
              <DataContainer title={dataImputities.title} body={dataImputities.body} imageUrl={dataImputities.imageUrl} />
            </Route>
            <Route exact path="/:dataId" component={Core} />
          </div>
        </Switch>
      </div>
    </div>
  );
};

export default App


import React from "react";
import {Link} from "react-router-dom";
import "./nav-bar.styles.css";

const NavBar = ({data}) => {
    const { dataVisualization, dataAnalysis, correlation, dataImputities} = data;

    return(
    <div className="navbar-box">
        <div className="navbar-content">
           
            <Link className="headings" to={`/${dataVisualization.title}`}><span>1. Data Visualization</span></Link>
            <Link className="headings" to={`/${dataAnalysis.title}`}><span>2. Data Analysis</span></Link>
            <Link className="headings" to={`/${correlation.title}`}><span>3. Correlation</span></Link>
            <Link className="headings" to={`/${dataImputities.title}`}><span>4. Data Impurities</span></Link> 
        </div>
    </div>
    );
}

export default NavBar;
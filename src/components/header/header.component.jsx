import React from 'react';
import "./header.styles.css";
import {withRouter} from "react-router-dom"

const Header = ({ history }) => (
    <div className="container-lg header">
        <h1 className='title' onClick ={ ()=>history.push('/')} >youTubeDataAnalysis</h1>
    </div>
);

export default withRouter(Header);
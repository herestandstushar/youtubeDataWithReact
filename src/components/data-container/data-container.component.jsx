import React from "react";
import {withRouter} from "react-router-dom";
import "./data-container.styles.css";

const DataContainer = ({title, body, imageUrl, history, match})=> {
    return(
    <div className="data-box">
        {
            title==='Introduction'? <h1>{title}</h1>:<h1 onClick={ ()=> history.push(`${match.url}${title}`)} >{title}</h1>
        }

        {/* <h1 onClick={ ()=> history.push(`${match.url}${title}`)} >{title}</h1> */}
        <div className="data-content">
            <span>{body}</span>
            {imageUrl ? <img src={imageUrl} alt="Not found" /> : null}
        </div>
    </div>
    );
}

export default withRouter(DataContainer);
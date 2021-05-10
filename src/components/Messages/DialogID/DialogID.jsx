import {NavLink} from "react-router-dom";
import React from "react";

function DialogID(props) {
    let path = "/messages/" + props.id;
    return (
        <div className="collection">
            <a className="collection-item">
                <NavLink to={path}>
                    {props.name}
                </NavLink>
            </a>

        </div>
    );
}
export default DialogID;
import {NavLink} from "react-router-dom";
import React from "react";

class DialogID extends React.Component {
    path = "/messages/" + this.props.id;
    render() {
        return (
            <div className="collection">
                <a className="collection-item">
                    <NavLink to={this.path}>
                        {this.props.name}
                    </NavLink>
                </a>
            </div>
        );
    }



}
export default DialogID;
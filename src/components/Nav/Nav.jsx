import React from "react";
import {Route, Link} from "react-router-dom";
import M from 'materialize-css'

function Nav() {
    return (
        <Route>
            <div className="collection col s3 ">
                <Link className=" collection-item" to="/profile">Profile</Link>

                <Link className=" collection-item" to="/messages">Messages</Link>

                <Link className=" collection-item" to="/news">News</Link>

                <Link className=" collection-item" to="/music">Music</Link>

                <Link className=" collection-item" to="/users">USERS</Link>

                <Link className=" collection-item" to="/settings">Settings</Link>
            </div>
        </Route>


    );
}

export default Nav;
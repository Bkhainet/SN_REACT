import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {FOLLOW_AC, SETUSERS_AC, UNFOLLOW_AC} from "../../redux/UsersPage-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(FOLLOW_AC(userId));
        },
        unfollow: (userId) => {
            dispatch(UNFOLLOW_AC(userId));
        },
        setusers: (users) => {
            dispatch(SETUSERS_AC(users))
        }
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;


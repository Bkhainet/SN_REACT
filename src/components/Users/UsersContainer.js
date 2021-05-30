import React from "react";
import {connect} from "react-redux";
import Users from "./Users";

import {
    FOLLOW_AC,
    SET_CURRENT_PAGE_AC,
    SET_TOTAL_COUNT_AC,
    SETUSERS_AC,
    UNFOLLOW_AC
} from "../../redux/UsersPage-reducer";



let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalCount: state.UsersPage.totalCount,
        currentPage: state.UsersPage.currentPage,
        currentUsers: state.UsersPage.currentUsers
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
        },
        setTotalCaunt: (totalCount) => {
            dispatch(SET_TOTAL_COUNT_AC(totalCount))
        },
        setcurrentpage: (currentPage) => {
            dispatch(SET_CURRENT_PAGE_AC(currentPage))
        }
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;


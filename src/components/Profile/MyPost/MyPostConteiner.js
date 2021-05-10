import React from "react";
import {connect} from "react-redux";
import MyPost from "./MyPost";


let mapStateToProps = (state) => {
    return {
        PostsDate: state.ProfilePage.PostsDate
    }
}
const MyPostContainer = connect(mapStateToProps)(MyPost);


export default MyPostContainer;



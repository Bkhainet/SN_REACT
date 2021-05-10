import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {addPost_AC, updateNewPostText_AC} from "../../redux/ProfilePage-reducer";
import NewPost from "./NewPost/NewPost";
import MyPost from "./MyPost/MyPost";



let mapStateToProps = (state) => {
    return {
        NewPostText: state.ProfilePage.NewPostText,
        PostsDate: state.ProfilePage.PostsDate
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPost_AC())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostText_AC(text));
        }
    }
}
const ProfileConteiner = connect(mapStateToProps, mapDispatchToProps)(Profile, NewPost, MyPost);

export default ProfileConteiner;


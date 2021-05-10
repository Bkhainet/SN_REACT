import React from "react";
import {addPost_AC, updateNewPostText_AC} from "../../../redux/ProfilePage-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";


    let mapStateToProps = (state) => {
        return {
            NewPostText: state.ProfilePage.NewPostText
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
    const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);


export default NewPostContainer;



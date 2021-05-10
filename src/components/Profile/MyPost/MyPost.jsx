import React from "react";
import PostElement from "./PostElement/PostElement";

function MyPost(props) {
    let PostElements = props.PostsDate.map(post => <PostElement post={post.post} like={post.like}/>);
    return (
        <div>{PostElements}</div>
    );
}

export default MyPost;
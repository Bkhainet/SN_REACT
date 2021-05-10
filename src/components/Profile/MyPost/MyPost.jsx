import React from "react";
import PostElement from "./PostElement/PostElement";

class MyPost extends React.Component {

    PostElements = this.props.PostsDate.map(post => <PostElement post={post.post} like={post.like}/>);
    render() {
        return (
            <div>{this.PostElements}</div>
        );
    }
}
export default MyPost;
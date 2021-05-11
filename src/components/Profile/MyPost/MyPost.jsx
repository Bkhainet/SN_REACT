import React from "react";
import PostElement from "./PostElement/PostElement";

class MyPost extends React.Component {
    constructor(props) {
        super(props);
    }
    // PostElements = this.props.PostsDate.map(post => <PostElement post={post.post} like={post.like}/>);

    render() {
        return (
            <div>{this.props.PostsDate.map
            (post => <PostElement post={post.post} like={post.like}/>)}
            </div>
        );
    }
}

export default MyPost;
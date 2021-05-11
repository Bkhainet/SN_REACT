import React from "react";

class NewPost extends React.Component {

    newPostElement = React.createRef();
    addPost = () => {
        this.props.addPost();
    }

    updateNewPostText = () => {
        let text = this.newPostElement.current.value;
        this.props.updateNewPostText(text);
    }

    render() {
        return (
            <div className="row">
                <div className="col s6">
                    <div className="input-field">
                            <textarea className="materialize-textarea"
                                      onChange={this.updateNewPostText} ref={this.newPostElement}
                                      value={this.props.NewPostText}/>
                    </div>
                </div>
                <div className="col s6 ">
                    <div className="center-align" style={{marginTop: 23 + 'px'}}>
                        <button className="btn waves-effect waves-light" type="submit" onClick={this.addPost}>Add post
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewPost;
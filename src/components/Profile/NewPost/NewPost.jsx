import React from "react";

function NewPost(props) {

    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }

    let updateNewPostText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className="row">
            <div className="col s6">
                <div className="input-field">
                            <textarea className="materialize-textarea"
                                      onChange={updateNewPostText} ref={newPostElement} value={props.NewPostText}/>
                </div>
            </div>
            <div className="col s6 ">
                <div className="center-align" style={{marginTop: 23 + 'px'}}>
                    <button className="btn waves-effect waves-light" type="submit" onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>
    );
}

export default NewPost;
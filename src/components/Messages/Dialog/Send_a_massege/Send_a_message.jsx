import React from "react";

function Send_a_message(props) {

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();

    }
    let updateNewMessageText = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }
    return (
        <div className="input-field">
            <textarea className="materialize-textarea"
                      onChange={updateNewMessageText} ref={newMessageElement} value={props.NewMessageText}/>
            <div>
                <button className="btn waves-effect waves-light" type="submit" onClick={addMessage}>Send a message</button>
            </div>
        </div>
    )
}
export default Send_a_message;
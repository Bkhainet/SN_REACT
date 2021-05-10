import React from "react";

class Send_a_message extends React.Component {
     newMessageElement = React.createRef();
     addMessage = () => {
        this.props.addMessage();
    }
    updateNewMessageText = () => {
        let text = this.newMessageElement.current.value;
        this.props.updateNewMessageText(text);
    }

    render() {
        return (
            <div className="input-field">
            <textarea className="materialize-textarea"
                      onChange={this.updateNewMessageText} ref={this.newMessageElement} value={this.props.NewMessageText}/>
                <div>
                    <button className="btn waves-effect waves-light" type="submit" onClick={this.addMessage}>Send a message</button>
                </div>
            </div>
        )
    }



}
export default Send_a_message;
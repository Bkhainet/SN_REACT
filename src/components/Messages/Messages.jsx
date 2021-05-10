import React from "react";
import Dialog from "./Dialog/Dialog";
import DialogID from "./DialogID/DialogID";
import DialogConteiner from "./Dialog/DialogConteiner";

function Messages(props) {
    let dialogElement = props.dialogsDate.map(dialog => <DialogID id={dialog.id} name={dialog.name}/>);
    // id={dialog.id} name={dialog.name}
    // let messagesElement = props.messagesDate.map(messages => <Dialog messagesDate={props.messagesDate} id={messages.id} message={messages.message}/>);
    return (
        <div className="row">
            <div className="col s3">
                {dialogElement}
            </div>
            <div className="col s6">
                <DialogConteiner/>
            </div>
        </div>
    );
}
export default Messages;
import {Route, Switch} from "react-router-dom";
import React from "react";
import Send_a_message_Container from "./Send_a_massege/Send_a_messageContainer";
import DialogAllMessegeList from "./DialogAllMessageList/DialogAllMessegeList";

function Dialog(props) {
    let path1 = "/messages/" + props.messagesDate[0].id;
    let path2 = "/messages/" + props.messagesDate[1].id;

    let DAMList = props.messagesDate.map(messages => <DialogAllMessegeList message={messages.message}/>);

    return (
        <div>
            <Switch>
                <Route path={path1}>
                    <div>{DAMList}</div>
                    <Send_a_message_Container/>
                </Route>
                <Route path={path2}>
                    <div>{DAMList}</div>
                    <Send_a_message_Container/>
                </Route>
            </Switch>
        </div>

    )
}
export default Dialog;
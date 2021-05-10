import {Route, Switch} from "react-router-dom";
import React from "react";
import Send_a_message_Container from "./Send_a_massege/Send_a_messageContainer";
import DialogAllMessegeList from "./DialogAllMessageList/DialogAllMessegeList";

class Dialog extends React.Component {
     path1 = "/messages/" + this.props.messagesDate[0].id;
     path2 = "/messages/" + this.props.messagesDate[1].id;

     DAMList = this.props.messagesDate.map(messages => <DialogAllMessegeList message={messages.message}/>);

    render() {
        return (
            <div>
                <Switch>
                    <Route path={this.path1}>
                        <div>{this.DAMList}</div>
                        <Send_a_message_Container/>
                    </Route>
                    <Route path={this.path2}>
                        <div>{this.DAMList}</div>
                        <Send_a_message_Container/>
                    </Route>
                </Switch>
            </div>
        )
    }
}
export default Dialog;
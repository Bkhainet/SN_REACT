import React from "react";
import {connect} from "react-redux";
import {addMessage_AC, updateNewMessageText_AC} from "../../../../redux/MessagesPage-reducer";
import Send_a_message from "./Send_a_message";


let mapStateToProps = (state) => {
    return {
        NewMessageText: state.MessagesPage.NewMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessage_AC())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageText_AC(text));
        }
    }
}
const Send_a_message_Container = connect(mapStateToProps, mapDispatchToProps)(Send_a_message);


export default Send_a_message_Container;



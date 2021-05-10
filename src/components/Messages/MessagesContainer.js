import React from "react";

import {connect} from "react-redux";
import Messages from "./Messages";



let mapStateToProps = (state) => {
    return {
        dialogsDate: state.MessagesPage.dialogsDate
    }
}

const MessagesContainer = connect(mapStateToProps)(Messages)
export default MessagesContainer;
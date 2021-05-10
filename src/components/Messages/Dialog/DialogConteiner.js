import React from "react";

import {connect} from "react-redux";
import Dialog from "./Dialog";

let mapStateToProps = (state) => {
    return {
        messagesDate: state.MessagesPage.messagesDate
    }
}

const DialogConteiner = connect(mapStateToProps)(Dialog)
export default DialogConteiner;
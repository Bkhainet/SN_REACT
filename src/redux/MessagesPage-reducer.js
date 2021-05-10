const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogsDate: [
        {id: 1, name: 'Vadim'},
        {id: 2, name: 'Liza'}
    ],
    messagesDate: [
        {id: 1, message: 'How are you'},
        {id: 2, message: 'I love you'},
        {id: 3, message: 'I HATE you'}
    ],
    NewMessageText: ['']
}

const MessagesPage_Reducer = (state = initialState, action) => {
    // switch (action.type) {
    //     case ADD_MESSAGE: {
    //         let NewMessage = {
    //             id: 0,
    //             message: state.NewMessageText
    //         };
    //         let stateCOPY = {...state};
    //         stateCOPY.messagesDate = [...state.messagesDate];
    //         stateCOPY.messagesDate.push(NewMessage);
    //         stateCOPY.NewMessageText = '';
    //         return stateCOPY;
    //     }
    //
    //     case UPDATE_NEW_MESSAGE_TEXT: {
    //         let stateCOPY = {...state};
    //         stateCOPY.messagesDate = [...state.messagesDate];
    //         stateCOPY.NewMessageText = action.NewText;
    //         return stateCOPY;
    //     }
    //     default:
    //         return state;
    // }
    switch (action.type) {
        case ADD_MESSAGE:
            let bodyMessage = state.NewMessageText;
            return {
                ...state,
                NewMessageText: '',
                messagesDate: [...state.messagesDate, {id: 0, message: bodyMessage }]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                NewMessageText: action.NewText
            };
        default:
            return state;
    }
}
export let addMessage_AC = () => {

    return {
        type: ADD_MESSAGE
    }
}
export let updateNewMessageText_AC = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, NewText: text
    }
}

export default MessagesPage_Reducer;


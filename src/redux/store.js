import ProfilePage_Reducer from "./ProfilePage-reducer";
import MessagesPage_Reducer from "./MessagesPage-reducer";


let store = {
    _state: {
        ProfilePage: {
            PostsDate: [
                {id: 1, post: 'Hi, how are you?', like: '11'},
                {id: 2, post: 'My first post!', like: '21'}
            ],
            NewPostText: [
                'Write a new POST!!!'
            ]
        },
        MessagesPage: {
            dialogsDate: [
                {id: 1, name: 'Vadim'},
                {id: 2, name: 'Liza'}
            ],
            messagesDate: [
                {id: 1, message: 'How are you'},
                {id: 2, message: 'I love you'},
                {id: 1, message: 'I HATE you'}
            ],
            NewMessageText: ['']
        }
    },
    _callSubscriber() {
        console.log('STATE CHANGED');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.ProfilePage = ProfilePage_Reducer(this._state.ProfilePage, action);
        this._state.MessagesPage = MessagesPage_Reducer(this._state.MessagesPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
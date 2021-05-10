const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    PostsDate: [
        {id: 1, post: 'Hi, how are you?', like: '11'},
        {id: 2, post: 'My first post!', like: '21'}
    ],
    NewPostText: [
        'Write a new POST!!!'
    ]
}


const ProfilePage_Reducer = (state = initialState, action) => {
    // switch (action.type) {
    //     case ADD_POST: {
    //         let newPost = {
    //             id: 0,
    //             post: state.NewPostText,
    //             like: 0
    //         };
    //         let stateCOPY = {...state};
    //         stateCOPY.PostsDate = [...state.PostsDate];
    //         stateCOPY.PostsDate.push(newPost);
    //         stateCOPY.NewPostText = '';
    //         return stateCOPY;
    //     }
    //     case UPDATE_NEW_POST_TEXT: {
    //         let stateCOPY = {...state};
    //         stateCOPY.PostsDate = [...state.PostsDate];
    //         stateCOPY.NewPostText = action.NewText;
    //         return stateCOPY;
    //     }
    //     default:
    //         return state;
    // }
    switch (action.type) {
        case ADD_POST: {
            let bodyPost = state.NewPostText;
            return {
                ...state,
                NewPostText: '',
                PostsDate: [...state.PostsDate, {id: 0, post: bodyPost }]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                NewPostText: action.NewText
            };
        }
        default:
            return state;
    }
}

export let addPost_AC = () => {
    return {
        type: ADD_POST
    }
}
export let updateNewPostText_AC = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, NewText: text
    }
}

export default ProfilePage_Reducer;
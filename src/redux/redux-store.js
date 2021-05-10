import {combineReducers, createStore} from "redux";
import ProfilePage_Reducer from "./ProfilePage-reducer";
import MessagesPage_Reducer from "./MessagesPage-reducer";
import UsersPage_Reducer from "./UsersPage-reducer";

let reducers = combineReducers({
    ProfilePage: ProfilePage_Reducer,
    MessagesPage: MessagesPage_Reducer,
    UsersPage: UsersPage_Reducer
});
let store = createStore(reducers);

export default store;
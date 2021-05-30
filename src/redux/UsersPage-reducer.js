const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    users: [ ],
    pageSize: 10,
    totalCount: 100,
    currentPage: 1,
};


const UsersPage_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u;
            })
        }
        // case SETUSERS: {
        //     return {
        //         ...state, users: [...state.users, ...action.users] // Запись в конец
        //     }
        // }
        case SETUSERS: {
            return {
                ...state, users: action.users // Запись в начало
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state, totalCount: action.totalCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        default:
            return state;
    }
}

export const FOLLOW_AC = (userId) => ({type: FOLLOW,  userId});
export const UNFOLLOW_AC = (userId) => ({type: UNFOLLOW,  userId});
export const SETUSERS_AC = (users) => ({type: SETUSERS, users});
export const SET_TOTAL_COUNT_AC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const SET_CURRENT_PAGE_AC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});


export default UsersPage_Reducer;
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

let initialState = {
    users: [
        // {id: 1,
        //     followed: false,
        //     name: 'Vadim',
        //     status: 'Best friend authore',
        //     country: 'Ukraine',
        //     city: 'Zp'},
        // {id: 2,
        //     followed: true,
        //     name: 'Liza',
        //     status: 'wifi authore',
        //     country: 'Ukraine',
        //     city: 'Zp'}
    ]
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
        case SETUSERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const FOLLOW_AC = (userId) => ({type: FOLLOW,  userId});
export const UNFOLLOW_AC = (userId) => ({type: UNFOLLOW,  userId});
export const SETUSERS_AC = (users) => ({type: SETUSERS, users});


export default UsersPage_Reducer;
import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import * as axios from "axios";
import {
    FOLLOW_AC,
    SET_CURRENT_PAGE_AC,
    SET_TOTAL_COUNT_AC,
    SETUSERS_AC,
    UNFOLLOW_AC
} from "../../redux/UsersPage-reducer";



class Users_API extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setusers(response.data.items);
            this.props.setTotalCaunt(response.data.totalCount);
        })
    }
    onChaingePag = (pageNumber) => {
        this.props.setcurrentpage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setusers(response.data.items);
        })
    }

    createPages(pages, pagesCount, currentPage) {
        if (pagesCount > 10) {
            if (currentPage > 5) {
                for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                    pages.push(i)
                    if (i == pagesCount) break
                }
            } else {
                for (let i = 1; i <= 10; i++) {
                    pages.push(i)
                    if (i == pagesCount) break
                }
            }
        } else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }
        }
    }
    render() {
        return(
            <Users users={this.props.users}
                   totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   /////////
                   onChaingePag={this.onChaingePag}
                   createPages={this.createPages}
                   /////////
                   fotoProfile={this.props.fotoProfile}
                   name={this.props.name}
                   status={this.props.status}
                   id={this.props.id}
                   uniqueUrlName={this.props.uniqueUrlName}
                   followed={this.props.followed}
                   unfollowed={this.props.unfollowed}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalCount: state.UsersPage.totalCount,
        currentPage: state.UsersPage.currentPage,
        currentUsers: state.UsersPage.currentUsers
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(FOLLOW_AC(userId));
        },
        unfollow: (userId) => {
            dispatch(UNFOLLOW_AC(userId));
        },
        setusers: (users) => {
            dispatch(SETUSERS_AC(users))
        },
        setTotalCaunt: (totalCount) => {
            dispatch(SET_TOTAL_COUNT_AC(totalCount))
        },
        setcurrentpage: (currentPage) => {
            dispatch(SET_CURRENT_PAGE_AC(currentPage))
        }
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users_API)
export default UsersContainer;


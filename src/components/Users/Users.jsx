import React from "react";
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setusers(response.data.items);
        })
    }

    render() {
        return (
            <div className="col s6">
                {this.props.users.map
                (u => <div key={u.id}>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img
                                // src={u.fotoProfile}
                                src={u.fotoProfile != null ? u.fotoProfile : "https://it-workings.ru/wp-content/uploads/2019/08/blank-avatar.jpg"}
                                width={150} height={150}/>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content #2196f3 blue">
                                <div className="col s3">
                                    <p>{u.name}</p>
                                    <p>{u.status}</p>
                                </div>
                                <div className="col s3">
                                    <p>ID:{u.id}</p>
                                    <p>uniqueUrlName:{u.uniqueUrlName}</p>
                                </div>
                            </div>
                            <div className="card-action">
                                {u.followed ? <button class="btn waves-effect waves-light red" onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow<i className="material-icons right">clear</i></button> :
                                    <button class="btn waves-effect waves-light " onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow<i className="material-icons right">check</i></button>}
                            </div>
                        </div>
                    </div>


                </div>)}
            </div>
        )
    }
}

export default Users;


import React from "react";

function Users(props) {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    props.createPages(pages, pagesCount, props.currentPage);

    return (
        <div className="col s6">

            <ul className="pagination">
                {pages.map(p => {
                    return <li className={props.currentPage === p && "active" || "waves-effect"}>
                        <a onClick={(e) => {
                            props.onChaingePag(p)
                        }}>{p}</a>
                    </li>
                })}
            </ul>

            {props.users.map
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
                                    props.unfollow(u.id)
                                }}>Unfollow<i className="material-icons right">clear</i></button> :
                                <button class="btn waves-effect waves-light " onClick={() => {
                                    props.follow(u.id)
                                }}>Follow<i className="material-icons right">check</i></button>}
                        </div>
                    </div>
                </div>
            </div>)}

        </div>
    )
}

export default Users;


import React from "react";
import * as axios from "axios";
import ReactPaginate from 'react-paginate';

class UsersTEST_PAGI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }


    // componentDidMount() {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
    //         this.props.setusers(response.data.items);
    //         // this.props.setTotalCaunt(response.data.totalCount);
    //     })
    // }

    receivedData() {

        // axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
        //         this.props.setTotalCaunt(response.data.totalCount);
        // })
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.totalCount}`)
            .then(res => {
                // this.props.setTotalCaunt(res.data.totalCount);
                const data = res.data.items
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(u => <React.Fragment>
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
                                {u.followed ? <button className="btn waves-effect waves-light red" onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow<i className="material-icons right">clear</i></button> :
                                    <button className="btn waves-effect waves-light" onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Follow<i className="material-icons right">check</i></button>}
                            </div>
                        </div>
                    </div>
                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),postData
                })
            });
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };
    componentDidMount() {
        this.receivedData()
    }
    // onChaingePag = (pageNumber) => {
    //     this.props.setcurrentpage(pageNumber)
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
    //         this.props.setusers(response.data.items);
    //     })
    // }

    render() {

        // let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        // let pages = [];
        // for (let i = 1; i <= pagesCount; i++) {
        //     pages.push(i)
        // }


        return (
            <div className="col s6">

                {/*<ul className="pagination">*/}
                {/*    {pages.map(p => {*/}
                {/*        return <li className={this.props.currentPage === p && "active waves-effect"}>*/}
                {/*            <a onClick={(e) => {this.onChaingePag(p)}}>{p}</a>*/}
                {/*        </li>*/}
                {/*    })}*/}
                {/*</ul>*/}

                {/*<ul className="pagination">*/}
                {/*<ReactPaginate pageCount={pagesCount}*/}
                {/*               onPageChange={this.onChaingePag(3)}*/}
                {/*               initialPage={2}*/}
                {/*               previousLabel={<i className="material-icons">chevron_left</i>}*/}
                {/*               nextLabel={<i className="material-icons">chevron_right</i>}*/}
                {/*               pageClassName={"waves-effect"}*/}
                {/*               activeClassName={"active"}*/}
                {/*               />*/}
                {/*</ul>*/}

                {/*<ul className="pagination">*/}
                {/*    {pages.map(p => {*/}
                {/*    return(*/}
                {/*        <ReactPaginate pageCount={pagesCount}*/}
                {/*                   onPageChange={(e) => this.onChaingePag(p)}*/}
                {/*                   previousLabel={<i className="material-icons">chevron_left</i>}*/}
                {/*                   nextLabel={<i className="material-icons">chevron_right</i>}*/}
                {/*                   pageClassName={"waves-effect"}*/}
                {/*                   activeClassName={"active"}*/}
                {/*    />*/}
                {/*    )*/}
                {/*    })}*/}
                {/*</ul>*/}

                <div>
                    {this.state.postData}
                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={10}
                        marginPagesDisplayed={5}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
                </div>


                {/*{this.props.users.map*/}
                {/*(u => <div key={u.id}>*/}
                {/*    <div className="card horizontal">*/}
                {/*        <div className="card-image">*/}
                {/*            <img*/}
                {/*                // src={u.fotoProfile}*/}
                {/*                src={u.fotoProfile != null ? u.fotoProfile : "https://it-workings.ru/wp-content/uploads/2019/08/blank-avatar.jpg"}*/}
                {/*                width={150} height={150}/>*/}
                {/*        </div>*/}
                {/*        <div className="card-stacked">*/}
                {/*            <div className="card-content #2196f3 blue">*/}
                {/*                <div className="col s3">*/}
                {/*                    <p>{u.name}</p>*/}
                {/*                    <p>{u.status}</p>*/}
                {/*                </div>*/}
                {/*                <div className="col s3">*/}
                {/*                    <p>ID:{u.id}</p>*/}
                {/*                    <p>uniqueUrlName:{u.uniqueUrlName}</p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="card-action">*/}
                {/*                {u.followed ? <button class="btn waves-effect waves-light red" onClick={() => {*/}
                {/*                        this.props.unfollow(u.id)*/}
                {/*                    }}>Unfollow<i className="material-icons right">clear</i></button> :*/}
                {/*                    <button class="btn waves-effect waves-light " onClick={() => {*/}
                {/*                        this.props.follow(u.id)*/}
                {/*                    }}>Follow<i className="material-icons right">check</i></button>}*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>)}*/}
            </div>
        )
    }
}

export default UsersTEST_PAGI;


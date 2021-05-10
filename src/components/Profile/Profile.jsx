import React from "react";

import NewPostContainer from "./NewPost/NewPostContainer";
import MyPostContainer from "./MyPost/MyPostConteiner";



function Profile(props) {

    return (
        <div className="col s9">
            <div className="row">
                <div className="col s12 m7">
                    <div className="card grey lighten-1 ">
                        <div className="card-image">
                            <img src="https://cdn.ihsmarkit.com/www/blog/ra-global-business-527035084-post.jpg" alt=""/>
                        </div>
                        <div className="card-content">
                            <div className="card horizontal light-blue darken-3">
                                <div className="card-image">
                                    <img
                                        src="https://avochka.ru/img/kartinka/1/enot_glass.jpg"
                                        width="200" height="200"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur culpa fugit necessitatibus pariatur possimus quam quas? Asperiores corporis deleniti distinctio eum, ex, exercitationem, necessitatibus nobis odit perferendis placeat vitae.</span><span>Accusantium animi aspernatur assumenda blanditiis cumque debitis eius enim esse et ex expedita incidunt libero magnam magni maiores obcaecati omnis possimus praesentium qui quia quis, quisquam sequi vel voluptas voluptatibus?</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <NewPostContainer/>
                            <MyPostContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;


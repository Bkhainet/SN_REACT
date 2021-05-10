import React from "react";


class PostElement extends React.Component {
    render() {
        return (
            <div className="card horizontal light-blue darken-3">
                <div className="card-image">
                    <img
                        src="https://avochka.ru/img/kartinka/1/enot_glass.jpg"
                        width="93" height="93"/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p><span>{this.props.post}</span></p>
                        <p>LIKE::<span>{this.props.like}</span></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostElement;
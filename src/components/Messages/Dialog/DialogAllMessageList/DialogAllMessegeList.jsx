import React from "react";

class DialogAllMessegeList extends React.Component {
    render() {
        return (
            <div>
                <br/>
                -------------------------------
                <div>{this.props.message}</div>
            </div>
        )
    }


}
export default DialogAllMessegeList;
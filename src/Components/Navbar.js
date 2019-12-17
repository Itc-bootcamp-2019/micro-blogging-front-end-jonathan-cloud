import React from "react";

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#profile">Profile</a></li>

            </ul>
        )
    }
}

export default Navbar
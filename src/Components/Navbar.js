import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link
  } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li>
          <Link className="active" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    );
  }
}

export default Navbar;

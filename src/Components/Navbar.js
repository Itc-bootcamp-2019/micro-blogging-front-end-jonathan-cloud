import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";

class Navbar extends React.Component {

  render() {
    return (
      <ul>
        <li>
          <Link to="/login">Firestore Login</Link>
        </li>
        <li>
          <Link to="/Firestore" >Firestore Home</Link>
        </li>
        <li>
          <Link className="active" to="/">
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

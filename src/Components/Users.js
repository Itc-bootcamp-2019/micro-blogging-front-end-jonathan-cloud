import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

class Users extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      user: "",
    };
  }

  onInputChange = (e) => {

    this.setState({ user: e.target.value })

  };

  handleSubmit = () => {
    let newUser = localStorage.setItem("user", this.state.user);
    this.setState({ user: newUser })


  }
  render() {
    const newUser = localStorage.getItem('user')

    return (
      <div className="container-fluid">

        <div className="row justify-content-center">
          <div className="profilebox form-group fluid-container">
            <h2 className="text-left">Profile</h2>
            <p className="text-left m-0">Username</p>
            <input className="form-control" type="text" value={this.state.user} onChange={this.onInputChange} placeholder={newUser} />

            <button className="btn btn-primary tweetbtn" onClick={this.handleSubmit.bind(this)}> test</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;


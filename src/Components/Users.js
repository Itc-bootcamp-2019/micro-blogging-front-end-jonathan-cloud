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
    console.log(newUser)
  }
  render() {
    console.log(this.state.newUser)
    return (
      <div className="container-fluid">
        <input type="text" value={this.state.user} onChange={this.onInputChange} />
        <button onClick={this.handleSubmit.bind(this)}> test</button>
      </div>
    );
  }
}

export default Users;
// addUser = e => {
//     this.setState({ user: e.target.value });
//   };

// //   changeUser = el => {
// //       this.setState({user: this.props.userName})
// //   }

//   handleSubmit = user => {
//     this.setState(prevState => {
//       const newUsers = prevState.users;
//       newUsers.push(user);
//       return { users: newUsers };
//     });
//     console.log(this.state.users);
//     alert(this.state.user + " was created");
//   };

//   render() {
//       console.log(this.props.userName)
//     const { user, users } = this.state;
//     return (
//       <div>
//         <input
//           type="text"
//           value={user}
//           onChange={this.addUser.bind(this)}
//         />
//         <button type="submit" onClick={() => this.handleSubmit(user)}>
//           Profile
//         </button>
//         {this.state.users.map(user => (
//           <p>{user} was created</p>
//         ))}
//       </div>
//     );
//   }

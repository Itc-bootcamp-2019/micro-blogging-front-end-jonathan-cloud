import React from 'react';
import { auth, db } from '../api/Firestore';
import 'firebase/auth'




class Firestorelogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordTwo: ""
    }

  }

  handleUser(event) {
    this.setState({ username: event.target.value })

  }

  handlePassword(event) {
    this.setState({password:event.target.value})
  }

  onSubmit = () => {
    this.doCreateUserWithEmailAndPassword(this.state.username, this.state.password)
    
  }

  doCreateUserWithEmailAndPassword = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
  }

  doSignInWithEmailAndPassword = (email, password) => {
    auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut = () => {
    auth.signOut();
  }


  render() {

    return (
      <>
        <div className="justify-content-center container-fluid form-group row">
          <div className="">
            create user:
        <input type="text" className="form-control" value={this.state.username} onChange={this.handleUser.bind(this)}></input>
            <input type="text" value={this.state.password}className="form-control" onChange={this.handlePassword.bind(this)}></input>
            {/* <input type="text" className="form-control" onChange={this.handleSubmit.bind(this)}></input>
          <input type="text" className="form-control" onChange={this.handleSubmit.bind(this)}></input> */}
            <button className="btn-primary" onClick={()=>{this.onSubmit()}}>test</button>
          </div>
        </div>
      </>
    )
  }
}
export default Firestorelogin
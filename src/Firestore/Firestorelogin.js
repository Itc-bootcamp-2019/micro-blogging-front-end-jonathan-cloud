import React from 'react';
import { auth, db } from '../api/Firestore';
import 'firebase/auth'
import Firestoreauth from './Firestoreauth'
import Firestoregoogle from './Firestoregoogle';




class Firestorelogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: "",
      displayName: ""
    }

  }

  handleUser(event) {
    this.setState({ username: event.target.value })

  }

  handlePassword(event) {
    this.setState({ password: event.target.value })
  }

  handledisplayName(event){
    this.setState({displayName: event.target.value})
  }

  onSubmit = () => {
    this.doCreateUserWithEmailAndPassword(this.state.username, this.state.password)
    
  }

  doCreateUserWithEmailAndPassword = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password).then((result)=>{
      return result.user.updateProfile({
        displayName : this.state.displayName,
        photoURL: ""
      })
    });
  }



  render() {

    return (
      <>
        <div className="justify-content-center row text-white m-0">
          
          
          <div className="text-white  w-50 ">
            Create a User
            <input type="text" className="form-control" value={this.state.username} placeholder="Enter a valid email" onChange={this.handleUser.bind(this)}></input>
            
            <input type="text" placeholder="enter a password" value={this.state.password} className="form-control" onChange={this.handlePassword.bind(this)}></input>
            
            <input type="text" placeholder="enter a username" value={this.state.displayName} className="form-control" onChange={this.handledisplayName.bind(this)}></input>
            <button className="btn-primary" onClick={() => { this.onSubmit() }}>create user</button>
          </div>
        </div>
        <Firestoregoogle />
        <Firestoreauth />
        
      </>
    )
  }
}
export default Firestorelogin
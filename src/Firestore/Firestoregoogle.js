import React from 'react';
import { auth, db } from '../api/Firestore';
import 'firebase/auth'
import Firestoreauth from './Firestoreauth'
import firebase from 'firebase'



class Firestoregoogle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: "",
      displayName: "",
      provider: new firebase.auth.GoogleAuthProvider()
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

  test=()=>{
    let provider=new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  }


  render() {

    return (
      <>
        <div className="justify-content-center row text-white m-2">
        
          <button className="fa fa-google m-2" onClick={this.test}> Create a user with Google</button>
          
{/*           
          <div className="text-white  w-50 ">
            Create a User
            {/* <input type="text" className="form-control" value={this.state.username} placeholder="Enter a valid email" onChange={this.handleUser.bind(this)}></input>
            
            <input type="text" placeholder="enter a password" value={this.state.password} className="form-control" onChange={this.handlePassword.bind(this)}></input>
            
            <input type="text" placeholder="enter a username" value={this.state.displayName} className="form-control" onChange={this.handledisplayName.bind(this)}></input>
            <button className="btn-primary" onClick={() => { this.onSubmit() }}>create user</button> }
          </div> */}
        </div>
        

      </>
    )
  }
}
export default Firestoregoogle
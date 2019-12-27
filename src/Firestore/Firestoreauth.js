import React from 'react';
import { auth, db } from '../api/Firestore';
import 'firebase/auth';
import firebase from 'firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  Redirect
  
} from "react-router-dom";




class Firestoreauth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: "",
      loading: true,
      isAuthenticated:false
    }

  }

  componentDidMount(){
    // this.doSignInWithEmailAndPassword("bill@gmail.com", "124567")
    // firebase.auth().signInWithCredential
  }

  
  handleUser(event) {
    this.setState({ username: event.target.value })

  }

  handlePassword(event) {
    this.setState({ password: event.target.value })
  }
  /*
  db.users.get(where username="bob")
  if (enteredpassword=bob.password)
  return true;

  db.users.get(where userEmail="bob@gmail.com")

  userName=bob
  userEmail=bob@gmail.com
  password=1234567
  */
  doSignInWithEmailAndPassword = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then((result)=>{
      this.setState({isAuthenticated: true})
      console.log(result.user.email)

    }).catch((error)=>{
      
      this.setState({loading: false})
    })
  }
  
  doSignOut = () => {
    auth.signOut().then(this.setState({isAuthenticated:false}));
    console.log(auth.currentUser)
  }

  googleSignIn=()=>{

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
        <div className="justify-content-center row text-white m-0">
          
          
          <div className="text-white  w-50 ">
            Login
            <input type="text" className="form-control" value={this.state.username} placeholder="Enter a valid email" onChange={this.handleUser.bind(this)}></input>
            
            <input type="text" placeholder="enter a password" value={this.state.password} className="form-control" onChange={this.handlePassword.bind(this)}></input>
            <button className="btn-primary" onClick={() => { this.doSignInWithEmailAndPassword(this.state.username, this.state.password) }}>login</button>
            <button className="btn-primary ml-1" onClick={()=>this.doSignOut()}>sign out</button>
            <button className="fa fa-google m-2" onClick={this.googleSignIn}> Login with Google</button>
          </div>
          
         
          </div>
        
      </>
    )
  }
}
export default Firestoreauth
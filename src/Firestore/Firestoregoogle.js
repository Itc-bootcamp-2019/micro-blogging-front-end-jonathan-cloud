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

  handledisplayName(event) {
    this.setState({ displayName: event.target.value })
  }

  onSubmit = () => {
    this.doCreateUserWithEmailAndPassword(this.state.username, this.state.password)

  }

  doCreateUserWithEmailAndPassword = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password).then((result) => {
      return result.user.updateProfile({
        displayName: this.state.displayName,
        photoURL: ""
      })
    });
  }

  test = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {

      var token = result.credential.accessToken;

      var user = result.user;
      console.log(user);

    }).catch(function (error) {

      var errorCode = error.code;
      var errorMessage = error.message;

      var email = error.email;

      var credential = error.credential;

    });

  }


  render() {

    return (
      <>
        <div className="justify-content-center row text-white m-2">

          <button className="fa fa-google m-2" onClick={this.test}> Create a user with Google</button>


        </div>


      </>
    )
  }
}
export default Firestoregoogle
import React from 'react';
import { auth, db } from '../api/Firestore';
import 'firebase/auth'




class Firestorelogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ""
    }

  }

  handleSubmit(event) {
    this.setState({ user: event.target.value })
  }
  doCreateUserWithEmailAndPassword = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
  }

  render() {
    this.doCreateUserWithEmailAndPassword("jefff@gmail.com", "1233445677")
    return (
      <><div className="text-white">
        Login:
        <input type="text" onChange={this.handleSubmit.bind(this)}></input>
      </div>
      </>
    )
  }
}
export default Firestorelogin
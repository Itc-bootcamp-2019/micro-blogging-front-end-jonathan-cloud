import React from 'react';
import { db } from "../api/Firestore";
import { auth } from 'firebase';

class Firestorepost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: "",
      tweets: [],
    }
  }
  posty = () => {

    db.collection("tweets").add({
      content: this.state.content,
      userName: auth().currentUser.displayName,
      date: new Date().toISOString()
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

  }
  handleSubmit(event) {
    this.setState({ content: event.target.value })

  }
  
  render() {

    return (
      <>
        <textarea style={{ resize: "none" }} type="text" value={this.state.content} onChange={this.handleSubmit.bind(this)} />
        <button className="btn btn-primary tweetbtn"
          type="submit" onClick={() => {
            this.posty()
            this.props.submit()
          }}
        >submit</button>
      </>
    )
  }
}

export default Firestorepost
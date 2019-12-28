import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import firebase, { auth } from 'firebase'
import { db } from "../api/Firestore";
import Firestorepost from "./Firestorepost";
import Firestoreauth from './Firestoreauth'
import { Redirect } from 'react-router-dom';
class FirestoreInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [],
      tweetz: [],
      loading: true,
      auth: firebase.auth().currentUser

    }
    this.refresh()

  }

  refresh = () => {
    setInterval(() => {
      this.getUser()
    }, 10000)
  }

  componentDidMount() {
    this.getUser()


  }



  getUser = () => {
    db.collection("tweets").orderBy("date", "desc").get()
      .then((querySnapshot) => {
        const newTweets = []
        querySnapshot.forEach(doc =>
          newTweets.push(doc.data()),
        );
        this.setState({ tweets: newTweets });

      });

  }
  render() {

    if (!this.state.auth) return <Redirect to='/login' />
    return (
      <>

        <div className="row justify-content-center">
          <div className="tweetbox fluid-container rounded">
            <Firestorepost
              tweet={this.state.tweets}
              submit={this.getUser}
            />
            <div className="tweets">

              {this.state.tweets.map(tweet => (

                <div className="tweet rounded">
                  <div className="space row m-auto">
                    <span>

                      {tweet.userName}
                    </span>
                    <span>
                      {tweet.date}

                    </span>
                  </div>
                  <p>
                    {tweet.content}
                  </p>
                </div>

              ))}
            </div>
          </div>
        </div>

      </>
    )
  }
}



export default FirestoreInfo
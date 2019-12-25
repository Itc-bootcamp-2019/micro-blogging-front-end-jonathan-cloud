import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Inputbox from "./Inputbox";
import GetTweet from "./GetTweets";
import { getTweet, postTweet } from "../api/api.js";
import MyAppContext from "../Context/MyAppContext";
import { db } from "../api/Firestore";
import Firestorepost from "./Firestorepost";

class FirestoreInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [],
      tweetz: [],
      loading: true
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

  docRef() {
    const newThis = this
    db.collection("tweets").get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log("wegetagain")
        let items = doc.data()
        newThis.state.tweetz.push(items)

      });
    });
  }


  getUser = () => {
    db.collection("tweets").orderBy("date","desc").get()
      .then((querySnapshot) => {
        const newTweets = []
        querySnapshot.forEach(doc =>
          newTweets.push(doc.data()),
        );
        this.setState({ tweets: newTweets });
        // querySnapshot.forEach((doc) => {
        //   // console.log(doc.id, " => ", doc.data())
        //   this.setState({ tweets: [...this.state.tweets, doc.data()], loading: false }, () => {
        //     // console.log(thisVar.state.tweets)
        //   })
        // });
      });

  }
  render() {

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
              {/* <p className="text-white">{(!this.state.loading && this.state.tweets[0].content)}</p> */}
            </div>
          </div>
        </div>

      </>
    )
  }
}



export default FirestoreInfo
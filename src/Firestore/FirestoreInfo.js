import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import firebase, { auth } from 'firebase'
import { db } from "../api/Firestore";
import Firestorepost from "./Firestorepost";
import Firestoreauth from './Firestoreauth'
import {Redirect} from 'react-router-dom';
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
    //console.log(this.state.auth)
  }

  refresh = () => {
    setInterval(() => {
      this.getUser()
    }, 10000)
  }

  componentDidMount() {
    this.getUser()
    //this.setState({auth: (firebase.auth().currentUser.displayName)});
    // let thing=firebase.auth();
    // let thing2=firebase.auth().onAuthStateChanged(user=>{
    //   if (user)
    //     this.setState({auth:true});
    //   else
    //     this.setState({auth:false});

    //   console.log(this.state.auth);
    // })
    // console.log(thing);
    // console.log(thing2)
    // console.log(firebase.auth().currentUser);
    // console.log(this.state.auth);
  }

  componentWillUnmount(){

    // this.setState({auth:false});

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
    console.log(this.state.auth)
    if(!this.state.auth) return <Redirect to='/login' />
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
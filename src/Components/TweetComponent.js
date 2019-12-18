import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Inputbox from "./Inputbox";
import GetTweet from "./GetTweets";
import {getTweet,postTweet} from "../api/api.js"
class TweetComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      update:'test',
      tweets:[]
    };
    this.doGet();

  }

  doGet = () =>{

    getTweet().then(res => {
      const tweets = res.data.tweets;
      this.setState({ tweets: tweets });
    });

  }

  handleSubmit = tweet => {
    tweet.userName='J';
    tweet.date = new Date().toISOString();
    console.log(this.state.update);
    /*
    this.setState(prevState => {
      return { tweets: [...prevState.tweets, tweet] };
    });
*/
    //post request here, sending "tweet"
    postTweet(tweet).then(()=>{

      getTweet().then(res => {
        const tweets = res.data.tweets;
        this.setState({ tweets: tweets });
      })
    }
    );
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="tweetbox fluid-container">
          <Inputbox submit={this.handleSubmit}/>

          <GetTweet tweets={this.state.tweets}/>
        </div>
      </div>
    );
  }
}

export default TweetComponent

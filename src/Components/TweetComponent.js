import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Inputbox from "./Inputbox";
import GetTweet from "./GetTweets";
import { getTweet, postTweet } from "../api/api.js";
import Users from "./Users";
class TweetComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      loading: null
    };

    this.doGet();
    console.log(this.state.userName);
  }

  doGet = () => {
    getTweet().then(res => {
      const tweets = res.data.tweets;
      this.setState({ tweets: tweets, loading: false });
    });
  };

  handleSubmit = tweet => {
    tweet.userName = localStorage.getItem('user')
    tweet.date = new Date().toISOString();
    console.log(tweet.userName);

    /*
    this.setState(prevState => {
      return { tweets: [...prevState.tweets, tweet] };
    });
*/
    //post request here, sending "tweet"

    this.setState({ loading: true });
    postTweet(tweet).then(() => {
      getTweet().then(res => {
        const tweets = res.data.tweets;
        this.setState({ tweets: tweets, loading: false });
      });
    });
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="row justify-content-center">
        <div className="tweetbox fluid-container">
          <Inputbox
            submit={this.handleSubmit}
            loading={
              loading && (
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              )
            }
          />

          <GetTweet tweets={this.state.tweets} />
        </div>
      </div>
    );
  }
}

export default TweetComponent;

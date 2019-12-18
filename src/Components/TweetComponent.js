import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Inputbox from "./Inputbox";
import GetTweet from "./GetTweets";
import { getTweet, postTweet } from "../api/api.js";
class TweetComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      update: "test",
      tweets: [],
      loading: null
    };

    this.doGet();
    console.log(this.state.loading);
  }

  doGet = () => {
    getTweet().then(res => {
      const tweets = res.data.tweets;
      this.setState({ tweets: tweets, loading: false });
      console.log(this.state.loading);
    });
  };

  handleSubmit = tweet => {
    tweet.userName = "J";
    tweet.date = new Date().toISOString();
    console.log(this.state.update);

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
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
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

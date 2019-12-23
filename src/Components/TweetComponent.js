import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Inputbox from "./Inputbox";
import GetTweet from "./GetTweets";
import { getTweet, postTweet } from "../api/api.js";
import MyAppContext from "../Context/MyAppContext";
class TweetComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      loading: null,
    };

    this.NewGet();
  }
  NewGet = () => {
    setInterval(() => {
      this.doGet()
      console.log("refreshing");
    }, 10000)
  }

  componentDidMount() {

    this.doGet();

  }

  doGet = () => {

    getTweet().then((res) => {
      const tweets = res.data.tweets;
      this.setState({ tweets: tweets, loading: false });
    },
      (err) => {
        window.alert(err);
      });

  };

  addATweet = (tweet) => {
    tweet.userName = localStorage.getItem('user')
    tweet.date = new Date().toISOString();

    this.setState(
      { tweets: [tweet, ...this.state.tweets] }
    );
    this.handleSubmit(tweet)

  }

  handleSubmit = tweet => {

    this.setState({ loading: true });

    postTweet(tweet).then((res) => {
    },
      (err) => {

        window.alert(err);

      }).then(() => {
        this.setState({ loading: false })
      });
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="row justify-content-center">
        <div className="tweetbox fluid-container">
          <MyAppContext.Provider value={{ tweets: this.state.tweets, addTweet: this.addATweet }}>
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
          </MyAppContext.Provider>
        </div>
      </div>
    );
  }
}

export default TweetComponent;

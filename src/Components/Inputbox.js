import React from "react";
import Users from "./Users";
import { postTweet } from "../api/api";
class Inputbox extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      tweet: {},
      tweets: []
    };
  }

  //substr (0,140)
  handleNameChange(event) {
    this.setState({
      tweet: { content: event.target.value }
    });
    if (event.target.value.length >= 140) {
      return this.setState({
        tweet: { content: event.target.value.slice(0, 140) }
      });
    }
  }

  goSubmit = tweet => {
    this.state.tweet.text = "";

    this.props.submit(tweet);
  };

  render() {
    const { tweet, tweets } = this.state;
    return (
      <>
        <textarea
          type="text"
          value={this.state.tweet.text}
          onChange={this.handleNameChange.bind(this)}
        />

        <button
          className="btn btn-primary tweetbtn"
          type="submit"
          onClick={() => this.props.submit(tweet)}
        >
          Tweet
        </button>
      </>
    );
  }
}

export default Inputbox;

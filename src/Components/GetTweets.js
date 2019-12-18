import React from "react";
import { getTweet, postTweet } from "../api/api";

class GetTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: this.props.tweets
    };
  }
  componentDidMount() {}

  handleGetRequest() {
    return (
      <div className="tweets">
        {this.props.tweets.map(tweet => (
          <div className="tweet">
            {tweet.userName}
            <p>
              {tweet.date}
              <br />
              {tweet.content}
            </p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return <>{this.handleGetRequest()}</>;
  }
}

export default GetTweet;

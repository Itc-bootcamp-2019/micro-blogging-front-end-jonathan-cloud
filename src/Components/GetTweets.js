import React from "react";
import { getTweet, postTweet } from "../api/api";
import MyAppContext from "../Context/MyAppContext";

class GetTweet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: this.props.tweets
    };
  }

  handleGetRequest() {

    return (
      <MyAppContext.Consumer>
        {({ tweetz }) => (
          <div className="tweets">

            {tweetz.map(tweet => (

              <div className="tweet">
                {tweet.userName}
                <p>
                  {tweet.date}
                  <br />
                  {tweet.content}
                </p>
              </div>
            ))}
            {console.log(tweetz)}
          </div>)}
      </MyAppContext.Consumer>
    );
  }

  render() {
    console.log(this.props.tweets)
    return <>{this.handleGetRequest()}</>;
  }
}

export default GetTweet;

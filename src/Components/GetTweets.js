import React from "react";
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
        {({ tweets }) => (
          <div className="tweets">

            {tweets.map(tweet => (

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
          </div>)}
      </MyAppContext.Consumer>
    );
  }

  render() {
    return <>{this.handleGetRequest()}</>;
  }
}

export default GetTweet;

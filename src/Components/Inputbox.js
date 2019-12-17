import React from "react";
import Users from "./Users";

class Inputbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: {},
      tweets: []
    };
  }

  //substr (0,140)
  handleNameChange(event) {
    this.setState({
      tweet: { text: event.target.value }
    });
    if (event.target.value.length >= 140) {
      return this.setState({
        tweet: { text: event.target.value.slice(0, 140) }
      });
    }
  }

  handleSubmit = tweet => {
    tweet.date = new Date();
    this.setState(prevState => {
      return { tweets: [...prevState.tweets, tweet] };
    });

    console.log(tweet.text.length);
    console.dir(tweet);
    console.dir(this.state);
  };

  render() {
    const { tweet, tweets } = this.state;
    return (
      <div className="row justify-content-center">
        <div className="tweetbox fluid-container">
        
          <textarea
            type="text"
            value={this.state.tweet.text}
            onChange={this.handleNameChange.bind(this)}
          />

          <button
            className="btn btn-primary tweetbtn"
            type="submit"
            onClick={() => this.handleSubmit(tweet)}
          >
            Tweet
          </button>
         
          <div className="tweets">
            {tweets.map(tweet => (
              <div className="tweet">
                Jonathan
                <p>
                  {console.dir(tweet)}
                  {tweet.date.toDateString()}
                  <br />
                  {tweet.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Inputbox;

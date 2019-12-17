import React from "react";
import { getTweet } from "../api/api";

class GetTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }
  componentDidMount() {
    getTweet().then(res => {
      const tweets = res.data.tweets;
      this.setState({ tweets: tweets });
      console.log(tweets[0].content);
    });
    console.log(this.state.tweets)
    
  }

  handleGetRequest () {
    
    this.state.tweets.map(tweets => {
     return console.log(tweets.content)
    })
  }

  render() {
    return (
      <ul>
        {this.handleGetRequest()}
        {/* {this.state.tweets.map(tweets => 
        <li>{tweets}</li>
        )} */}
      </ul>
    );
  }
}

export default GetTweet;

import React from "react";
import Users from "./Users";
import { postTweet } from "../api/api";
import MyAppContext from "../Context/MyAppContext";
import GetTweet from "./GetTweets";
import TweetComponent from "./TweetComponent";
class Inputbox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tweet: {},
      tweets: [],
      disabled: false
    };
    this.checkUser()
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
  checkUser =() => {
    let newUser = localStorage.getItem('user')
    if(newUser === "") {

      this.state.tweet.content= "enter a user"
      this.state.disabled= true 
      
    }
    console.log(this.state.disabled)
  }
  goSubmit = tweet => {
    // this.state.tweet.text = "";
    this.setState({ tweet: { content: "" } });
    // this.props.submit(tweet);
  };

  render() {
    const { tweet, tweets } = this.state;
    const submit = (tweet) => {
      tweet.userName = localStorage.getItem('user')
      tweet.date = new Date().toISOString();

      this.setState(
        { tweets: [tweet, ...this.state.tweets] }
      );
    }
    /**
     * function submit(){
     * //in here post the tweet
     * }
     */
    return (


      <>


        <textarea
          type="text"
          value={this.state.tweet.content}
          onChange={this.handleNameChange.bind(this)}
        />
        <MyAppContext.Consumer>
          {({ tweetz, addTweet }) => (
            <button
              className="btn btn-primary tweetbtn"
              type="submit"
              onClick={() => {
                //this.props.submit(tweet);
                // addTweet(tweet)
                addTweet(tweet)
                //instead of addtweet, submit(tweet)
                //and then tweetz.push(tweet);
                tweetz.push(tweet)
                console.log(tweetz)
                this.goSubmit();
              }}
              disabled={this.state.disabled}
            >
              {this.props.loading}
              Tweet
        </button>

          )}

        </MyAppContext.Consumer>

      </>
    );
  }
}

export default Inputbox;

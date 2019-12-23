import React from "react";
import MyAppContext from "../Context/MyAppContext";

class Inputbox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tweet: {},
      tweets: [],
      disabled: false
    };

  }



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

  componentDidMount() {

    this.checkUser();

  }

  checkUser = () => {
    let newUser = localStorage.getItem('user')
    if (!newUser || newUser === "undefined") {
      this.setState({ tweet: { content: 'Make sure to set a profile' }, disabled: true })

    }
  }
  goSubmit = tweet => {

    this.setState({ tweet: { content: "" } });

  };

  render() {
    const { tweet } = this.state;

    return (


      <>


        <textarea
          type="text"
          value={this.state.tweet.content}
          onChange={this.handleNameChange.bind(this)}
        />
        <MyAppContext.Consumer>
          {({ tweets, addTweet }) => (
            <button
              className="btn btn-primary tweetbtn"
              type="submit"
              onClick={() => {

                addTweet(tweet)

                tweets.push(tweet)

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

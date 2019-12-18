import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Inputbox from "./Components/Inputbox";
import Users from "./Components/Users";
import Navbar from "./Components/Navbar";
import GetTweet from './Components/GetTweets';
import TweetComponents from './Components/TweetComponent';






function App() {
  return (
    <div className="App">
        <Navbar />
      <TweetComponents/>
    </div>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Inputbox from "./Components/Inputbox";
import Users from "./Components/Users";
import Navbar from "./Components/Navbar";
import GetTweet from './Components/GetTweets'






function App() {
  return (
    <div className="App">
        <Navbar />
       
      <Inputbox  />
      <GetTweet />

    </div>
  );
}

export default App;

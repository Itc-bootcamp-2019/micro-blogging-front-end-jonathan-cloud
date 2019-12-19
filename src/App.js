import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import TweetComponents from "./Components/TweetComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";
import Users from "./Components/Users";

function App() {
  return (
    <Router>
    <div className="App">
      
        <Navbar />
        <Switch>
          <Route exact path="/home">
            <TweetComponents />
          </Route>
          <Route path="/profile">
            <Users />
          </Route>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;

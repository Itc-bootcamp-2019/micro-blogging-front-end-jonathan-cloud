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
import 'firebase/database'
import FirestoreInfo from "./Components/FirestoreInfo";
import Firestorelogin from './Components/Firestorelogin';




function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <Switch>
          <Route exact path="/">
            <TweetComponents />
          </Route>
          <Route path="/profile">
            <Users />
          </Route>
          <Route path="/Firestore">
            <FirestoreInfo />
          </Route>
          <Route>
            <Firestorelogin />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;

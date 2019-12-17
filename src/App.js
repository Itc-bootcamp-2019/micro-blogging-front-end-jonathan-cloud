import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Inputbox from "./Components/Inputbox";
import Users from "./Components/Users";
import Navbar from "./Components/Navbar";



function App() {
  return (
    <div className="App">
        <Navbar />
        
      <Inputbox  />

    </div>
  );
}

export default App;

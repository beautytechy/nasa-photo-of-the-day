import React from "react";
import "./App.css";
import NasaCard from "../src/NasaCard"
import NasaInfo from "../src/NasaInfo"


function App() {
  return (
    <div className="App">
      <h1>NASA Mars Rover Images</h1>
      <h2> August 1, 2017</h2>
      <NasaInfo />
      
    </div>
  );
}

export default App;

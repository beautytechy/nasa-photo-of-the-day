import React from "react";
import "./App.css";
import NasaCard from "../src/NasaCard"
import NasaInfo from "../src/NasaInfo"


function App() {
  return (
    <div className="App">
      <NasaInfo />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;

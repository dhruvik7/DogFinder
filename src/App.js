import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DogGallery from "./DogGallery/DogGallery";
import Selector from "./DogGallery/Selector";

function App() {
  return (
    <div className="App">
      <Selector />

      <DogGallery />
    </div>
  );
}

export default App;

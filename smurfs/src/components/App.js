import React, { useState } from "react";
import "./App.css";

import { SmurfContext } from "../contexts/SmurfContext";

import Form from "./Form";
import Cards from "./Cards.js";

const App = () => {
  const [smurfs, setSmurfs] = useState([]);

  return (
    <SmurfContext.Provider value={{ smurfs, setSmurfs }}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Create a smurf below!</div>
        <Form />
        <Cards />
      </div>
    </SmurfContext.Provider>
  );
};

export default App;

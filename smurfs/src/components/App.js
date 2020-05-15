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
        <h1>SMURFS! 2.0 W/ Context</h1>
        <div>
          <h2>Create a smurf below!</h2>
        </div>
        <Form />
        <div>
          <h2>Your smurf army!</h2>
        </div>
        <Cards />
      </div>
    </SmurfContext.Provider>
  );
};

export default App;

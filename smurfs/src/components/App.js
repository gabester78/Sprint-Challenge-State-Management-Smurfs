import React, { Component } from "react";
import "./App.css";

import { SmurfContext } from "../contexts/SmurfContext";
import Form from "./components/Form";

class App extends Component {
  render() {
    const [smurf, setSmurf] = useState([]);
    console.log(smurf, "<<<smurf");
    return (
      <SmurfContext.Provider value={{ smurf, setSmurf }}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
        </div>
        <Form />
      </SmurfContext.Provider>
    );
  }
}

export default App;

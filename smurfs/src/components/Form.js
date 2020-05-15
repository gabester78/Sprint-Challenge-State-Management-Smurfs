import React, { useState, useContext } from "react";
import axios from "axios";

import { SmurfContext } from "../contexts/SmurfContext";

const Form = () => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now(),
  });

  const { setSmurfs } = useContext(SmurfContext);

  const postNewCard = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:3333/smurfs`, newSmurf)
      .then((response) => {
        // console.log(response.data)
        setSmurfs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setNewSmurf({
      name: "",
      age: "",
      height: "",
    });
  };

  //   const inputChange = (event) => {
  //     if (event.target.id === "name") {
  //       setNewSmurf({ ...newSmurf, name: event.target.value });
  //     } else if (event.target.id === "age") {
  //       setNewSmurf({ ...newSmurf, age: event.target.value });
  //     }
  //   };

  return (
    <div className="form">
      <form onSubmit={postNewCard}>
        <label htmlFor="name">
          Enter Smurf Name
          <input
            id="name"
            type="text"
            value={newSmurf.name}
            // onChange={inputChange}
            onChange={(event) =>
              setNewSmurf({ ...newSmurf, name: event.target.value })
            }
          />
        </label>
        <label htmlFor="age">
          Enter Smurf Age
          <input
            id="age"
            type="text"
            value={newSmurf.age}
            // onChange={inputChange}
            onChange={(event) =>
              setNewSmurf({ ...newSmurf, age: event.target.value })
            }
          />
        </label>
        <label htmlFor="height">
          Enter Smurf Height
          <input
            id="height"
            type="text"
            value={newSmurf.height}
            onChange={(event) =>
              setNewSmurf({ ...newSmurf, height: event.target.value })
            }
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;

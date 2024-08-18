import React, { useState } from "react";
import "./App.css";

function App() {
  // Defining states
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // Getting data from the user
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  // Calculation logic
  const calculateBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Invalid weight or height. Please enter valid values.");
      return;
    }

    const bmiValue = weight / (height * height); 
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setMessage("You are underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage("You are healthy weight");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage("You are overweight");
    } else {
      setMessage("You are obese");
    }
  };

  const reload = () => {
    window.location.reload();
  };


  return (
    <>
      <div className="container">
        <h2>BMI calculator</h2>
        <form onSubmit={calculateBmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="text"
              placeholder="Enter Weight"
              value={weight}
              onChange={handleWeightChange}
            />
          </div>

          <div>
            <label>Height (feet)</label>
            <input
              type="text"
              placeholder="Enter Height (feet)" 
              value={height}
              onChange={handleHeightChange}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit Now
            </button>
            <button className="btn btn-outline" type="button" onClick={reload}>
              Reload
            </button>
          </div>

          <div>
            <h4>Your BMI is :{bmi}</h4>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;


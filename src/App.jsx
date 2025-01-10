import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputId, newValue) {
    setUserInput((prev) => {
      return { ...prev, [inputId]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {!inputIsValid && <p className="center">Please enter a valid duration</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;

// Importing useState hook from React
import { useState } from "react";

// Importing components
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {

  // State to store all user input values
  const [userInput, setUserInput] = useState({

    // Initial amount invested
    initialInvestment: 10000,

    // Amount added every year
    annualInvestment: 1200,

    // Expected yearly return percentage
    expectedReturn: 6,

    // Investment duration in years
    duration: 10,
  });

  // Checking if duration entered is valid
  const isValidInput = userInput.duration >= 1;

  // Function to handle changes in input fields
  function handleChange(inputIdentifier, newValue) {

    // Updating state based on previous values
    setUserInput(prevUserInput => {
      return {

        // Copy previous input values
        ...prevUserInput,

        // Update only the changed field
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      {/* Header component */}
      <Header />

      {/* User input form component */}
      <UserInput
        onChange={handleChange}
        userInput={userInput}
      />

      {/* Error message if duration is invalid */}
      {!isValidInput && (
        <p className="center">
          Please enter a duration greater than zero.
        </p>
      )}

      {/* Display results only if input is valid */}
      {isValidInput && (
        <Results input={userInput} />
      )}
    </>
  );
}

// Exporting App component
export default App;
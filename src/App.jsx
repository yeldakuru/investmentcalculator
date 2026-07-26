import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Results from './components/Results.jsx'
import { useState } from 'react'
function App() {
  //lifting state up because we want to share the state between UserInput and Results components. The state is managed in the parent component (App) and passed down to the child components as props. This allows for a single source of truth for the user input data, making it easier to manage and update the state across multiple components.

  const [userInput, setUserInput] = useState({
    'initialInvestment': 10000,
    'annualInvestment': 1200,
    'expectedReturn': 6,
    'duration': 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {


      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue //+ string to number conversion
        //state update for the specific input field that changed
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      <Results input={userInput} />
    </>
  );
}

export default App

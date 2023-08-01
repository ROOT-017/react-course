import logo from "./assets/investment-calculator-logo.png";
import React, { useState } from "react";
import InvestmentForm from "./components/form/InvestmentForm";
import Investment from "./components/investments/Investments";

const App = () => {
  const [userInput, setUserInput] = useState({
    currentSavings: 0,
    expectedReturn: 0,
    yearlyContribution: 0,
    duration: 0,
  });
  const [yearlyData, setYearlyData] = useState([]);
  // var yearlyData = [];
  const calculateHandler = (userInput) => {
    setYearlyData([]);
    setUserInput(userInput);
    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      // yearlyData.push({
      //   year: i + 1,
      //   yearlyInterest: yearlyInterest.toFixed(3),
      //   savingsEndOfYear: Number(currentSavings).toFixed(3),
      //   yearlyContribution: yearlyContribution,
      // });
      setYearlyData((prevState) => {
        return [
          ...prevState,
          {
            year: i + 1,
            yearlyInterest: yearlyInterest.toFixed(3),
            savingsEndOfYear: Number(currentSavings).toFixed(3),
            yearlyContribution: yearlyContribution,
          },
        ];
      });
    }
  };

  // if (
  //   userInput.currentSavings ||
  //   userInput.expectedReturn ||
  //   userInput.yearlyContribution ||
  //   userInput.duration
  // ) {
  //   yearlyData = [];
  //   let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
  //   const yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
  //   const expectedReturn = +userInput["expectedReturn"] / 100;
  //   const duration = +userInput["duration"];

  //   for (let i = 0; i < duration; i++) {
  //     const yearlyInterest = currentSavings * expectedReturn;
  //     currentSavings += yearlyInterest + yearlyContribution;
  //     yearlyData.push({
  //       year: i + 1,
  //       yearlyInterest: yearlyInterest.toFixed(3),
  //       savingsEndOfYear: Number(currentSavings).toFixed(3),
  //       yearlyContribution: yearlyContribution,
  //     });
  //   }
  // }

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <InvestmentForm onCalculate={calculateHandler} />
      <Investment
        yearlyData={yearlyData}
        initialInvestment={userInput.currentSavings}
      />
    </div>
  );
};

export default App;

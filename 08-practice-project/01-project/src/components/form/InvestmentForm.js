import React, { useState } from "react";
import style from "./InvestmentForm.module.css";

const initialUserInput = {
  currentSavings: 0,
  expectedReturn: 0,
  yearlyContribution: 0,
  duration: 0,
};

const InvestmentForm = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  const resetForm = () => {
    setUserInput(initialUserInput);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    props.onCalculate(userInput);
  };

  return (
    <form className={style["form"]}>
      <div className={style["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput.currentSavings}
            onChange={(e) =>
              inputChangeHandler("currentSavings", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput.yearlyContribution}
            onChange={(e) =>
              inputChangeHandler("yearlyContribution", e.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
            onChange={(e) =>
              inputChangeHandler("expectedReturn", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(e) => inputChangeHandler("duration", e.target.value)}
          />
        </p>
      </div>
      <p className={style["actions"]}>
        <button type="reset" className={style["buttonAlt"]} onClick={resetForm}>
          Reset
        </button>
        <button
          type="submit"
          onClick={onSubmitHandler}
          className={style["button"]}
        >
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;

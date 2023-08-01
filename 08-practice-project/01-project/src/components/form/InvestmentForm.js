import React, { useState } from "react";
import style from "./InvestmentForm.module.css";

const userInput = {
  currentSavings: 0,
  expectedReturn: 0,
  yearlyContribution: 0,
  duration: 0,
};

const InvestmentForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState(2500);
  const [expectedReturn, setSxpectedReturn] = useState(15);
  const [yearlyContribution, setYearlyContribution] = useState(15700);
  const [duration, setDuration] = useState(8);

  const inputChangeHandler = (title, value) => {
    switch (title) {
      case "current-savings":
        setCurrentSavings(value);
        break;
      case "expected-return":
        setSxpectedReturn(value);
        break;
      case "yearly-contribution":
        setYearlyContribution(value);
        break;
      case "duration":
        setDuration(value);
        break;
      default:
        break;
    }
  };
  const resetForm = () => {
    setCurrentSavings(0);
    setDuration(0);
    setYearlyContribution(0);
    setSxpectedReturn(0);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (
      !currentSavings ||
      !expectedReturn ||
      !yearlyContribution ||
      !duration
    ) {
      console.log("All feild required");
      return;
    }
    userInput.currentSavings = currentSavings;
    userInput.duration = duration;
    userInput.expectedReturn = expectedReturn;
    userInput.yearlyContribution = yearlyContribution;

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
            value={currentSavings}
            onChange={(e) =>
              inputChangeHandler("current-savings", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlyContribution}
            onChange={(e) =>
              inputChangeHandler("yearly-contribution", e.target.value)
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
            value={expectedReturn}
            onChange={(e) =>
              inputChangeHandler("expected-return", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
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

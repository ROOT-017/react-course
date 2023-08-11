import React from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    hasError: inputNameHasError,
    inputBlurHandler: nameInputBlurHandler,
    value: enteredName,
    isValid: inputValueIsValid,
    valueChangedHandler: nameInputChangeHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    hasError: inputEmailHasError,
    inputBlurHandler: emailInputBlurHandler,
    value: enteredEmail,
    isValid: inputEmailValueIsValid,
    valueChangedHandler: emailInputChangeHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@") && value.split("@").length === 2);

  var formIsValid = false;

  if (inputValueIsValid && inputEmailValueIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;
    console.log(enteredName);

    resetNameInput();
    resetEmailInput();
    formIsValid = false;
  };

  const nameInputClasses = inputNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = inputEmailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {inputNameHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {inputEmailHasError && (
          <p className="error-text">Email must be valid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

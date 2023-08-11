import React from "react";
import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    hasError: inputNameHasError,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
    value: enteredName,
    valueChangedHandler: nameChangedHandler,
    isValid: enteredNameIsValid,
  } = useInput((value) => value.trim() !== "");

  const {
    hasError: inputEmailHasError,
    inputBlurHandler: emailInputBlurHandler,
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    valueChangedHandler: emailInputChangeHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@") && value.split("@").length === 2);

  const nameInputError = inputNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = inputEmailHasError
    ? "form-control invalid"
    : "form-control";

  var formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;

    resetName();
    resetEmailInput();
    formIsValid = false;
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputError}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
          />
          {inputNameHasError && (
            <p className="error-text">Name can't be empty</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          value={enteredEmail}
          id="name"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {inputEmailHasError && <p className="error-text">Email is invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

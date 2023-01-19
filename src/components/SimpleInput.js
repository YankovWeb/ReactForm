import useInput from "./hooks/useInput";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValiid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBluerHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBluerHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  let forIsValid = false;
  if (enteredNameIsValiid && enteredEmailIsValid) {
    forIsValid = true;
  }

  const formSubmissionHander = (event) => {
    event.preventDefault();

    if (enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHander}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBluerHandler}
          value={enteredName}
        />
        {nameInputHasError ? (
          <p className="error-text">Name must not be empty.</p>
        ) : null}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBluerHandler}
          value={enteredEmail}
        />
        {emailInputHasError ? (
          <p className="error-text">Email must not be empty.</p>
        ) : null}
      </div>

      <div className="form-actions">
        <button disabled={!forIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

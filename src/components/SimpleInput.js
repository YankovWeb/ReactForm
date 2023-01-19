import {useState} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameIsTouche, setEnteredNameIsTouch] = useState(false);
  const [enteredEmailIsTouche, setEnteredEmailIsTouch] = useState(false);
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouche;

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouche;

  let forIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    forIsValid = true;
  }

  const nameInputChangeHander = (event) => {
    if (event.target.id === "name") {
      setEnteredName(event.target.value);
    } else {
      setEnteredEmail(event.target.value);
      if (!enteredEmail.includes("@")) {
        return setEmailIsInvalid(true);
      }
      setEmailIsInvalid(false);
    }
  };

  const nameOnBlurHandler = (event) => {
    if (event.target.id === "name") {
      setEnteredNameIsTouch(true);
    } else {
      setEnteredEmailIsTouch(true);
    }
  };

  const formSubmissionHander = (event) => {
    event.preventDefault();
    setEnteredEmailIsTouch(true);
    setEnteredNameIsTouch(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameIsTouch(false);
    setEnteredEmailIsTouch(false);
  };

  const nameInputClasses =
    !nameInputIsInvalid && !emailInputIsInvalid
      ? "form-control"
      : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHander}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHander}
          onBlur={nameOnBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid ? (
          <p className="error-text">Name must not be empty.</p>
        ) : null}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={nameInputChangeHander}
          onBlur={nameOnBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid ? (
          <p className="error-text">Email must not be empty.</p>
        ) : null}
        {emailIsInvalid ? (
          <p className="error-text">Email is not valid</p>
        ) : null}
      </div>

      <div className="form-actions">
        <button disabled={!forIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

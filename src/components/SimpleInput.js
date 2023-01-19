import {useState} from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const [enteredNameIsTouche, setEnteredNameIsTouch] = useState(true);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouche;

  const nameInputChangeHander = (event) => {
    setEnteredName(event.target.value);
  };

  const nameOnBlurHandler = (event) => {
    setEnteredNameIsTouch(true);
  };

  const formSubmissionHander = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNameIsTouch(false);
  };

  const nameInputClasses = enteredNameIsValid
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

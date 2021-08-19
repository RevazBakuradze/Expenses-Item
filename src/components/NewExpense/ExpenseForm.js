import react, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // console.log(enteredTitle);

    setUserInput({
      ...userInput,
      enteredTitle: event.target.value
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    // console.log(enteredAmount);

    setUserInput({
      ...userInput,
      enteredAmount: event.target.value
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    // console.log(enteredDate);

    setUserInput({
      ...userInput,
      enteredDate: event.target.value
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <lable>Title</lable>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <lable>Amount</lable>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <lable>Date</lable>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

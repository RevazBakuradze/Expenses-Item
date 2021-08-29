import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  const setIsAddingExpenseTrueHandler = () => {
    setIsAddingExpense(true);
  };

  const setIsAddingExpenseFalseHandler = () => {
    setIsAddingExpense(false);
  };

  if (!isAddingExpense) {
    return (
      <div className="new-expense">
        <button onClick={setIsAddingExpenseTrueHandler}>Add New Expense</button>
      </div>
    );
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
      onSetIsAddingExpenseFalse={setIsAddingExpenseFalseHandler}
       />
    </div>
  );
};

export default NewExpense;

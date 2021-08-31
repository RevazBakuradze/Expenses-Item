import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  const setIsAddingExpenseTrueHandler = () => {
    setIsAddingExpense(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const cancelHandler = (event) => {
    if (event) {
      return (
        <div className="new-expense">
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={cancelHandler}
          />
        </div>
      );
    }
  };

  if (!isAddingExpense) {
    return (
      <div className="new-expense">
        <button onClick={setIsAddingExpenseTrueHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelHandler}
      />
    </div>
  );
};

export default NewExpense;

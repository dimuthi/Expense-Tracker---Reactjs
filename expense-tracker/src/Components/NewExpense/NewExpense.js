import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  const onAddExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: 3,
    };
    console.log("from newexpense form");
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onAddChange={onAddExpenseHandler} />
    </div>
  );
};

export default NewExpense;

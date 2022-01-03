import "./App.css";
import "./Components/ExpenseItem";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Music", amount: 2000, date: new Date(2021, 1, 1) },
  { id: "e2", title: "Shopping", amount: 5000, date: new Date(2019, 1, 1) },
  { id: "e3", title: "Food", amount: 3000, date: new Date(2021, 1, 1) },
  { id: "e4", title: "Utilities", amount: 2000, date: new Date(2021, 1, 1) },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
};

export default App;

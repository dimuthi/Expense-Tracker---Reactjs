import "./App.css";
import "./Components/ExpenseItem";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Music", amount: 2000, date: new Date(2021, 1, 1) },
    { title: "Shopping", amount: 5000, date: new Date(2021, 1, 1) },
    { title: "Food", amount: 3000, date: new Date(2021, 1, 1) },
    { title: "Utilities", amount: 2000, date: new Date(2021, 1, 1) },
  ];
  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;

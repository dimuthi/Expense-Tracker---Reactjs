import "./App.css";
import "./Components/ExpenseItem";
import Expenses from "./Components/Expenses";

function App() {
  const expenses = [
    { title: "Music", amount: 2000, date: new Date(2021, 1, 1) },
    { title: "Shopping", amount: 5000, date: new Date(2021, 1, 1) },
    { title: "Food", amount: 3000, date: new Date(2021, 1, 1) },
    { title: "Utilities", amount: 2000, date: new Date(2021, 1, 1) },
  ];
  return (
    <div>
      <h1 align="center">Expenses Tracker</h1>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;

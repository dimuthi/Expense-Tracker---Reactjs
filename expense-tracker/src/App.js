import "./App.css";
import "./Components/ExpenseItem";
import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const items = [
    { title: "Music", amount: 2000, date: new Date(2021, 1, 1) },
    { title: "Shopping", amount: 5000, date: new Date(2021, 1, 1) },
    { title: "Food", amount: 3000, date: new Date(2021, 1, 1) },
    { title: "Utilities", amount: 2000, date: new Date(2021, 1, 1) },
  ];
  return (
    <div>
      <h1>Getting Started</h1>
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
  //   const expenseDate = new Date(2021, 1, 1);
  //   const expenseTitle = "car expense";
  //   const expenseAmount = 2000;
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">LKR{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

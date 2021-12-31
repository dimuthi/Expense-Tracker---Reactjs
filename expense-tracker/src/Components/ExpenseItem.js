import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  //   const expenseDate = new Date(2021, 1, 1);
  //   const expenseTitle = "car expense";
  //   const expenseAmount = 2000;
  const clickHandler=()=>  {
    setTitle("Electricity");
  }
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">LKR{props.amount}</div>
        <button onClick={clickHandler}>Update</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;

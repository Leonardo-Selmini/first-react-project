import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import { useState } from "react";

import "./../../css/components-css/ExpenseItem.css";

export default ExpenseItem;

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate year={props.year} month={props.month} day={props.day} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">€{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Update</button>
    </Card>
  );
}

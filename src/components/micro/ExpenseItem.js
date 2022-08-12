import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

import "./../../css/components-css/ExpenseItem.css";

export default ExpenseItem;

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate year={props.year} month={props.month} day={props.day} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">€{props.amount}</div>
      </div>
    </Card>
  );
}

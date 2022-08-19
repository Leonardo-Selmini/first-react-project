import { useState } from "react";

import "./../../css/components-css/ExpenseForm.css";

export default ExpenseForm;

function ExpenseForm(props) {
  const [titleVal, setTitleVal] = useState("");
  const titleChangeHandler = (event) => {
    setTitleVal(event.target.value);
  };

  const [amountVal, setAmountVal] = useState("");
  const amountChangeHandler = (event) => {
    setAmountVal(event.target.value);
  };

  const [dateVal, setDateVal] = useState("");
  const dateChangeHandler = (event) => {
    setDateVal(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const newExpenseData = {
      title: titleVal,
      amount: amountVal,
      date: new Date(dateVal),
    };

    props.onAddExpense(newExpenseData);

    setTitleVal("");
    setAmountVal("");
    setDateVal("");
  };

  const [isClosed, setIsClosed] = useState(true);

  const toggleModalClickHandler = () => {
    setIsClosed((prev) => {
      return !prev;
    });
    // console.log(isClosed);
  };

  if (isClosed) {
    return <button onClick={toggleModalClickHandler}>Add new expense</button>;
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleVal} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amountVal}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={dateVal}
            min="2019-01-01"
            onChange={dateChangeHandler}
          />
        </div>
        <button onClick={toggleModalClickHandler}>Cancel</button>
        <button type="submit" onClick={toggleModalClickHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
}

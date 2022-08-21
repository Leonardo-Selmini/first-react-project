import Card from "./micro/Card";
import ExpenseChart from "./micro/ExpensesChart";
import ExpensesFilter from "./micro/ExpensesFilter";
import ExpenseItem from "./micro/ExpenseItem";
import NewExpense from "./micro/NewExpense";
import Spline from "@splinetool/react-spline";

import { useState } from "react";

import "./../css/App.css";

function App() {
  const expensesDummy = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 3, 26),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(expensesDummy);

  const newExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  const [yearFilter, setYearFilter] = useState("2020");
  const saveYearFilter = (year) => {
    setYearFilter(year.target.value);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === yearFilter
  );

  let contentToRender = (
    <div>
      <p>No expenses found.</p>
    </div>
  );

  if (filteredExpenses.length > 0) {
    contentToRender = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        year={expense.date.getFullYear()}
        day={expense.date.toLocaleString("en-US", { day: "2-digit" })}
        month={expense.date.toLocaleString("en-US", { month: "long" })}
        amount={expense.amount}
      />
    ));
  }

  return (
    <Card className="expenses">
      <Spline scene="https://prod.spline.design/HyW0AxJZPTasOTp1/scene.splinecode" />
      <NewExpense onAddExpense={newExpense} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesFilter value={yearFilter} onYearSelect={saveYearFilter} />
      {contentToRender}
    </Card>
  );
}

export default App;

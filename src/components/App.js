import "./../css/App.css";

import ExpenseItem from "./micro/ExpenseItem";
import Card from "./micro/Card";
import NewExpense from "./micro/NewExpense";

function App() {
  const expenses = [
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

  return (
    <Card className="expenses">
      <NewExpense />
      <ExpenseItem
        title={expenses[0].title}
        year={expenses[0].date.getFullYear()}
        day={expenses[0].date.getDay()}
        month={expenses[0].date.toLocaleString("en-US", { month: "long" })}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        year={expenses[1].date.getFullYear()}
        day={expenses[1].date.getDay()}
        month={expenses[1].date.toLocaleString("en-US", { month: "long" })}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        title={expenses[2].title}
        year={expenses[2].date.getFullYear()}
        day={expenses[2].date.getDay()}
        month={expenses[2].date.toLocaleString("en-US", { month: "long" })}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        title={expenses[3].title}
        year={expenses[3].date.getFullYear()}
        day={expenses[3].date.getDay()}
        month={expenses[3].date.toLocaleString("en-US", { month: "long" })}
        amount={expenses[3].amount}
      />
    </Card>
  );
}

export default App;

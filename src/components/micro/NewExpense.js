import ExpenseForm from "./ExpenseForm";

import "./../../css/components-css/NewExpense.css";

export default NewExpense;

function NewExpense(props) {
  const onAddExpenseHandler = (expense) => {
    const expenseData = {
      id: "e5",
      ...expense,
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={onAddExpenseHandler} />
    </div>
  );
}

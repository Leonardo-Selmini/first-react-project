import ExpenseForm from "./ExpenseForm";

import "./../../css/components-css/NewExpense.css";

export default NewExpense;

function NewExpense() {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}

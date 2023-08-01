import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0)
    return <h1 className="expenses-list__fallback">No Expenses Found</h1>;

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => {
        return <ExpenseItem expense={expense} key={expense.id} />;
      })}
    </ul>
  );
};

export default ExpensesList;

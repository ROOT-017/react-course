import React, { useState } from "react";
import Expenses from "./components/expenses/Expense";
import NewExpense from "./components/newExpense/NewExpense";

const App = () => {
  const INITIAL_EXPENSES = [
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
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpensive) => {
      return [newExpense, ...prevExpensive];
    });
  };
  let date = new Set();
  expenses.map((expenses) => date.add(expenses.date.getFullYear().toString()));
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} dates={Array.from(date).sort()} />
    </div>
  );
};

export default App;

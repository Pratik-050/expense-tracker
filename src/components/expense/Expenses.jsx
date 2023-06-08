import { useState } from "react";
import Card from "../Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = (
    <p className="text-xl text-center font-bold">No Expenses found</p>
  );

  if (filteredExpenses.length > 0) {
    expenseContent = (
      <div>
        {filteredExpenses.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            date={expenses.date}
            amount={expenses.amount}
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <Card>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        {expenseContent}
      </Card>
    </div>
  );
}

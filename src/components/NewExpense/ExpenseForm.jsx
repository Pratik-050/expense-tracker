import Card from "../Card";
import { useState } from "react";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <Card className="p-4 mb-4">
        <div>
          <label className="font-bold">Title: </label>
          <input
            type="text"
            className="border-2 border-black rounded-lg  focus:border-green-400 my-4 p-1"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="flex justify-between">
          <div>
            <label className="font-bold">amount: </label>
            <input
              type="number"
              min="0"
              max="100000"
              className="border-2 border-black rounded-lg my-4 p-1"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
        </div>
        <div>
          <label className="font-bold">date: </label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-12"
            className="border-2 border-black rounded-lg my-4 p-1
          "
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
        <button
          type="submit"
          className=" bg-blue-700 text-white my-2 p-2 rounded-lg"
        >
          new Expense
        </button>
      </Card>
    </form>
  );
}

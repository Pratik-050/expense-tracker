import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  return (
    <>
      <div className="flex p-4 w-[90%] mx-auto border bg-white shadow-lg rounded-lg m-2">
        <ExpenseDate date={props.date} />
        <h1 className="font-bold text-3xl my-auto">{props.title}</h1>
        <div className="ml-auto border bg-blue-400 text-white flex font-semibold px-6 rounded-lg justify-center items-center">
          {props.amount}$
        </div>
      </div>
    </>
  );
}

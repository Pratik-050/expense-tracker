export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="mx-2 border border-blue-500 text-center rounded-lg p-2 font-semibold text-gray-400">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

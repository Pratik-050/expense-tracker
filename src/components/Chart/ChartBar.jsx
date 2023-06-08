import "./ChartBar.css";

export default function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chartBar">
      <div className="chartBarInner">
        <div className="chartBarFill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chartLabel">{props.label}</div>
    </div>
  );
}

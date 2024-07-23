export default function ResetButton({ btnText, resetMethod }) {
  return (
    <button className="resetButton" onClick={resetMethod}>
      {btnText}
    </button>
  );
}

export default function ButtonComp({ btnText, method }) {
  return (
    <button className="createButton" onClick={method}>
      {btnText}
    </button>
  );
}

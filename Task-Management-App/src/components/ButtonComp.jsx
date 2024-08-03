export default function ButtonComp({ btnText, method, children }) {
  return (
    <button className="createButton" onClick={method}>
      {children}
      {btnText}
    </button>
  );
}

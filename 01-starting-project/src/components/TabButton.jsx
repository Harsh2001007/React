export default function TabButton({ children, method }) {
  return (
    <li>
      <button onClick={method}>{children}</button>
    </li>
  );
}

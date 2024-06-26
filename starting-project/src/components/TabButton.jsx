export default function TabButton({ children, method, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : null} onClick={method}>
        {children}
      </button>
    </li>
  );
}

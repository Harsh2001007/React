export default function TabButton({ children, method, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={method}>
        {children}
      </button>
    </li>
  );
}

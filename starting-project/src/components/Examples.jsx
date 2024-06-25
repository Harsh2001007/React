export default function Examples({ children, method, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : null} onClick={method}>
        {children}
      </button>
    </li>
  );
}

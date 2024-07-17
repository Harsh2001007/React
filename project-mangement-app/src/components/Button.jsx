export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 md:text-base rounded-md text-stone-400 bg-stone-700 text-xs hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}

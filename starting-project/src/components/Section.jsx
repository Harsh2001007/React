export default function Section({ title, children, ...parentProps }) {
  return (
    <section {...parentProps}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

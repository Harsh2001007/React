import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h2>This is primary homePage</h2>
      <p>
        click on this link -<Link to="/products">links</Link>
      </p>
    </div>
  );
}

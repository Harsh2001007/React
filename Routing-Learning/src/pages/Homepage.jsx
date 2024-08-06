import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  function navigationHandler() {
    navigate("/products");
  }
  return (
    <>
      <div>My official homepage</div>
      <p>
        To navigate to product page <Link to="/products">click here</Link>
      </p>
      <button onClick={navigationHandler}>navigate</button>
    </>
  );
}

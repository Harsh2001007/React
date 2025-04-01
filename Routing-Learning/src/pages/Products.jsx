import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 1, link: "Product1" },
  { id: 2, link: "Product2" },
  { id: 3, link: "Product3" },
];

export default function Products() {
  return (
    <>
      <h1>This is product page ...</h1>
      <div>
        <ul>
          {PRODUCTS.map((item) => (
            <li key={item.id}>
              <Link to={`/products/${item.link}`}>{item.link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

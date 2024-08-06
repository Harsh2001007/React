import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Link } from "react-router-dom";

export default function Errorpage() {
  return (
    <>
      <MainNavigation />
      <h2>Error occured : 404 page not found</h2>
      <p>
        Go to <Link to="/">Homepage</Link>
      </p>
    </>
  );
}

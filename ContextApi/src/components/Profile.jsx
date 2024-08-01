import React from "react";
import { useContext } from "react";
import GlobalDemoContext from "../context/DemoContext";

function Profile() {
  const { user } = useContext(GlobalDemoContext);

  if (!user) return <div>plz login</div>;

  return <div>Welcome! {user.username}</div>;
}

export default Profile;

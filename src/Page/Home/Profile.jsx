import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";

const Profile = () => {
  const { user } = use(AuthContext);
  return <div>Name: {user}</div>;
};

export default Profile;

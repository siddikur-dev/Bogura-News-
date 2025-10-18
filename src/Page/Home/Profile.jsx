import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";

const Profile = () => {
  const user = use(AuthContext);
  console.log(user);
  return <div>Profile</div>;
};

export default Profile;

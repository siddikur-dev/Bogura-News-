import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import userImg from "../../assets/user.png";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 text-secondary">
      {user ? (
        <div className="bg-base-200 rounded-xl p-6 text-center shadow-md w-80">
          <img
            src={user.photoURL || userImg}
            alt={user.displayName}
            className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-base-300 mx-auto"
          />
          <h2 className="text-primary text-xl font-semibold mb-1">
          name:   {user.displayName || "No Name Found"}
          </h2>
          <p className="text-secondary text-sm">
            email: {user.email || "No Email Available"}
          </p>
          <p className="text-secondary text-sm">
            Verification: {user.emailVerified ? "Verified" : "UnVerified"}
          </p>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default Profile;

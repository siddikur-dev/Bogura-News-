import React, { use, useState } from "react";
import { Link } from "react-router";
import AuthNavbar from "../../Components/AuthNavbar";
import { AuthContext } from "../../Provider/AuthContext";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const Register = () => {
  // if user create successfully then showing this message
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //import authProvider userData
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Reset error and success messages
    setError("");
    setSuccess("");

    // Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      setError("Password must contain at least one special character");
      return;
    }

    // Here you can add your registration logic

    createUser(email, password)
      .then((result) => {
        // name and photo adjust to make object
        const userProfile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(result.user, userProfile)
          .then(() => {
            setSuccess("Successfully User Created.");
          })
          .catch((error) => {
            setError(error.message);
          });

        // send email verification
        sendEmailVerification(result.user).then(() => {
          alert("email verification send");
        });
      })
      .catch((error) => {
        setError(error.message);
      });
    form.reset();
  };

  return (
    <div>
      <AuthNavbar></AuthNavbar>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Register
          </h2>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter photo URL"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>

            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
            )}
            {success && (
              <p className="text-green-500 text-sm mt-2 text-center">
                {success}
              </p>
            )}

            <p className="text-center text-gray-600 text-sm mt-4">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-primary underline">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

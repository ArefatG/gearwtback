import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, signUpWithGoogle } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state for submit button
  const [loginSuccess, setLoginSuccess] = useState(false); // State to manage login success

  // Redirecting to home page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    setLoading(true); // Set loading to true while submitting
    login(email, password)
      .then((result) => {
        const user = result.user;
        setLoginSuccess(true); // Set login success to true
        setTimeout(() => {
          document.getElementById("my_modal_5").close(); // Close modal after 2 seconds
          navigate(from, { replace: true });
        }, 2000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage("Provide a correct email and password");
      })
      .finally(() => {
        setLoading(false); // Set loading back to false after submit completes
      });
  };

  // Google sign in
  const handleGoogleLogin = () => {
    setLoading(true); // Set loading to true while submitting
    signUpWithGoogle()
      .then((result) => {
        const user = result.user;
        setLoginSuccess(true); // Set login success to true
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2000);
      })
      .catch((error) => console.error("Error signing in with Google:", error))
      .finally(() => {
        setLoading(false); // Set loading back to false after submit completes
      });
  };

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
            <h3 className="font-bold text-lg">Please Log In!</h3>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" {...register("email")} />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" {...register("password")} />
              <label className="label mt-1">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* error */}
            {errorMessage && <p className="text-red text-xs italic">{errorMessage}</p>}

            {/* login btn */}
            <div className="form-control mt-6">
              <input type="submit" value={loading ? "Logging In..." : "Login"} className="btn bg-deepblue text-white" disabled={loading} />
            </div>
            <p className="text-center my-2">
              Don't have an Account?{" "}
              <Link to="/signup" className="underline text-orange ml-1">
                Signup Now
              </Link>{" "}
            </p>
            <button
              htmlFor="my_modal_5"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          {/* social signin */}
          <div className="text-center space-x-3 mb-5">
            <button className="btn btn-circle hover:bg-deepblue hover:text-white" onClick={handleGoogleLogin}>
              <FaGoogle />
            </button>
            {/* Add other social login buttons here */}
          </div>
        </div>
      </div>
      {/* Close modal if login is successful */}
      {loginSuccess && (
        <script>{`document.getElementById("my_modal_5").close();`}</script>
      )}
    </dialog>
  );
};

export default Modal;
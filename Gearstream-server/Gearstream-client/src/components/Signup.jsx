import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";
import Modal from "./Modal";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      await createUser(email, password);
      alert("Account Created Successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      alert(error.message); // Displaying error message
    }
  };

  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
      <div className="modal-action flex flex-col justify-center mt-0">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h3 className="font-bold text-lg">Create Account</h3>

          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>

          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>

          {/* login btn */}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Signup"
              className="btn bg-deepblue text-white"
            />
          </div>
          <p className="text-center my-2">
            Already have an Account?{" "}
            <Link
              onClick={() => 
                navigate(from, { replace: true }),
                document.getElementById("my_modal_5").showModal()
              
            
            }
              
              className="underline text-orange ml-1"
            >
              Login
            </Link>{" "}
            <Modal />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
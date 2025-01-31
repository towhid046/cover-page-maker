import { useForm } from "react-hook-form";
import Button from "../../../components/shared/Button/Button";
import useAuth from "./../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const commonInputClassName =
  "py-2 px-3 border border-blue-400 rounded-md focus:outline-none transition duration-300";
const inputParentClassName = "flex flex-col gap-1 mb-3 ";

const RegisterForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // Handle form submission
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await createUser(data?.email, data?.password);
      await updateUserProfile(data?.name);
      toast.success("Login success!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name */}
      <div className={inputParentClassName}>
        <label>Name:</label>
        <input
          {...register("name")}
          required
          type="text"
          placeholder="Your Name"
          className={commonInputClassName}
        />
      </div>

      {/* Email */}
      <div className={inputParentClassName}>
        <label>Email:</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Entered value does not match email format",
            },
          })}
          type="email"
          placeholder="Your Email"
          className={commonInputClassName}
          required
        />
        {errors?.email && (
          <span className="text-red-500">{errors?.email.message}</span>
        )}
      </div>

      {/* Password */}
      <div className={inputParentClassName}>
        <label>Password:</label>
        <input
          {...register("password")}
          required
          type="password"
          placeholder="Password"
          className={commonInputClassName}
        />
      </div>

      {/* Submit Button */}
      <div>
        <Button customClass="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-300">
          {isLoading ? "Registering..." : "Register"}
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;

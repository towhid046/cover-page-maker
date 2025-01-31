import { useForm } from "react-hook-form";
import Button from "./../../../components/shared/Button/Button";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import Reveal from "./../../../components/shared/Reveal/Reveal";

const commonInputClassName =
  "py-2 px-3 border border-blue-400 rounded-md focus:outline-none transition duration-300";
const inputParentClassName = "flex flex-col gap-1  mb-4 ";

const Feedback = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/send-email`,
        data
      );
      if (res?.status === 200) {
        toast.success("Thanks for you feedback!!");
        reset();
      }
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="my-12 py-8 lg:px-6 px-2 bg-gray-100 rounded-lg">
      <Reveal>
        <h2 className="lg:text-4xl text-center text-3xl font-bold font-roboto text-gray-800 lg:mb-6 mb-4">
          Send Us Your Feedback
        </h2>
        <div className="flex flex-col-reverse md:flex-row justify-center gap-6">
          {/* Left Section */}
          <div className="w-full md:w-1/2 px-4 py-8 bg-white rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Your Feedback is Important to Us!
            </h2>
            <p className="text-gray-600 mb-4">
              We're eager to hear your feedback. Whether it's a suggestion,
              thought, or concern, please share it with us. Your input helps us
              improve our services.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Share your experiences and suggestions.</li>
              <li>Let us know how we can improve.</li>
              <li>Expect a response within 24-48 hours.</li>
            </ul>
          </div>

          {/* Right Section - Feedback Form */}
          <div className="w-full md:w-1/2 px-4 py-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <div className={inputParentClassName}>
                <label>Name:</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Your Name"
                  className={commonInputClassName}
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
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
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>

              {/* Message */}
              <div className={inputParentClassName}>
                <label>Message:</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows="3"
                  placeholder="Your Message"
                  className={commonInputClassName}
                />
                {errors.message && (
                  <span className="text-red-500">{errors.message.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <Button customClass="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                  {isLoading ? "Sending..." : "Send Feedback"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Feedback;

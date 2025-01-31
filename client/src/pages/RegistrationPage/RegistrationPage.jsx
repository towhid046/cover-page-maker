import { Link } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import RegisterForm from "./RegisterForm/RegisterForm";
import SocialLogin from "./../LoginPage/SocialLogin/SocialLogin";
import Reveal from "./../../components/shared/Reveal/Reveal";

const RegistrationPage = () => {
  useScrollToTop();

  return (
    <section className="flex items-center container mx-auto justify-center min-h-screen text-gray-700 p-4">
      <div className="flex rounded-xl bg-gray-100 flex-col lg:flex-row lg:gap-12 gap-6 lg:py-20 py-12 lg:px-16 px-6 ">
        <div className="flex-1 flex  flex-col lg:space-y-7 space-y-3">
          <Reveal>
            <div className="">
              <Link
                to="/"
                className="font-titillium md:text-5xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              >
                CPG
              </Link>
              <h2 className="text-gray-700 lg:text-4xl text-3xl font-titillium font-bold">
                Register Now!
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus veniam iure rem ipsum dolorum earum rerum tenetur
              pariatur eum eos totam, neque libero? Nobis molestias eum quam
              soluta nesciunt unde?
            </p>
          </Reveal>
          <Reveal>
            <p>
              Already Register ?{" "}
              <Link
                to={"/login"}
                className="text-blue-500 hover:text-blue-600 transition duration-300 underline"
              >
                Login
              </Link>
            </p>
          </Reveal>
        </div>

        <div className="flex-1">
          <Reveal>
            <div className="w-full  rounded-lg">
              <RegisterForm />
              <SocialLogin />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;

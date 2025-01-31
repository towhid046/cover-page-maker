import Button from "../../components/shared/Button/Button";
import { Link } from "react-router-dom";
import useScrollToTop from "./../../hooks/useScrollToTop";
import TutorialsPage from "./../TutorialsPage/TutorialsPage";
import Reveal from "../../components/shared/Reveal/Reveal";

const HomePage = () => {
  useScrollToTop();
  return (
    <>
      <div className="mx-auto px-4 flex flex-col items-center justify-center  min-h-[90vh] bg-white text-gray-800 text-center">
        <Reveal>
          <div className="lg:mb-8 mb-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Welcome to CoverPage Generator
            </h1>
            <p className="text-lg md:text-2xl text-gray-600">
              Create beautiful single or group cover pages with ease, and
              download them as PDFs.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 mx-auto w-full max-w-lg">
            <Link to={"/single"}>
              <Button customClass="text-lg md:py-3 py-2 md:px-6 px-4 shadow-lg ">
                Single Cover Page
              </Button>
            </Link>
            <Link to={"/group"}>
              <Button customClass="text-lg md:py-3 py-2 md:px-6 px-4 shadow-lg">
                Group Cover Page
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
      <TutorialsPage />
    </>
  );
};

export default HomePage;

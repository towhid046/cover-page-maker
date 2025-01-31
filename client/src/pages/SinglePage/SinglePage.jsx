import "./../../../src/index.css";
import useScrollToTop from "../../hooks/useScrollToTop";
import { useState } from "react";
import Form from "../../components/Form";
import img1st from "./../../assets/img/display-pages/1st.jpg";
import img2nd from "./../../assets/img/display-pages/2nd.jpg";
import img3rd from "./../../assets/img/display-pages/3rd.jpg";
import img4th from "./../../assets/img/display-pages/4th.jpg";
import img5th from "./../../assets/img/display-pages/5th.jpg";
import img6th from "./../../assets/img/display-pages/6th.jpg";
import useAuth from "./../../hooks/useAuth";
import Button from "./../../components/shared/Button/Button";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Reveal from "./../../components/shared/Reveal/Reveal";
import PageHeader from "./../../components/shared/PageHeader/PageHeader";

const SinglePage = () => {
  useScrollToTop();
  const [isClicked, setIsClicked] = useState(false);
  const [pageId, setPageId] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const imgs = [img1st, img2nd, img3rd, img4th, img5th, img6th];

  function scrollToTop() {
    window.scrollTo({
      top: document.body.scrollTop,
      behavior: "smooth",
    });
  }

  const appearPageClickHandler = (index) => {
    setPageId(index);

    setTimeout(() => {
      setIsClicked(true);
      scrollToTop();
    }, 200);
  };

  const handleGetMore = () => {
    swal({
      title: "Wanna Get More?",
      text: "To get more templates you need to login!",
      icon: "info",
      buttons: {
        cancel: "Cancel",
        confirm: "Yes, login",
      },
    }).then((login) => {
      if (login) {
        navigate("/login");
      }
    });
  };

  return (
    <>
      <PageHeader isClicked={isClicked} />
      <section className="pb-10 container mx-auto px-4">
        <div>
          {isClicked ? (
            <Form pageId={pageId} />
          ) : (
            <>
              <div className="grid xl:grid-cols-3 gap-4  grid-cols-1 lg:grid-cols-2">
                {imgs?.map((img, index) => (
                  <Reveal key={index}>
                    <div className="relative group border border-gray-300 overflow-hidden">
                      {/* Image with reduced blur effect */}
                      <img
                        title="Click to make this cover page"
                        className={`transition duration-300 ease-in-out cursor-pointer filter blur-[0.5px] group-hover:blur-0 lg:group-hover:blur-0 lg:group-hover:scale-105 transform`}
                        onClick={() => appearPageClickHandler(index)}
                        src={img}
                        alt="Choose page"
                      />

                      {/* Overlay with title and button */}
                      <div
                        onClick={() => appearPageClickHandler(index)}
                        className="absolute inset-0 lg:flex hidden cursor-pointer flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"
                      >
                        <h3 className="text-white text-xl font-semibold mb-4">
                          To make this cover page
                        </h3>
                        <Button
                          clickHandler={() => appearPageClickHandler(index)}
                        >
                          Click Here
                        </Button>
                      </div>

                      {/* Overlay for smaller screens */}
                      <div
                        onClick={() => appearPageClickHandler(index)}
                        className="absolute inset-0 flex lg:hidden flex-col cursor-pointer justify-center items-center bg-black bg-opacity-50 opacity-100 transition duration-500 ease-in-out"
                      >
                        <h3 className="text-white text-xl font-semibold mb-4">
                          To make this cover page
                        </h3>
                        <Button
                          clickHandler={() => appearPageClickHandler(index)}
                        >
                          Click Here
                        </Button>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="text-center lg:pt-10 pt-8">
                {user ? (
                  <h2 className="text-2xl italic font-semibold text-gray-400">
                    More templates coming soon...
                  </h2>
                ) : (
                  <Button clickHandler={handleGetMore}>Get More</Button>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default SinglePage;

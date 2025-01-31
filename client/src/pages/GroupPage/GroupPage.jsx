import useScrollToTop from "./../../hooks/useScrollToTop";
import groupPage1 from "../../assets/img/display-pages/group_page_1.jpg";
// import img2nd from "../../assets/img/display-pages/2nd.jpg";
// import img3rd from "../../assets/img/display-pages/3rd.jpg";
import { useState } from "react";
import { GroupForm } from "./../../components/unique/GroupForm/GroupForm";
import Reveal from "./../../components/shared/Reveal/Reveal";
import PageHeader from "./../../components/shared/PageHeader/PageHeader";
import Button from "../../components/shared/Button/Button";

const GroupPage = () => {
  useScrollToTop();
  const [isClicked, setIsClicked] = useState(false);
  // const [pageId, setPageId] = useState(null);
  // const imgs = [img1st, img2nd, img3rd,];

  function scrollToTop() {
    window.scrollTo({
      top: document.body.scrollTop,
      behavior: "smooth",
    });
  }

  const appearPageClickHandler = () => {
    // setPageId(index);

    setTimeout(() => {
      setIsClicked(true);
      scrollToTop();
    }, 200);
  };

  return (
    <>
      <PageHeader isClicked={isClicked} />
      <section className="pb-10 container mx-auto px-4">
        {isClicked ? (
          <GroupForm />
        ) : (
          <div className="grid md:grid-cols-3 gap-4  grid-cols-1">
            <div></div>
            <Reveal>
              <div className="relative group border border-gray-300 overflow-hidden">
                {/* Image with reduced blur effect */}
                <img
                  title="Click to make this cover page"
                  className={`transition duration-500 cursor-pointer ease-in-out filter blur-[0.5px] group-hover:blur-0 lg:group-hover:blur-0 lg:group-hover:scale-105 transform`}
                  onClick={appearPageClickHandler}
                  src={groupPage1}
                  alt="Choose page"
                />

                {/* Overlay with title and button for larger screens */}
                <div
                  onClick={appearPageClickHandler}
                  className="absolute inset-0 cursor-pointer lg:flex hidden flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"
                >
                  <h3 className="text-white text-xl font-semibold mb-4">
                    To make this cover page
                  </h3>
                  <Button clickHandler={appearPageClickHandler}>
                    Click Here
                  </Button>
                </div>

                {/* Overlay for smaller screens */}
                <div
                  onClick={appearPageClickHandler}
                  className="absolute inset-0 cursor-pointer flex lg:hidden flex-col justify-center items-center bg-black bg-opacity-50 opacity-100 transition duration-500 ease-in-out"
                >
                  <h3 className="text-white text-xl font-semibold mb-4">
                    To make this cover page
                  </h3>
                  <Button clickHandler={appearPageClickHandler}>
                    Click Here
                  </Button>
                </div>
              </div>
            </Reveal>

            <div></div>
          </div>
        )}
      </section>
    </>
  );
};
export default GroupPage;

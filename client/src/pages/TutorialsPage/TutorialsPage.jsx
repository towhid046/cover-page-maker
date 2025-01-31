import useScrollToTop from "./../../hooks/useScrollToTop";
import Tutorial from "./Tutorial/Tutorial";
import Feedback from "./Feedback/Feedback";

const singlePageSteps = [
  {
    id: 2,
    title: "Select the 'Single Cover Page' Option from the 'Home' page",
    description: "Click on the 'Single Cover Page' button on the homepage.",
  },
  {
    id: 3,
    title: "Choose a Template",
    description:
      "Browse through the available cover page templates and pick one that best suits your needs.",
  },
  {
    id: 4,
    title: "Fill in the Form",
    description:
      "Enter the required details such as title, subtitle, author name, and other relevant fields.",
  },
  {
    id: 5,
    title: "Click on the Generate Button",
    description:
      "Once all fields are filled, hit the 'Generate' button to create your cover page.",
  },
  {
    id: 6,
    title: "Preview and Download",
    description:
      "Preview the generated cover page and if you're satisfied, click the 'Download as PDF' button to save it to your device.",
  },
];

const groupPageSteps = [
  {
    id: 2,
    title: "Select the 'Group Cover Page' Option from the 'Home' page",
    description: "Click on the 'Group Cover Page' button on the homepage.",
  },
  {
    id: 3,
    title: "Choose a Template",
    description:
      "Browse through the available cover page templates and pick one that best suits your needs.",
  },
  {
    id: 4,
    title: "Fill in the Form",
    description:
      "Enter the required details such as title, subtitle, author name, and other relevant fields.",
  },
  {
    id: 5,
    title: "Click on the Generate Button",
    description:
      "Once all fields are filled, hit the 'Generate' button to create group cover page.",
  },
  {
    id: 6,
    title: "Preview and Download",
    description:
      "Preview the generated cover page and if you're satisfied, click the 'Download as PDF' button to save it to your device.",
  },
];

const TutorialsPage = () => {
  useScrollToTop();
  return (
    <div className="container mx-auto px-4 lg:py-10 py-5 lg:space-y-12 space-y-6">
      <Tutorial
        title="How to Generate a Single Cover Page?"
        steps={singlePageSteps}
        videoId="r9WNlxEsNDo"
      />

      <Tutorial
        title="How to Generate a Group Cover Page?"
        steps={groupPageSteps}
        videoId="whlWA5Xa0q4"
      />
      <Feedback />
    </div>
  );
};

export default TutorialsPage;

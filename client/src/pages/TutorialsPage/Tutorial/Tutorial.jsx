import YouTubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import Reveal from "./../../../components/shared/Reveal/Reveal";

const Tutorial = ({ title, steps, videoId }) => {
  return (
    <section>
      <Reveal>
        <h2 className="lg:text-4xl text-3xl font-bold font-roboto text-gray-800 lg:mb-6 mb-4">
          {title}
        </h2>
        <div className="flex lg:gap-6 flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700">
              {steps?.map((step) => (
                <li key={step.id}>
                  <strong>{step.title}:</strong> {step.description}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex-1 ">
            <YouTubeEmbed videoId={videoId} />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Tutorial;

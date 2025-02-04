import PropTypes from 'prop-types';

const PageHeader = ({ isClicked }) => {
  return (
    <div className="container mx-auto px-4">
      <p className="lg:text-xl text-lg italic font-medium bg-gradient-to-r lg:py-1.5 py-1 my-2 lg:my-4 text-center from-indigo-400 via-purple-400 to-pink-400 text-white">
        {isClicked
          ? "Fill up the form & generate cover page"
          : "Choose a Template"}
      </p>
    </div>
  );
};

PageHeader.propTypes = {
  isClicked: PropTypes.bool.isRequired,
};

export default PageHeader;

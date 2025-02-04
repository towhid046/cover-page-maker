import PropTypes from 'prop-types';

const VarsityName = ({ varsityName, customClass }) => {
  return (
    <div>
      <h1 className={`text-center text-[28px] font-bold w-[650px] font-roboto ${customClass}`}>
        {varsityName}
      </h1>
    </div>
  );
};

VarsityName.propTypes = {
  varsityName: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default VarsityName;

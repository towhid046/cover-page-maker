import PropTypes from 'prop-types';

const Logo = ({ logo, customClass }) => {
  return (
    <div className="flex justify-center">
      <img src={logo} className={`w-[130px] ${customClass} h-auto`} alt="Your University Logo" />
    </div>
  )
}

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default Logo
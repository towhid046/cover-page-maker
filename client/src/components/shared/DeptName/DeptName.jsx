import PropTypes from 'prop-types';

const DeptName = ({ studentDepartment, customClass }) => {
  return (
    <div className="text-center">
      <h2 className={`${customClass} text-xl font-semibold`}>Department of {studentDepartment}</h2>
    </div>
  );
};

DeptName.propTypes = {
  studentDepartment: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default DeptName;

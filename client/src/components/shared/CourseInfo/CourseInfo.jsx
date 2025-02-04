import PropTypes from 'prop-types';

const CourseInfo = ({ courseName, courseCode, year, semester, session, customClass }) => {
  return (
    <div className={`font-semibold space-y-0.5 ${customClass}`}>
      <p>Course Title: {courseName}</p>
      <p>Course Code: {courseCode}</p>
      <p>Year: {year}</p>
      <p>Semester: {semester}</p>
      <p>Session: {session}</p>
    </div>
  );
};

CourseInfo.propTypes = {
  courseName: PropTypes.string.isRequired,
  courseCode: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  semester: PropTypes.string.isRequired,
  session: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default CourseInfo;

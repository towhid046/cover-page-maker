/* eslint-disable react/prop-types */
import "./../../src/App.css";
import DateFormater from "./DateFormater";

const Page1 = ({ item, logo, studentSortDeptName, teacherSortDeptName, uniShortName}) => {

  const {
    versityName,
    assignmentTitle,
    courseName,
    courseCode,
    year,
    semester,
    session,
    submissionDate,
    studentName,
    studentId,
    studentDepartment,
    teacherName,
    teacherTitle,
    teacherDepartment,
  } = item;
  

  return (
    <div>
      <h1 className="text_center versity_name color1"> {versityName}</h1>
      <div className="text_center logo_wrapper">
        <img src={logo} alt="Your University Logo" /> <br />
      </div>
      <h2 className="department_name">Department of {studentDepartment}</h2>
      <h3 className="assignmen_title text_center">
        <p>Assignment On</p> {assignmentTitle}
      </h3>

      <div className="course_info">
        <p>Course Title: {courseName}</p>
        <p>Course Code: {courseCode}</p>
        <p>Year: {year}</p>
        <p>Semester: {semester}</p>
        <p>Session: {session}</p>
      </div>

      <div className="boxes">
      
        <div className="box">
          <div className="box_title">Submitted by:</div>
          <div className="box_content">
            <p>{studentName}</p>
            <p>ID: {studentId}</p>
            <p>Department of {studentSortDeptName}, {uniShortName}</p>
          </div>
        </div>

        <div className="box">
          <div className="box_title">Submitted to:</div>
          <div className="box_content">
            <p>{teacherName}</p>
            <p>{teacherTitle}</p>
            <p>Department of {teacherSortDeptName}, {uniShortName}</p>
          </div>
        </div>
      </div>
      
      <p className="submit_date text_center">
        <span className="color1">Date of submission:</span>{" "}
        <DateFormater submissionDate={submissionDate} />
      </p>
    </div>
  );
};

export default Page1;

import React from "react";

const CourseInfo = ({ courseName, courseCode, year, semester, session, customClass }) => {
  return (
    <div className={` font-semibold space-y-0.5 ${customClass}`}>
      <p>Course Title: {courseName}</p>
      <p>Course Code: {courseCode}</p>
      <p>Year: {year}</p>
      <p>Semester: {semester}</p>
      <p>Session: {session}</p>
    </div>
  );
};

export default CourseInfo;

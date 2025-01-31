import { useState } from "react";
import { CoverPage } from "./CoverPage";

import { data } from "./../database/universitiesName";
import Button from "./shared/Button/Button";
import { scrollToBottom } from "./utilities/scrollToBottom";
import useScrollToTop from "../hooks/useScrollToTop";
const { universities, departments, ordinalNumbers, teacherTitles, sessions } =
  data;

const commonInputClassName =
  "py-1.5 px-4 border border-blue-400 border-opacity-60 rounded-md focus:outline-none transition duration-300";
const inputParentClassName = "flex flex-col gap-1 text-lg mb-3";

const Form = ({ pageId }) => {
  useScrollToTop();

  const [pageData, setPageData] = useState([]);

  // handel form submit:
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const formDatas = {};
    const elements = [...event.target.elements];
    elements.forEach((element) => {
      formDatas[element.name] = element.value;
      setPageData([formDatas]);
    });

    setTimeout(() => {
      scrollToBottom();
    }, 100);
  };

  return (
    <>
      <section className="container mx-auto px-4">
        <form onSubmit={formSubmitHandler} action="">
          <div className="flex lg:flex-row flex-col gap-6">
            <div className="lg:flex-1 lg:w-6/12">
              <h2 className="italic underline font-semibold text-2xl text-center mb-2">
                University Information:
              </h2>
              {/* varsity name */}
              <div className={inputParentClassName}>
                <label>
                  <span>University Name:</span>
                </label>
                <select
                  className={`${commonInputClassName} py-2.5`}
                  name="varsityName"
                  required
                >
                  <option className="text-gray-400">Select your varsity</option>
                  {universities.map((varsity, index) => (
                    <option
                      key={index}
                      value={`${varsity.name}, ${varsity.location}- ${varsity.zipCode}`}
                    >
                      {varsity.name}, {varsity.location}-{varsity.zipCode}
                    </option>
                  ))}
                </select>
              </div>
              {/* topic name */}
              <div className={inputParentClassName}>
                <label>
                  <span className="">Assignment Title:</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Assignment title"
                  name="assignmentTitle"
                  className={commonInputClassName}
                />
              </div>
              {/* course name */}
              <div className={inputParentClassName}>
                <label>
                  <span>Course Name:</span>
                </label>{" "}
                <input
                  required
                  type="text"
                  placeholder="Course Name"
                  name="courseName"
                  className={commonInputClassName}
                />
              </div>
              {/* course code */}
              <div className={inputParentClassName}>
                <label>
                  <span>Course Code:</span>
                </label>{" "}
                <input
                  required
                  type="text"
                  placeholder="Course Code"
                  name="courseCode"
                  className={commonInputClassName}
                />
              </div>
              {/* year */}
              <div className={inputParentClassName}>
                <label>
                  <span>Select Year:</span>
                </label>{" "}
                <select
                  required
                  name="year"
                  className={`${commonInputClassName} py-2.5`}
                >
                  <option className="color_gray">Year</option>
                  {ordinalNumbers.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              {/* semester */}
              <div className={inputParentClassName}>
                <label>
                  <span>Semester:</span>
                </label>{" "}
                <select
                  required
                  name="semester"
                  className={`${commonInputClassName} py-2.5`}
                >
                  <option className="color_gray">Semester</option>
                  {ordinalNumbers.map((semester, index) => (
                    <option key={index} value={semester}>
                      {semester}
                    </option>
                  ))}
                </select>
              </div>
              {/* semester */}
              <div className={inputParentClassName}>
                <label>
                  <span>Session:</span>
                </label>{" "}
                <select
                  required
                  name="session"
                  className={`${commonInputClassName} py-2.5`}
                >
                  <option className="color_gray">Session</option>
                  {sessions.map((session, index) => (
                    <option key={index} value={session}>
                      {session}
                    </option>
                  ))}
                </select>
              </div>
              {/* submission Date */}
              <div className={inputParentClassName}>
                <label>
                  <span>Date of submission:</span>
                </label>{" "}
                <input
                  required
                  type="date"
                  name="submissionDate"
                  className={commonInputClassName}
                />
              </div>
            </div>

            {/* ------------------------------------------------------- */}

            <div className="lg:flex-1  lg:w-6/12 flex flex-col gap-6 justify-between">
              {/* Student information */}
              <div>
                <h2 className="italic underline font-semibold text-2xl text-center mb-2">
                  Student Information:
                </h2>
                {/* Student name */}
                <div className={inputParentClassName}>
                  <label>
                    <span>Student name:</span>
                  </label>{" "}
                  <input
                    required
                    type="text"
                    placeholder="Student name"
                    name="studentName"
                    className={commonInputClassName}
                  />{" "}
                </div>
                {/* your id: */}
                <div className={inputParentClassName}>
                  <label>
                    <span>Student Id:</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Student Id"
                    name="studentId"
                    className={commonInputClassName}
                  />{" "}
                </div>

                {/* student Departemnt name */}
                <div className={inputParentClassName}>
                  <label>
                    <span>Department:</span>
                  </label>
                  <select
                    required
                    placeholder="Department name"
                    name="studentDepartment"
                    className={`${commonInputClassName} py-2.5`}
                  >
                    <option className="color_gray">Your department</option>
                    {departments.map((department, index) => (
                      <option key={index} value={department.name}>
                        {department.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="teacher_info">
                <h2 className="italic underline font-semibold text-2xl text-center mb-2">
                  Teacher's Information:
                </h2>
                {/* Teacher name */}
                <div className={inputParentClassName}>
                  <label>
                    <span>Teacher's name:</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Teacher name"
                    name="teacherName"
                    className={commonInputClassName}
                  />{" "}
                </div>
                {/* Teacher title: */}
                <div className={inputParentClassName}>
                  <label>
                    <span>Teacher's Title:</span>
                  </label>
                  <select
                    required
                    name="teacherTitle"
                    className={`${commonInputClassName} py-2.5`}
                  >
                    <option className="color_gray">Teacher's title</option>
                    {teacherTitles.map((teacherTitle, index) => (
                      <option key={index} value={`${teacherTitle},`}>
                        {teacherTitle}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Teacher Department name */}
                <div className={inputParentClassName}>
                  <label>
                    <span>Teacher's Department:</span>
                  </label>{" "}
                  <select
                    required
                    name="teacherDepartment"
                    className={`${commonInputClassName} py-2.5`}
                  >
                    <option className="color_gray">Teacher's department</option>
                    {departments.map((department, index) => (
                      <option key={index} value={department.name}>
                        {department.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-5 pb-12">
            <Button customClass="text-lg md:py-3 py-2 md:px-6 shadow-lg flex items-center">
              <div className="w-5"></div>
              {pageData.length > 0 ? "Update" : "Generate"}{" "}
              <div className="w-5"></div>
            </Button>
          </div>
        </form>
      </section>

      {/* Send data to Page component */}
      {pageData.map((item, index) => (
        <CoverPage pageId={pageId} key={index} item={item} />
      ))}
    </>
  );
};
export default Form;

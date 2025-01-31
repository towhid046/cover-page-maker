import { useState } from "react";

import Button from "../../shared/Button/Button";
import useScrollToTop from "./../../../hooks/useScrollToTop";
import { scrollToBottom } from "./../../utilities/scrollToBottom";
import { data } from "./../../../database/universitiesName";
import { useForm } from "react-hook-form";
import GroupCoverPage from "../GroupCoverPage/GroupCoverPage";
const { universities, departments, ordinalNumbers, teacherTitles, sessions } =
  data;

const commonInputClassName =
  "py-1.5 px-4 border border-blue-400 border-opacity-60 rounded-md focus:outline-none transition duration-300";
const inputParentClassName = "flex flex-col gap-1 text-lg mb-3";

export const GroupForm = () => {
  useScrollToTop();
  const { register, handleSubmit } = useForm();
  const [groupData, setGroupData] = useState({});

  // handel form submit:
  const formSubmitHandler = (data) => {
    data.studentIds = data?.studentIds?.trim()?.split(",");
    setGroupData(data);
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  };

  return (
    <>
      <section className="container mx-auto ">
        <form onSubmit={handleSubmit(formSubmitHandler)} action="">
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
                  {...register("varsityName")}
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
                  {...register("assignmentTitle")}
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
                  {...register("courseName")}
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
                  {...register("courseCode")}
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
                  {...register("year")}
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
                  {...register("semester")}
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
                  {...register("session")}
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
                  {...register("submissionDate")}
                  className={commonInputClassName}
                />
              </div>
            </div>

            {/* ------------------------------------------------------- */}

            <div className="lg:flex-1  lg:w-6/12 flex flex-col gap-6 justify-between">
              {/* Student information */}
              <div className="">
                <h2 className="italic underline font-semibold text-2xl text-center mb-2">
                  Students Information:
                </h2>
                {/* Group Number */}
                <div className={inputParentClassName}>
                  <label>
                    <span>Group Number:</span>
                  </label>{" "}
                  <input
                    required
                    type="number"
                    placeholder="Group Number"
                    {...register("groupNumber")}
                    className={commonInputClassName}
                  />{" "}
                </div>

                {/* your id: */}
                <div className={inputParentClassName}>
                  <label>
                    <span>Students Id: <em className="text-blue-300 text-[15px]">Write student id separated by comma `,`</em></span>
                  </label>
                  <textarea
                    title="Write Student Id separated by comma ','"
                    className={commonInputClassName}
                    required
                    {...register("studentIds")}
                    placeholder="Type students Id like: 19PAD030,19PAD035,19PAD020 ..."
                  ></textarea>{" "}
                </div>

                {/* student Department name */}
                <div className={inputParentClassName}>
                  <label>
                    <span>Department:</span>
                  </label>
                  <select
                    required
                    placeholder="Department name"
                    {...register("studentDepartment")}
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
                    {...register("teacherName")}
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
                    {...register("teacherTitle")}
                    className={`${commonInputClassName} py-2.5`}
                  >
                    <option className="text-gray-400">Teacher's title</option>
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
                    {...register("teacherDepartment")}
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
              {groupData?.teacherName ? "Update" : "Generate"}{" "}
              <div className="w-5"></div>
            </Button>
          </div>
        </form>
      </section>

      {/* Send data to Page component */}
      {groupData?.teacherName && <GroupCoverPage item={groupData} />}
    </>
  );
};

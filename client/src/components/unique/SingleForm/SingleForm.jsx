import Button from "@/components/shared/Button/Button";
import { data } from "@/database/data";
import { scrollToBottom } from "@/utilities/scrollToBottom";
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import useScrollToTop from "@/hooks/useScrollToTop";
import SingleCoverPage from "../SingleCoverPage/SingleCoverPage";
import { useState } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { SINGLE_PAGE_SCHEMA } from "@/lib/singlePageSchema";

const { universities, departments, ordinalNumbers, teacherTitles, sessions } = data;

const commonInputClassName = "py-1.5 px-4 border border-blue-400 border-opacity-60 rounded-md focus:outline-none transition duration-300";
const inputParentClassName = "flex flex-col gap-1 text-lg mb-3";

const SingleForm = ({ pageId }) => {
  useScrollToTop();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(SINGLE_PAGE_SCHEMA)
  });

  const [pageData, setPageData] = useState([]);

  // handel form submit:
  const formSubmitHandler = (data) => {
    setPageData([data]);
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  };

  return (
    <>
      <section className="container mx-auto px-4">
        <form onSubmit={handleSubmit(formSubmitHandler)} action="">
          <div className="flex lg:flex-row flex-col gap-6">
            <div className="lg:flex-1 lg:w-6/12">
              <h2 className="italic underline font-semibold text-2xl text-center mb-2">
                University Information:
              </h2>
              {/* varsity name */}
              <div className={inputParentClassName}>
                <label>
                  <span>University Name: {errors?.varsityName?.message && <small className="text-red-500 italic">{errors?.varsityName?.message}</small>} </span>
                </label>
                <select
                  {...register("varsityName")}
                  className={`${commonInputClassName} py-2.5`}
                  required
                >
                  <option value={''} className="text-gray-400">Select your varsity</option>
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
                  <span>Assignment Title: {errors?.assignmentTitle?.message && <small className="text-red-500 italic">{errors?.assignmentTitle?.message}</small>} </span>
                </label>
                <input
                  {...register("assignmentTitle")}
                  required
                  type="text"
                  placeholder="Assignment title"
                  className={commonInputClassName}
                />
              </div>
              {/* course name */}
              <div className={inputParentClassName}>
                <label>
                  <span>Course Name: {errors?.courseName?.message && <small className="text-red-500 italic">{errors?.courseName?.message}</small>} </span>
                </label>{" "}
                <input
                  {...register("courseName")}
                  required
                  type="text"
                  placeholder="Course Name"
                  className={commonInputClassName}
                />
              </div>
              {/* course code */}
              <div className={inputParentClassName}>
                <label>
                  <span>Course Code: {errors?.courseCode?.message && <small className="text-red-500 italic">{errors?.courseCode?.message}</small>} </span>
                </label>{" "}
                <input
                  {...register("courseCode")}
                  required
                  type="text"
                  placeholder="Course Code"
                  className={commonInputClassName}
                />
              </div>
              {/* year */}
              <div className={inputParentClassName}>
                <label>
                  <span>Select Year: {errors?.year?.message && <small className="text-red-500 italic">{errors?.year?.message}</small>} </span>
                </label>{" "}
                <select
                  {...register("year")}
                  required
                  className={`${commonInputClassName} py-2.5`}
                >
                  <option value={''} className="text-gray-400">Year</option>
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
                  <span>Semester: {errors?.semester?.message && <small className="text-red-500 italic">{errors?.semester?.message}</small>} </span>
                </label>{" "}
                <select
                  {...register("semester")}
                  required
                  className={`${commonInputClassName} py-2.5`}
                >
                  <option value={''} className="text-gray-400">Semester</option>
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
                  <span>Session: {errors?.session?.message && <small className="text-red-500 italic">{errors?.session?.message}</small>} </span>
                </label>{" "}
                <select
                  {...register("session")}
                  required
                  className={`${commonInputClassName} py-2.5`}
                >
                  <option value={''} className="text-gray-400">Session</option>
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
                  <span>Date of submission: {errors?.submissionDate?.message && <small className="text-red-500 italic">{errors?.submissionDate?.message}</small>} </span>
                </label>{" "}
                <input
                  {...register("submissionDate")}
                  required
                  type="date"
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
                    <span>Student name: {errors?.studentName?.message && <small className="text-red-500 italic">{errors?.studentName?.message}</small>} </span>
                  </label>{" "}
                  <input
                    {...register("studentName")}
                    required
                    type="text"
                    placeholder="Student name"
                    className={commonInputClassName}
                  />{" "}
                </div>
                {/* your id:*/}
                <div className={inputParentClassName}>
                  <label>
                    <span>Student Id: {errors?.studentId?.message && <small className="text-red-500 italic">{errors?.studentId?.message}</small>} </span>
                  </label>
                  <input
                    {...register("studentId")}
                    required
                    type="text"
                    placeholder="Student Id"
                    className={commonInputClassName}
                  />{" "}
                </div>

                {/* student Department name */}
                <div className={inputParentClassName}>
                  <label>
                    <span>Department: {errors?.studentDepartment?.message && <small className="text-red-500 italic">{errors?.studentDepartment?.message}</small>} </span>
                  </label>
                  <select
                    {...register("studentDepartment")}
                    required
                    placeholder="Department name"
                    className={`${commonInputClassName} py-2.5`}
                  >
                    <option value={''} className="text-gray-400">Your department</option>
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
                  Teacher&apos;s Information:
                </h2>
                {/* Teacher name */}
                <div className={inputParentClassName}>
                  <label>
                    <span>Teacher&apos;s name: {errors?.teacherName?.message && <small className="text-red-500 italic">{errors?.teacherName?.message}</small>} </span>
                  </label>
                  <input
                    {...register("teacherName")}
                    required
                    type="text"
                    placeholder="Teacher name"
                    className={commonInputClassName}
                  />{" "}
                </div>
                {/* Teacher title: */}
                <div className={inputParentClassName}>
                  <label>
                    <span>Teacher&apos;s Title: {errors?.teacherTitle?.message && <small className="text-red-500 italic">{errors?.teacherTitle?.message}</small>} </span>
                  </label>
                  <select
                    {...register("teacherTitle")}
                    required
                    className={`${commonInputClassName} py-2.5`}
                  >
                    <option value={''} className="text-gray-400">Teacher&apos;s title</option>
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
                    <span>Teacher&apos;s Department: {errors?.teacherDepartment?.message && <small className="text-red-500 italic">{errors?.teacherDepartment?.message}</small>} </span>
                  </label>{" "}
                  <select
                    {...register("teacherDepartment")}
                    required
                    className={`${commonInputClassName} py-2.5`}
                  >
                    <option value={''} className="text-gray-400">Teacher&apos;s department</option>
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
        <SingleCoverPage pageId={pageId} key={index} item={item} />
      ))}
    </>
  );
};
export default SingleForm;
SingleForm.propTypes = {
  pageId: PropTypes.number.isRequired
}
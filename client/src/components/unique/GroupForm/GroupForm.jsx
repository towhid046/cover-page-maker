import { useState } from "react";
import Button from "@/components/shared/Button/Button";
import useScrollToTop from "@/hooks/useScrollToTop";
import { scrollToBottom } from "@/utilities/scrollToBottom";
import { data } from "@/database/data";
import { useForm } from "react-hook-form";
import GroupCoverPage from "@/components/unique/GroupCoverPage/GroupCoverPage";
import { zodResolver } from '@hookform/resolvers/zod';
import { GROUP_PAGE_SCHEMA } from "@/lib/groupPageSchema";

const { universities, departments, ordinalNumbers, teacherTitles, sessions } = data;

const commonInputClassName = "py-1.5 px-4 border border-blue-400 border-opacity-60 rounded-md focus:outline-none transition duration-300";
const inputParentClassName = "flex flex-col gap-1 text-lg mb-3";

export const GroupForm = () => {
  useScrollToTop();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(GROUP_PAGE_SCHEMA)
  });
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
                  <span>University Name: {errors?.varsityName?.message && <small className="text-red-500 italic">{errors?.varsityName?.message}</small>}</span>
                </label>
                <select
                  className={`${commonInputClassName} py-2.5`}
                  {...register("varsityName")}
                // required
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
                  <span>Assignment Title: {errors?.assignmentTitle?.message && <small className="text-red-500 italic">{errors?.assignmentTitle?.message}</small>}</span>
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
                  <span>Course Name: {errors?.courseName?.message && <small className="text-red-500 italic">{errors?.courseName?.message}</small>}</span>
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
                  <span>Course Code: {errors?.courseCode?.message && <small className="text-red-500 italic">{errors?.courseCode?.message}</small>}</span>
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
                  <span>Select Year: {errors?.year?.message && <small className="text-red-500 italic">{errors?.year?.message}</small>}</span>
                </label>{" "}
                <select
                  required
                  {...register("year")}
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
                  <span>Semester: {errors?.semester?.message && <small className="text-red-500 italic">{errors?.semester?.message}</small>}</span>
                </label>{" "}
                <select
                  required
                  {...register("semester")}
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
                  <span>Session: {errors?.session?.message && <small className="text-red-500 italic">{errors?.session?.message}</small>}</span>
                </label>{" "}
                <select
                  required
                  {...register("session")}
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
                  <span>Date of submission: {errors?.submissionDate?.message && <small className="text-red-500 italic">{errors?.submissionDate?.message}</small>}</span>
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
                    <span>Group Number: {errors?.groupNumber?.message && <small className="text-red-500 italic">{errors?.groupNumber?.message}</small>}</span>
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
                    <span>Students Ids <span className="text-blue-400">(separated by comma):</span> {errors?.studentIds?.message && <small className="text-red-500 italic">{errors?.studentIds?.message}</small>}</span>
                  </label>
                  <textarea
                    title="Write Student Id separated by comma ','"
                    className={commonInputClassName}
                    required
                    {...register("studentIds")}
                    placeholder="eg: 19PAD030,19PAD035,19PAD020 ..."
                  ></textarea>{" "}
                </div>

                {/* student Department name */}
                <div className={inputParentClassName}>
                  <label>
                    <span>Department: {errors?.studentDepartment?.message && <small className="text-red-500 italic">{errors?.studentDepartment?.message}</small>}</span>
                  </label>
                  <select
                    required
                    placeholder="Department name"
                    {...register("studentDepartment")}
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
                    <span>Teacher&apos;s name: {errors?.teacherName?.message && <small className="text-red-500 italic">{errors?.teacherName?.message}</small>}</span>
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
                    <span>Teacher&apos;s Title: {errors?.teacherTitle?.message && <small className="text-red-500 italic">{errors?.teacherTitle?.message}</small>}</span>
                  </label>
                  <select
                    required
                    {...register("teacherTitle")}
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
                    <span>Teacher&apos;s Department: {errors?.teacherDepartment?.message && <small className="text-red-500 italic">{errors?.teacherDepartment?.message}</small>}</span>
                  </label>{" "}
                  <select
                    required
                    {...register("teacherDepartment")}
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

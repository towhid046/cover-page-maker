/* eslint-disable react/prop-types */
import "./../../src/index.css";
import Logo from "./shared/Logo/Logo";
import VarsityName from "./shared/VarsityName/VarsityName";
import DeptName from "./shared/DeptName/DeptName";
import AssignmentTitle from "./shared/AssignmentTitle/AssignmentTitle";
import CourseInfo from "./shared/CourseInfo/CourseInfo";
import SubmitDate from "./shared/SubmitDate/SubmitDate";

const Page1 = ({
  item,
  logo,
  studentSortDeptName,
  teacherSortDeptName,
  uniShortName,
}) => {
  const {
    varsityName,
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
  } = item;

  return (
    <div className="text-gray-800 space-y-7">
      <VarsityName varsityName={varsityName} customClass={"text-[#2b6e9bf1]"} />

      <div className="w-[627px] space-y-7 ">
        <Logo logo={logo} />

        <DeptName studentDepartment={studentDepartment} />

        <AssignmentTitle assignmentTitle={assignmentTitle} />

        <CourseInfo
          courseName={courseName}
          courseCode={courseCode}
          year={year}
          semester={semester}
          session={session}
        />

        <div className=" flex  items-center justify-between gap-6 font-semibold">
          <div className="flex-1 border-2 border-[#2b6e9b77] rounded-tr-3xl rounded-bl-3xl px-11 py-12">
            <div className="italic mb-2">Submitted by:</div>
            <div className="transition-transform space-y-1 translate-x-6">
              <p>{studentName}</p>
              <p>ID: {studentId}</p>
              <p>
                Department of {studentSortDeptName}, <br /> {uniShortName}
              </p>
            </div>
          </div>

          <div className="flex-1 border-2 border-[#2b6e9b77] rounded-tr-3xl rounded-bl-3xl px-8 py-12">
            <div className="italic mb-2">Submitted to:</div>
            <div className="transition-transform space-y-1 translate-x-6">
              <p>{teacherName}</p>
              <p>{teacherTitle}</p>
              <p>
                Department of {teacherSortDeptName},<br /> {uniShortName}
              </p>
            </div>
          </div>
        </div>

        <SubmitDate submissionDate={submissionDate} />
      </div>
    </div>
  );
};

export default Page1;

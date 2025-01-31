/* eslint-disable react/prop-types */
import "./../../src/index.css";
import VarsityName from "./shared/VarsityName/VarsityName";
import DeptName from "./shared/DeptName/DeptName";
import Logo from "./shared/Logo/Logo";
import CourseInfo2 from "./shared/CourseInfo2/CourseInfo2";
import AssignmentTitle from "./shared/AssignmentTitle/AssignmentTitle";
import SubmitDate from './shared/SubmitDate/SubmitDate';

const Page6 = ({
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
    <div className="space-y-6">
      <VarsityName
        varsityName={varsityName}
        customClass="text-[#2b6e9bf1] -mt-5"
      />
      <div className="space-y-6 w-[627px]">
        <Logo logo={logo} />
        <DeptName studentDepartment={studentDepartment} />

        <AssignmentTitle assignmentTitle={assignmentTitle} />

        <CourseInfo2
          courseCode={courseCode}
          courseName={courseName}
          year={year}
          semester={semester}
          session={session}
          customClass=" space-y-0.5"
        />

        <div className="flex flex-col gap-6">
          <div className="text-md py-[5px] px-8 flex-1 font-semibold border-l-4 border-[#568360b6]">
            <div className="text-lg  italic underline ">Submitted by:</div>
            <div className="mt-3.5 space-y-1">
              <p>{studentName}</p>
              <p>ID: {studentId}</p>
              <p>
                Department of {studentSortDeptName}, {uniShortName}
              </p>
            </div>
          </div>

          <div className="text-md py-[5px] px-8 flex-1 font-semibold border-l-4 border-[#568360b6] self-end">
            <div className="text-lg  italic underline ">Submitted to:</div>
            <div className="mt-3.5 space-y-1">
              <p>{teacherName}</p>
              <p>{teacherTitle}</p>
              <p>
                Department of {teacherSortDeptName}, {uniShortName}
              </p>
            </div>
          </div>
        </div>
        <SubmitDate submissionDate={submissionDate} customClass='text-left' color="#5b8e7d"/>
      </div>
    </div>
  );
};

export default Page6;

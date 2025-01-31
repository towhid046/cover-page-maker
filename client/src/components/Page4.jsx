/* eslint-disable react/prop-types */
import "./../../src/index.css";
import CourseInfo2 from "./shared/CourseInfo2/CourseInfo2";
import VarsityName from "./shared/VarsityName/VarsityName";
import Logo from "./shared/Logo/Logo";
import DeptName from "./shared/DeptName/DeptName";
import SubmitDate from "./shared/SubmitDate/SubmitDate";

const Page3 = ({
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
    <div className="space-y-6 text-gray-800">
      <VarsityName varsityName={varsityName} />
      <div className="w-[627px] space-y-7">
        <Logo logo={logo} />
        <DeptName studentDepartment={studentDepartment} />
        <h3 className="text-xl font-semibold uppercase text-[#397342a8] text-center">
          Assignment On <br /> {assignmentTitle}
        </h3>

        <CourseInfo2
          studentDepartment={studentDepartment}
          year={year}
          semester={semester}
          session={session}
          courseCode={courseCode}
          courseName={courseName}
        />

        <div className="flex items-center gap-5 justify-between">
          <div className="text-lg flex-1 font-semibold ">
            <div className="text-xl underline italic ">Submitted by:</div>
            <div className="space-y-1 mt-5">
              <p>{studentName}</p>
              <p>ID: {studentId}</p>
              <p>
                Department of {studentSortDeptName}, {uniShortName}
              </p>
            </div>
          </div>

          <div className="text-lg pl-8 flex-1 font-semibold  border-l-[3px] border-gray-600">
            <div className="text-xl underline italic ">Submitted to:</div>
            <div className="space-y-1 mt-5">
              <p>{teacherName}</p>
              <p>{teacherTitle}</p>
              <p>
                Department of {teacherSortDeptName}, {uniShortName}
              </p>
            </div>
          </div>
        </div>

        <SubmitDate
          submissionDate={submissionDate}
          customClass="text-right"
          color="#397342a8"
        />
      </div>
    </div>
  );
};

export default Page3;

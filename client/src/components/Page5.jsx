/* eslint-disable react/prop-types */
import "./../../src/index.css";
import VarsityName from "./shared/VarsityName/VarsityName";
import Logo from "./shared/Logo/Logo";
import DeptName from "./shared/DeptName/DeptName";
import AssignmentTitle from "./shared/AssignmentTitle/AssignmentTitle";
import CourseInfo from "./shared/CourseInfo/CourseInfo";
import SubmitDate from "./shared/SubmitDate/SubmitDate";

const Page5 = ({
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
    <div className="space-y-7 text-gray-800">
      <VarsityName varsityName={varsityName} customClass="text-[#285943]" />
      <div className="w-[627px] space-y-7">
        <Logo logo={logo} />
        <DeptName studentDepartment={studentDepartment} />

        <AssignmentTitle assignmentTitle={assignmentTitle} />

        <CourseInfo
          courseCode={courseCode}
          courseName={courseName}
          year={year}
          semester={semester}
          session={session}
        />

        <div className="flex items-center justify-between border-[3px] border-[#397342a8] text-xl rounded-tl-2xl rounded-br-2xl ">
          <div className="text-lg pt-4 pb-9 flex-1 font-semibold ">
            <div className="border-b-[3px] pb-2 text-center border-[#397342a8]">Submitted by-</div>
            <div className="mt-5 transition-transform translate-x-7">
              <p>{studentName}</p>
              <p>ID: {studentId}</p>
              <p>
                Department of {studentSortDeptName}, <br /> {uniShortName}
              </p>
            </div>
          </div>

          <div className="text-lg pt-4 pb-9 flex-1 font-semibold  border-l-[3px] border-[#397342a8]">
            <div className="border-b-[3px] pb-2 text-center border-[#397342a8]">Submitted to-</div>
            <div className="mt-5 transition-transform translate-x-7">
              <p>{teacherName}</p>
              <p>{teacherTitle}</p>
              <p>
                Department of {teacherSortDeptName}, <br /> {uniShortName}
              </p>
            </div>
          </div>
        </div>

        <SubmitDate submissionDate={submissionDate} color="#285943" customClass='text-right' />
      </div>
    </div>
  );
};

export default Page5;

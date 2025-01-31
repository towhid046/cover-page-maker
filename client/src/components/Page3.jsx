/* eslint-disable react/prop-types */
import "./../../src/index.css";
import VarsityName from "./shared/VarsityName/VarsityName";
import Logo from "./shared/Logo/Logo";
import SubmitDate from "./shared/SubmitDate/SubmitDate";
import CourseInfo2 from "./shared/CourseInfo2/CourseInfo2";

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
    <div className="space-y-6">
      <VarsityName varsityName={varsityName} customClass={"text-[#124559]"} />
      <div className="w-[627px] space-y-6">
        <Logo logo={logo} />

        <h3 className="text-xl font-semibold uppercase text-[#db8936b0] text-center">
          Assignment On <br /> {assignmentTitle}
        </h3>

        <CourseInfo2
          studentDepartment={studentDepartment}
          courseName={courseName}
          year={year}
          semester={semester}
          session={session}
          courseCode={courseCode}
        />

        <div className="flex items-center gap-6 text-lg">
          <div className=" border-2 border-[#db8936b0]  rounded-2xl border-opacity-30 p-10 flex-1 font-semibold">
            <div className="italic text-xl text-center">Submitted by-</div>
            <div className="mt-5 space-y-1">
              <p>{studentName}</p>
              <p>ID: {studentId}</p>
              <p>
                Department of {studentSortDeptName},<br /> {uniShortName}
              </p>
            </div>
          </div>

          <div className="border-2 border-[#db8936b0] rounded-2xl border-opacity-30 p-10  flex-1 font-semibold">
            <div className="italic text-xl text-center">Submitted to-</div>
            <div className="mt-5 space-y-1">
              <p>{teacherName}</p>
              <p>{teacherTitle}</p>
              <p>
                Department of {teacherSortDeptName}, <br /> {uniShortName}
              </p>
            </div>
          </div>
        </div>

        <SubmitDate submissionDate={submissionDate} customClass="text-right" />
      </div>
    </div>
  );
};

export default Page3;

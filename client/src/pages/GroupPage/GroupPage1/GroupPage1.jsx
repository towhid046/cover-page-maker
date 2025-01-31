/* eslint-disable react/prop-types */
import "./../../../index.css";
import Logo from "./../../../components/shared/Logo/Logo";
import VarsityName from "./../../../components/shared/VarsityName/VarsityName";
import DeptName from "./../../../components/shared/DeptName/DeptName";
import AssignmentTitle from "./../../../components/shared/AssignmentTitle/AssignmentTitle";
import CourseInfo from "./../../../components/shared/CourseInfo/CourseInfo";
import SubmitDate from "./../../../components/shared/SubmitDate/SubmitDate";
import DateFormater from "../../../components/shared/DateFormater/DateFormater";

const GroupPage1 = ({
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
    groupNumber,
    studentIds,
    studentDepartment,
    teacherName,
    teacherTitle,
  } = item;

  return (
    <div className="text-gray-800 space-y-4">
      <VarsityName
        varsityName={varsityName}
        customClass={"text-[#2b6e9bf1] text-[24px]"}
      />

      <div className="w-[627px] space-y-4 ">
        <Logo logo={logo} customClass="w-24" />

        <div className="text-center">
          <h2 className={`text-lg font-semibold text-gray-600`}>
            Department of {studentDepartment}
          </h2>
        </div>
        <div className="flex justify-center">
          <p className="text-center font-bold text-xl ">
            Group No: {groupNumber}
          </p>
        </div>

        <AssignmentTitle
          assignmentTitle={assignmentTitle}
          customClass="text-[18px]"
        />

        <CourseInfo
          courseName={courseName}
          courseCode={courseCode}
          year={year}
          semester={semester}
          session={session}
          customClass={"text-[17px]"}
        />

        <div className=" flex  gap-6 font-semibold">
          <div className=" w-1/2 border-2 text-[15px] border-[#2b6e9b77] rounded-tr-3xl rounded-bl-3xl p-8">
            <div className="italic mb-2">Submitted by:</div>
            <div className="transition-transform space-y-1 translate-x-6">
              {/* <p>{studentName}</p> */}
              <ul>
                {studentIds?.map((studentId, index) => (
                  <li key={index}>{studentId}</li>
                ))}
              </ul>
              <p>
                Department of {studentSortDeptName}, <br /> {uniShortName}
              </p>
            </div>
          </div>

          <div className=" w-1/2 flex gap-3 justify-between flex-col text-[15px]">
            <div className=" border-2 border-[#2b6e9b77] rounded-tr-3xl rounded-bl-3xl p-8">
              <div className="italic mb-2">Submitted to:</div>
              <div className="transition-transform space-y-1 translate-x-6">
                <p>{teacherName}</p>
                <p>{teacherTitle}</p>
                <p>
                  Department of {teacherSortDeptName},<br /> {uniShortName}
                </p>
              </div>
            </div>
            <div
              className={`text-[15px] font-semibold italic text-center  border-2 border-[#2b6e9b77] rounded-xl  px-11 py-3 pb-4 `}
            >
              <p>Date of submission:</p>
              <p className="text-[#91c462e7]">
                <DateFormater submissionDate={submissionDate} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage1;

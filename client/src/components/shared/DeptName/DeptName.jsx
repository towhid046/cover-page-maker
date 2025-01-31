import React from "react";

const DeptName = ({studentDepartment, customClass}) => {
  return (
    <div className="text-center">
      <h2 className={`${customClass} text-xl font-semibold`}>Department of {studentDepartment}</h2>
    </div>
  );
};

export default DeptName;

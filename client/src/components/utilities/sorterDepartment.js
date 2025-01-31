import { data } from "../../database/universitiesName";
const { departments } = data;

const sorterDepartment = (deptName) => {
  if (deptName === `Teacher's department` || deptName === `Your department`) {
    return `Select department`;
  }
  const targetedDept = departments.find((dept) => dept.name === deptName);
  return targetedDept.sortName;
};

export default sorterDepartment;

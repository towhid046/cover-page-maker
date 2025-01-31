

const AssignmentTitle = ({assignmentTitle, customClass='text-xl'}) => {
  return (
    <div className={`font-semibold  text-center ${customClass}`}>
      <p className="italic text-[#91c462e7] mb-1">Assignment On</p>
      <h3>{assignmentTitle}</h3>
    </div>
  );
};

export default AssignmentTitle;

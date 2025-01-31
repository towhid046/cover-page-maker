import DateFormater from "../DateFormater/DateFormater"

const SubmitDate = ({submissionDate, customClass='text-center', color='#2b6e9bf1'}) => {
  return (
    <p className={`font-semibold italic  pt-8 ${customClass}`}>
        <span className={` text-[${color}]`}>Date of submission:</span>{" "}
        <DateFormater submissionDate={submissionDate} />
      </p>
  )
}

export default SubmitDate
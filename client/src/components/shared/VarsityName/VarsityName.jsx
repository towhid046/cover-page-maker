
const VarsityName = ({ varsityName, customClass }) => {
  return (
    <div>
      <h1 className={`text-center text-[28px] font-bold w-[650px] font-roboto ${customClass}`}>
        {varsityName}
      </h1>
    </div>
  );
};

export default VarsityName;

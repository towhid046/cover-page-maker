import { data } from "../../database/universitiesName";
const { universities } = data;

const getUniShorterName = (uniName) => {
  if (uniName === "Select your varsity") {
    return "Select varsity";
  } else {
    const zip = parseInt(uniName.split("-")[1]);
    
    const targetedName = universities.find(
      (versity) => versity.zipCode === zip
    );
    return targetedName.shortName;
  }
};

export default getUniShorterName;

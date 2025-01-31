// univesities name
const universities = [
  { name: "Bangabandhu Sheikh Mujibur Rahman Science and Technology University", location: "Gopalganj", zipCode: 8100, shortName: "BSMRSTU" },
  { name: "Bangladesh Agricultural University", location: "Mymensingh", zipCode: 2202, shortName: "BAU" },
  { name: "Bangladesh University of Engineering and Technology", location: "Dhaka", zipCode: 1205, shortName: "BUET" },
  { name: "Bangladesh University of Professionals", location: "Dhaka", zipCode: 1216, shortName: "BUP" },
  { name: "Barisal University", location: "Barisal", zipCode: 8200, shortName: "BU" },
  { name: "Begum Rokeya University, Rangpur", location: "Rangpur", zipCode: 5402, shortName: "BRUR" },
  { name: "Chittagong University", location: "Chittagong", zipCode: 4331, shortName: "CU" },
  { name: "Comilla University", location: "Comilla", zipCode: 3506, shortName: "CU" },
  { name: "Hajee Mohammad Danesh Science and Technology University", location: "Dinajpur", zipCode: 5200, shortName: "HSTU" },
  { name: "Islamic University", location: "Kushtia", zipCode: 7003, shortName: "IU" },
  { name: "Jagannath University", location: "Dhaka", zipCode: 1100, shortName: "JnU" },
  { name: "Jahangirnagar University", location: "Savar, Dhaka", zipCode: 1342, shortName: "JU" },
  { name: "Jatiya Kabi Kazi Nazrul Islam University", location: "Trishal, Mymensingh", zipCode: 2220, shortName: "JKKNIU" },
  { name: "Jessore University of Science and Technology", location: "Jessore", zipCode: 7408, shortName: "JUST" },
  { name: "Khulna University", location: "Khulna", zipCode: 9208, shortName: "KU" },
  { name: "Mawlana Bhashani Science and Technology University", location: "Tangail", zipCode: 2200, shortName: "MBSTU" },
  { name: "National University, Bangladesh", location: "Gazipur", zipCode: 1704, shortName: "NUB" },
  { name: "Noakhali Science and Technology University", location: "Noakhali", zipCode: 3814, shortName: "NSTU" },
  { name: "Pabna University of Science and Technology", location: "Pabna", zipCode: 6600, shortName: "PUST" },
  { name: "Patuakhali Science and Technology University", location: "Patuakhali", zipCode: 8602, shortName: "PSTU" },
  { name: "Rabindra University, Bangladesh", location: "Kushtia", zipCode: 7000, shortName: "RUB" },
  { name: "Rajshahi University", location: "Rajshahi", zipCode: 6205, shortName: "RU" },
  { name: "Shahjalal University of Science and Technology", location: "Sylhet", zipCode: 3100, shortName: "SUST" },
  { name: "Sher-e-Bangla Agricultural University", location: "Dhaka", zipCode: 1207, shortName: "SAU" },
  { name: "University of Dhaka", location: "Dhaka", zipCode: 1000, shortName: "DU" },
];

//   dapartment name
const departments = [
  { name: "Accounting and Information Systems", sortName: "AIS" },
  { name: "Agriculture", sortName: "AGR" },
  { name: "Anthropology", sortName: "ANT" },
  { name: "Animal Science and Veterinary Medicine", sortName: "ASVM" },
  { name: "Applied Chemistry and Chemical Engineering", sortName: "ACCE" },
  { name: "Architecture", sortName: "ARCH" },
  { name: "Biochemistry and Molecular Biology", sortName: "BMB" },
  { name: "Biotechnology and Genetic Engineering", sortName: "BGE" },
  { name: "Botany", sortName: "BOT" },
  { name: "Chemistry", sortName: "CHEM" },
  { name: "Civil Engineering", sortName: "CE" },
  { name: "Computer Science and Engineering", sortName: "CSE" },
  { name: "Economics", sortName: "ECO" },
  { name: "Electrical and Electronic Engineering", sortName: "EEE" },
  { name: "Electronics and Telecommunication Engineering", sortName: "ETE" },
  { name: "Environmental Science & Disaster Management", sortName: "ESD" },
  { name: "Finance and Banking", sortName: "FAB" },
  { name: "Fisheries and Marine Bioscience", sortName: "FMB" },
  { name: "Food Engineering", sortName: "FE" },
  { name: "History", sortName: "HIS" },
  { name: "International Relations", sortName: "IR" },
  { name: "Law", sortName: "LAW" },
  { name: "Management Studies", sortName: "MGT" },
  { name: "Marketing", sortName: "MKT" },
  { name: "Mathematics", sortName: "MATH" },
  { name: "Public Administration", sortName: "PAD" },
  { name: "Pharmacy", sortName: "PHR" },
  { name: "Physics", sortName: "PHY" },
  { name: "Political Science", sortName: "PS" },
  { name: "Psychology", sortName: "PSY" },
  { name: "Sociology", sortName: "SOC" },
  { name: "Statistics", sortName: "STAT" },
  { name: "Tourism and Hospitality Management", sortName: "THM" },
  { name: "Bangla", sortName: "BAN" },
  { name: "English", sortName: "ENG" },
];

// Teacher titles
const teacherTitles = [
  "Lecturer",
  "Assistant Professor",
  "Associate Professor",
  'Professor'
];

const ordinalNumbers = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

const year = new Date().getFullYear()
const sessions = [
  `${year - 7} - ${year - 6}`,
  `${year - 6} - ${year - 5}`,
  `${year - 5} - ${year - 4}`,
  `${year - 4} - ${year - 3}`,
  `${year - 3} - ${year - 2}`,
  `${year - 2} - ${year - 1}`,
  `${year - 1} - ${year}`,
];

export const data = {
  universities,
  departments,
  ordinalNumbers,
  teacherTitles,
  sessions,
};

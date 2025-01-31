export default function DateFormater({ submissionDate }) {
  const [a, b, c] = submissionDate.split("-").reverse();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let d = b[0] === "0" ? b[1] : b;
  let month = months[d - 1];

  return (
    <em>
      {a}
      <sup>
        {a === "01" ? "st" : a === "02" ? "nd" : a === "03" ? "rd" : "th"}
      </sup>{" "}
      {month + ", "}
      {c}
    </em>
  );
}



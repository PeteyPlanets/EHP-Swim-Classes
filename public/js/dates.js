const daysOfWeekArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const monthsArr = [
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

const endings = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];

export const formatTimestamp = (timestamp, date) => {
  // Get Day of Week
  const dayOfWeek = daysOfWeekArr[new Date(timestamp).getDay()];

  // Get month
  const month = monthsArr[new Date(timestamp).getMonth()];

  // Get day of month with proper ending (st, nd, rd, th,)
  const dayOfMonth = new Date(timestamp).getDate();
  const lastDigit = Number(String(dayOfMonth).slice(-1));
  const dateString = `${dayOfMonth}${
    dayOfMonth == 11 ? "th" : endings[lastDigit]
  }`;

  // Get time and AM / PM
  const militaryTime = date.split("T")[1];
  const timeEnding = Number(militaryTime.split(":")[0]) > 12 ? "PM" : "AM";
  const timeArr = militaryTime.split(":");

  const formattedTimeInteger =
    Number(timeArr[0]) < 10 ? timeArr[0].slice(-1) : timeArr[0];

  const time = `${timeArr[0] > 12 ? timeArr[0] - 12 : formattedTimeInteger}:${
    timeArr[1]
  }${timeEnding}`;

  const finalDateString = `${dayOfWeek}, ${month} ${dateString} @ ${time}`;

  return finalDateString;
};

export const currentDateTime = () => {
  var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  var localISOString = new Date(Date.now() - tzoffset)
    .toISOString()
    .slice(0, -1);

  const datetimeInputString = localISOString.substring(
    0,
    ((localISOString.indexOf("T") | 0) + 6) | 0
  );
  return datetimeInputString;
};

export const formatDateToPopulate = (e) => {
  // Convert to YYYY-MM-DDTHH:MM
  const tempArr = e.date.split(": ")[0].split(" ");
  const tempYear = new Date().getFullYear();
  const tempMonth = String(monthsArr.indexOf(tempArr[1]) + 1).padStart(2, "0");
  const tempDay = tempArr[2].replace(/\D/g, "").padStart(2, "0");
  const tempTimeArr = tempArr[4].slice(0, -2).split(":");
  const isPM = tempArr[4].slice(-2).startsWith("P");
  const tempHour = isPM
    ? +tempTimeArr[0] + 12
    : tempTimeArr[0].padStart(2, "0");
  const tempMin = tempTimeArr[1].padStart(2, "0");

  const finalStr = `${tempYear}-${tempMonth}-${tempDay}T${tempHour}:${tempMin}`;
  return finalStr;
};

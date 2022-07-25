const weatherArray = [
  {
    day: "Monday",
    temp: 20,
    rainfall: 12,
  },
  {
    day: "Tuesday",
    temp: 25,
    rainfall: 6,
  },
  {
    day: "Wednesday",
    temp: 27,
    rainfall: 24,
  },
  {
    day: "Thursday",
    temp: 32,
    rainfall: 65,
  },
  {
    day: "Friday",
    temp: 18,
    rainfall: 2,
  },
  {
    day: "Saturday",
    temp: 26,
    rainfall: 0,
  },
  {
    day: "Sunday",
    temp: 27,
    rainfall: 14,
  },
];

// const beachPlanner = (temp, rainfall) => {
//   const beachDayArray = weatherArray.filter(
//     (obj) => obj.temp >= temp && obj.rainfall <= rainfall
//   );
//   let string = "";
//   for (let obj of beachDayArray) {
//     if (obj === beachDayArray[beachDayArray.length - 1]) {
//       string += `${obj.day}`;
//     } else if (obj === beachDayArray[beachDayArray.length - 2]) {
//       string += `${obj.day} and `;
//     } else {
//       string += `${obj.day}, `;
//     }
//   }
//   console.log(string);
//   return string;
// };

// Using Formatter
const beachPlanner = (temp, rainfall) => {
  const beachDayArray = weatherArray
    .filter((obj) => obj.temp >= temp && obj.rainfall <= rainfall)
    .map((obj) => obj.day);

  // Converts Array into listed String to RETURN
  const formatter = new Intl.ListFormat("en-GB", {
    style: "long",
    type: "conjunction",
  });

  // (Formatted as per warmup requirements)
  console.log(formatter.format(beachDayArray));
  return formatter.format(beachDayArray);

  // // (Formatted in more a user-friendly String)
  // return "You can go to the beach on " + formatter.format(dayArr)
};

beachPlanner(24, 8); // return "Tuesday and Saturday"
beachPlanner(20, 20); // return "Mon tue sat sun"

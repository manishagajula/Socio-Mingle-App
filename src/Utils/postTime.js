export const timeDuration = (date) => {
  const selectedDate = new Date(date);
  const currentDate = new Date();
  // console.log(selectedDate);
  // console.log(currentDate);

  const selectedYear = selectedDate.getFullYear();
  // console.log(selectedYear);
  const currentYear = currentDate.getFullYear();
  // console.log(currentYear);

  const selectedMonth = selectedDate.getMonth();
  // console.log(selectedMonth);
  const currentMonth = currentDate.getMonth();
  // console.log(currentMonth);

  const selectedDay = selectedDate.getDay();
  // console.log(selectedDay);
  const currentDay = currentDate.getDay();
  // console.log(currentDay);

  const selectedHours = selectedDate.getHours();
  // console.log(selectedHours);
  const currentHours = currentDate.getHours();
  // console.log(currentHours);

  const selectedMinutes = selectedDate.getMinutes();
  // console.log(selectedMinutes);
  const currentMinutes = currentDate.getMinutes();
  // console.log(currentMinutes);

  const selectedSeconds = selectedDate.getSeconds();
  // console.log(selectedSeconds);
  const currentSeconds = currentDate.getSeconds();
  // console.log(currentSeconds);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Aug",
    "Nov",
    "Dec",
  ];

  if (
    selectedYear === currentYear &&
    selectedMonth === currentMonth &&
    selectedDay === currentDay
  ) {
    if (currentHours - selectedHours >= 1) {
      // console.log(currentHours - selectedHours >= 1);
      return `${currentHours - selectedHours} hour 
      
    ${currentHours - selectedHours > 1 ? "s" : ""} ago`;
    } else if (currentMinutes - selectedMinutes >= 1) {
      return `${currentMinutes - selectedMinutes} minute${
        currentMinutes - selectedMinutes > 1 ? "s" : ""
      } ago`;
    } else if (currentSeconds - selectedSeconds >= 1) {
      return `${currentSeconds - selectedSeconds} second${
        currentSeconds - selectedSeconds > 1 ? "s" : ""
      } ago`;
    } else {
      return "now";
    }
  } else if (selectedYear === currentYear) {
    return `${months[selectedDate.getMonth()]} ${selectedDate.getDate()}`;
  } else {
    return `${
      months[selectedDate.getMonth()]
    } ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`;
  }
};

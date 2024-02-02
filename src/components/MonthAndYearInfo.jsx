import { parseISO } from "date-fns/esm";
import React from "react";

export const MonthAndYearInfo = ({ timestamp }) => {
  let monthAndYearInfo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const dateString = date.toDateString();

    console.log({ date, dateString });
    // converts object to string
    // date: Tue Oct 08 2019 01:06:00 GMT+0530 (India Standard Time) {}
    // dateString: "Tue Oct 08 2019"
    // ds: "object"
    // month: "Oct"
    // year: "2019"
    const month = dateString.slice(4, 7);
    const year = dateString.slice(11);
    const joinedDate = dateString.slice(8, 10);
    monthAndYearInfo = `${month} ${joinedDate}, ${year}`;
    // console.log({ date, ds: typeof date, dateString, month, year });
    console.log(typeof dateString);
  }

  console.log(monthAndYearInfo);
  return <span>Joined {monthAndYearInfo}</span>;
};

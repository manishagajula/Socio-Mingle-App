import React from "react";
import { parseISO, formatDistanceToNowStrict } from "date-fns";

export const TimeWhileAgo = ({ timestamp }) => {
  const getDate = new Date(timestamp);
  //   console.log({ timestamp, getDate });
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(getDate);
    const timePeriod = formatDistanceToNowStrict(date);
    const timeArr = timePeriod.split(" ");
    let actualTime = timeArr[0];
    let unit = timeArr[1];
    timeAgo = `${actualTime}${unit[0]} ago`;
  }

  return <span>{timeAgo}</span>;
};

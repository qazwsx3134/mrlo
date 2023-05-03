import dayjs from "dayjs";
// Get current time
export const currentTime = () => dayjs().format("HH:mm");

// Subtract from now
export const subtractFromNow = (
  time: number,
  unit: dayjs.ManipulateType = "m"
) => dayjs().subtract(time, unit).format("HH:mm");

import moment from "moment";

export const getMonthList = () => {
  let periodList = [];

  for (let i = 0; i <= 23; i++) {
    periodList.push({
      name: moment().subtract(i, "months").format("MMM'YY"),
      value: moment().subtract(i, "months").format("MM/YY"),
    });
  }

  return periodList.reverse();
};

import moment from "moment";

export const getMonthSelectedList = (param, report) => {
  let periodList = [];

  for (let i = 0; i <= 15; i++) {
    periodList.push(
      report === "BI"
        ? moment(param, "MM/YYYY").subtract(i, "months").format("MMM-YYYY")
        : moment(param, "MM/YY").subtract(i, "months").format("MM/YY")
    );
  }

  return periodList.reverse();
};

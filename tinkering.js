 function getMonthShortName(monthNo) {
  const date = new Date();
  date.setMonth(monthNo - 1);

  return date;
}

console.log(getMonthShortName(1)); // Jan
console.log(getMonthShortName(2)); // Feb
console.log(getMonthShortName(3)); // Mar
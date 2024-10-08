//1154. Day of the Year easy
var dayOfYear = function(date) {
    const [year, month, day] = date.split('-').map(Number)
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        daysInMonth[1] = 29; 
    }
      let dayOfYear = day;

         for (let i = 0; i < month - 1; i++) {
        dayOfYear += daysInMonth[i];
    }

    return dayOfYear; 
};
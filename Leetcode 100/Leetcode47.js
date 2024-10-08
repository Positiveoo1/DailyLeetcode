// 3280. Convert Date to Binary EASY
var convertDateToBinary = function(date) {
    const [year, month, day] = date.split('-');
    const binaryYear = parseInt(year).toString(2);
   const binaryMonth = parseInt(month).toString(2);
   const binaryDay = parseInt(day).toString(2);
   return `${binaryYear}-${binaryMonth}-${binaryDay}`;
};
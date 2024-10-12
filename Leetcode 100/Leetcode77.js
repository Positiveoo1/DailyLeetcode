//1185. Day of the Week EASY 
var dayOfTheWeek = function(day, month, year) { 
    const date = new Date(year, month -1, day)
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = date.getDay();
    return dayNames[dayIndex];
}
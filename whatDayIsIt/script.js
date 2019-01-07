var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var monthNames = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var dateListing = daysOfWeek[currentDate.getDay()] + "day, " +date + " " + monthNames[month] + " " + year;
const dateDisplay = document.getElementById('dateDisplay');
dateDisplay.innerHTML = dateListing;

var now = new Date();
var nowTimeStamp = now.getTime();
var testDate = new Date("2019-04-25T08:29:00Z")
var testDateStamp = testDate.getTime();
var startDate = new Date ("2019-01-07T08:28:00Z");
var startDateTimeStamp = startDate.getTime();
var msDiff = Math.abs(now-startDateTimeStamp)
//var msDiff = Math.abs(testDate-startDateTimeStamp); //change to NOW
var dateDiff = Math.floor(msDiff/(1000*3600*24))
console.log(dateDiff);

var nDays = ["February 01, 2019", "February 18, 2019", "March 11, 2019","March 12, 2019","March 13, 2019", "March 14, 2019", "March 15, 2019", "April 19, 2019", "April 22, 2019", "May 03 2019", "May 20, 2019", "June 03, 2019","June 27, 2019","June 28, 2019"];
var passedNDays = 0;

for (var i=0; i < nDays.length; i++){
  if (now > new Date(nDays[i])){ //change to NOW
    passedNDays++;
    console.log("Passed a day; Total Days Passed: " + passedNDays); //works !
    //break?
  }
}

dateDiff -= passedNDays;
var datebox = document.getElementById('dayNum');
var numMap = ["Two", "One"]
datebox.innerHTML = numMap[dateDiff%2];

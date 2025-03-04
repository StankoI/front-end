
// sega me murzi da go refaktoriram shte e utre

document.getElementById("drop").addEventListener('click', () => {showWorkTimeTable()});
document.getElementById("lift").addEventListener('click', () => {showToDayWorkTime()});

let daysOfWeek = document.querySelectorAll('.date');
let workTimeDays = document.querySelectorAll('.day');

let toDayWorkTime = document.getElementById('show');
let workTimeTable = document.getElementById('table');

console.log(workTimeTable);

console.log(toDayWorkTime);

function setData()
{
    daysOfWeek.forEach((day) => {day.classList.remove("current")});
    let todayDate = new Date();

    let today = todayDate.getDay();

    if(today === 0){
        today = 6;
    }
    else{
        today--;
    }
    daysOfWeek[today].classList.add("current");

    workTimeDays.forEach((day) => {day.classList.remove("cur")});
    workTimeDays[today].classList.add("cur");
    
}

setData();

function showWorkTimeTable()
{
    toDayWorkTime.style.visibility = "hidden";
    workTimeTable.style.visibility = "visible";
}

function showToDayWorkTime()
{
    toDayWorkTime.style.visibility = "visible";
    workTimeTable.style.visibility = "hidden";
}




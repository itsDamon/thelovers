const actualTime = moment();

function daysDifferenceF(d) {
    let dayDifference = actualTime.diff(d, "days");
    return dayDifference;
}

function hoursDifferenceF(d){
    let hoursDifference = actualTime.diff(d, "hours") - actualTime.diff(d, "days")*24;
    return hoursDifference;
}

function minutesDifferenceF(d) {
    let minutesDifference = actualTime.diff(d, "minutes") - (actualTime.diff(d, "hours")*60);
    return minutesDifference;
}

function secondsDifferenceF(d) {
    let secondDifference = actualTime.diff(d, "seconds") - (actualTime.diff(d, "minutes")*60);
    return secondDifference;
}

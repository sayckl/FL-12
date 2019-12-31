function isLeapYear(data) {
    let year = new Date(data).getFullYear();
    let leapYear = new Date(year, 1, 29).getDate();

    if (isNaN(year)) {
        console.log('Invalid Date');
    } else if (leapYear === 29) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
isLeapYear();

const year = 3688;
let remainder = year % 4;
if(remainder == 0){
    console.log('Your year is a leap year.')
}
else{
    console.log('Your year is not a leap year.')
}

function isLeapYear(year){
    const remainder = year % 4;
    if(remainder == 0){
        return true;
    }
    else{
        return false;
    }
}
const check2000 = isLeapYear(2000);
console.log(check2000);
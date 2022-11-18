//1. Write a program which tells the number of days in a month.
let month = prompt('Enter Month')

month = month[0].toUpperCase() + month.substring(1).toLowerCase();
switch(month){
    case 'January':
        console.log(`${month} has 31 days`);
        break;
    case 'February':
        console.log(`${month} has 28 days`);
        break;
    case 'March':
        console.log(`${month} has 31 days`);
        break;
    case 'April':
        console.log(`${month} has 30 days`);
        break;
    case 'May':
        console.log(`${month} has 31 days`);
        break;
    case 'June':
        console.log(`${month} has 30 days`);
        break;
    case 'July':
        console.log(`${month} has 31 days`);
        break;
    case 'August':
        console.log(`${month} has 31 days`);
        break;
    case 'September':
        console.log(`${month} has 30 days`);
        break;
    case 'October':
        console.log(`${month} has 31 days`);
        break;
    case 'November':
        console.log(`${month} has 30 days`);
        break;
    case 'December':
        console.log(`${month} has 31 days`);
        break;
    default:
        console.log(`${month} is not a month`);
}

//2. Write a program which tells the number of days in a month, now consider leap year.

switch(month){
    case 'January':
        console.log(`${month} has 31 days`);
        break;
    case 'February':
        console.log(`${month} has 29 days`);
        break;
    case 'March':
        console.log(`${month} has 31 days`);
        break;
    case 'April':
        console.log(`${month} has 30 days`);
        break;
    case 'May':
        console.log(`${month} has 31 days`);
        break;
    case 'June':
        console.log(`${month} has 30 days`);
        break;
    case 'July':
        console.log(`${month} has 31 days`);
        break;
    case 'August':
        console.log(`${month} has 31 days`);
        break;
    case 'September':
        console.log(`${month} has 30 days`);
        break;
    case 'October':
        console.log(`${month} has 31 days`);
        break;
    case 'November':
        console.log(`${month} has 30 days`);
        break;
    case 'December':
        console.log(`${month} has 31 days`);
        break;
    default:
        console.log(`${month} is not a month`);
}
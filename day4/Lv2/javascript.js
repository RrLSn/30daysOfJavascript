/*1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/

let grade = prompt('Enter Your Score')
if (grade >= 80 && grade <=100){
    console.log('A');
}
else if (grade >= 70 && grade <= 79){
    console.log('B');
}

else if (grade >= 60 && grade <= 69){
    console.log('C');
}

else if (grade >= 50 && grade <= 59){
    console.log('D');
}
else if (grade >= 0 && grade <= 49){
    console.log('F');
}
else{
    console.log('is not a grade')
}

/*2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/
let season = prompt('Enter Month')
switch (season){
    case 'September':
        console.log('Autumn');
        break;
    case 'October':
            console.log('Autumn');
            break;
    case 'November':
        console.log('Autumn');
        break;  
    case "December":
        console.log('Winter');
        break;
    case "January":
        console.log('Winter');
        break;
    case "February":
        console.log('Winter');
        break;
    case "March":
        console.log('Spring');
        break;
    case "April":
        console.log('Spring');
        break;
    case "May":
        console.log('Spring');
        break;
    case "June":
        console.log('Summer');
        break;
    case "July":
        console.log('Summer');
        break;
    case "August":
        console.log('Summer');
        break;
    default:
        console.log(`${season} is not a season`)
}

//3. Check if a day is weekend day or a working day. Your script will take day as an input.
let checkDay = prompt('What Day is Today')
switch (checkDay){
    case 'Sunday':
        console.log(`${checkDay} is Weekend`);
        break;
    case 'Monday':
        console.log(`${checkDay} is a working day`);
        break;
    case 'Tuesday':
        console.log(`${checkDay} is a working day`);
        break;
    case 'Wednesday':
        console.log(`${checkDay} is a working day`);
        break;
    case 'Thursday':
        console.log(`${checkDay} is a working day`);
        break;
    case 'Friday':
        console.log(`${checkDay} is a working day`);
        break;
    case 'Sunday':
        console.log(`${checkDay} is Weekend`);
        break;
    default:
        console.log(`${checkDay} is not a Day`)    
}
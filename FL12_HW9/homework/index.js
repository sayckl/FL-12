// Your code goes here

function convert(...args){
    let convertArray = [...args];
    let convertResult = [];

    for(let i = 0; i < convertArray.length; i++){
        if(typeof convertArray[i] === 'string'){
            convertResult.push(Number(convertArray[i]));
        }else if(typeof convertArray[i] === 'number'){
            convertResult.push(String(convertArray[i]));
        }
    }
    return convertResult;
}
convert();
//
function executeforEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}
executeforEach();
//
function mapArray(array, func) {
    let mapResult = [];
    executeforEach(array, function (el) {
        mapResult.push(func(parseInt(el)));
    });
    return mapResult;
}

mapArray();
//
function filterArray(args, func) {
    let array = []; 
    let filterResult = [];

    executeforEach(args, (el) => {
        array.push(func(el));
    });

   for(let i = 0; i < array.length; i++){
     if(array[i]) {
        filterResult.push(args[i]);
     }
   } 
    return filterResult;
}
filterArray();
//
function flipOver(str) {
        return str.split('').reverse().join('');
    }
flipOver('hey world');
//
function makeListFromRange(args) {
    let list = [];
    for (let i = args[0]; i <= args[1]; i++) {
        list.push(i);
    }
    return list;
}
makeListFromRange();
//
function getArrayOfKeys(args, key) {
    let result = [];
    executeforEach(args, function(el) {
        result.push(el[key]);
    });
    return result;
}
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

getArrayOfKeys(actors, 'name');
//
function substitute(array) {
    let numArray = [];
    let number = 30;
    mapArray(array, function (el) {
        if (el < number) {
            el = '*';
        }
        numArray.push(el);
    });
    return numArray;
}
substitute(); 
//
function getPastDay(defaultDate, daysAgo) {
    const miliseconds = 86400000;
    const defaultMiliseconds = defaultDate.valueOf();
    const searchedDate = new Date(defaultMiliseconds - miliseconds * daysAgo);
    return searchedDate.getDate();
}
//
function formatDate(inputDate) {
    const format = 10;
    const date = `${inputDate.getFullYear()}/${inputDate.getMonth() + 1}/${inputDate.getDate()} `;
    const hours = `${inputDate.getHours() < format ? '0' + inputDate.getHours() : inputDate.getHours()}:`;
    const minutes = `${inputDate.getMinutes() < format ? '0' + inputDate.getMinutes() : inputDate.getMinutes()}`;
    return date + hours + minutes;
}

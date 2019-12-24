// Your code goes here

var a = prompt("Enter lenght of 'a' side of triangle");
var b = prompt("Enter lenght of 'b' side of triangle");
var c = prompt("Enter lenght of 'c' side of triangle");

if ( !a.match(/\d/g) || !b.match(/\d/g) || !c.match(/\d/g) ) {
    console.log('You should use only numbers!');
} else if ( a === 0 || b === 0 || c === 0 ) {
    alert('A triangle must have 3 sides with a positive definite length!');
} else if ( (a === '' || undefined) || (b === '' || undefined) || (c === '' || undefined) ) {
        alert('input values should be ONLY numbers ');
}else{
    if( a + b < c || b + c < a || a + c < b ){
        alert('Triangle doesn’t exist');
    }else if( a === b && b === c && c === a ){
        console.log('Equilateral triangle');
    }else if( a === b || b === c || c === a ){
        console.log('Isosceles triangle');
    }else if( a !== b && b !== c && c !== a ){
        console.log('Scalene triangle');
    }
}

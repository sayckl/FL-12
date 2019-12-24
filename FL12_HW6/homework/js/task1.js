// Your code goes here

var a = prompt("Enter 'a' coef for the quadratic equation:");
var b = prompt("Enter 'b' coef for the quadratic equation:");
var c = prompt("Enter 'c' coef for the quadratic equation:");

var D = b*b-(4*a*c);

if ( !a.match(/\d/g) || !b.match(/\d/g) || !c.match(/\d/g) ) {
    console.log('You should use only numbers!');
} else if ( a == 0 ) {
    console.log('Use other numbers for "a"!');
} else if ( D !== 0 ) {
    if ( D > 0 ) {
        var value1 = (-b + Math.sqrt(D)) / (2 * a);
        var value2 = (-b - Math.sqrt(D)) / (2 * a);
        console.log('x1=' + value1);
        console.log("and x2=" + value2);
    } else if ( D < 0 ) {
        console.log('No solution!');
    }
} else if ( D === 0 ) {
    value1 = - ( b / ( 2 * a ));
    value2 = value1;
    console.log('x1=' + value1);
    console.log("and x2=" + value2);
}else{
    console.log('No solution!');
}

function pipe(x,...args) {
    let resultOfArgs = x;
    args.forEach(element => {
        resultOfArgs = element(resultOfArgs);
    });
    return resultOfArgs;
}

function addOne(x) {
    return x + 1;
  }
  
pipe(1, addOne); //=> 2
pipe(1, addOne, addOne); //=> 3

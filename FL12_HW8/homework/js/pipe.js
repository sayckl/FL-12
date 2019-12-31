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
  
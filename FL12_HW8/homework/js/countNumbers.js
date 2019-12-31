function countNumbers(args) {
    let a = args.replace(/[^\d;]/g, '');
    let result = a.split('');
    let b = result.reduce(function(acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
      }, {});
      return b;
}

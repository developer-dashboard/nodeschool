var total = process.argv.slice(2).reduce(
  (acc, val) => acc + Number(val),
  0
);

console.log(total);

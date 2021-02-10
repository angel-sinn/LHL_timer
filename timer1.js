const args = process.argv;
const number = args
  .slice(2)
  .filter((number) => number >= 0)
  .filter((number) => !isNaN(number));

// console.log(number);

const timer = function () {
  for (const num of number) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, num * 1000);
  }
};

timer();

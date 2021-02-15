const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

const timer = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

stdin.on("data", (key) => {
  if (key === "b") {
    process.stdout.write("\x07");
  } else if (timer.includes(key)) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, key * 1000);
  } else if (key === "\u0003") {
    console.log(`Thanks for using me, ciao!`);
    process.exit();
  } else {
    return;
  }
});

const fs = require("fs");
fs.writeFile("first.txt", "Hello Nabaraj I am a Async FS.", (err) => {
  console.log("Added");
});

//TO APPEND THE TEXT IN THE SAME FILE
fs.appendFile("first.txt", " I am append to the last of the file.", (err) => {
  console.log("Appeded");
});
const data = fs.readFile("first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Reading File.....");
    console.log(data);
  }
});

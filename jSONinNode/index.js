//CONVERTING OBJ TO JSON

const fs = require("fs");
const bioData = {
  name: "Nabaraj",
  age: 27,
};
// console.log(bioData);
// let jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// let parseData = JSON.parse(jsonData);
// console.log(parseData);

const jsonData = JSON.stringify(bioData);
//TASK
fs.writeFile("first.json", jsonData, () => {
  console.log("Added");
});

fs.readFile("first.json", "utf-8", async (err, data) => {
  //console.log(data);
  if (err) {
    console.log(err);
  } else {
    const originalData = await JSON.parse(data);
    console.log(originalData);
  }
});

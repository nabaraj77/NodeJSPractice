const EventEmitter = require("events");
const event = new EventEmitter();

//REGISTERING FOR THE EVENTS TO BE FIRED ONLY ONCE
event.on("sayYourName", () => {
  console.log("Your Name is Nabaraj");
});
event.emit("sayYourName");

//CREATE AN EVENT EMITTER INSTANCE AND REGISTER A COUPLE OF CALLBACKS
event.on("sayYourName", () => {
  console.log("Your Name is Nabaraj");
});
event.on("sayYourName", () => {
  console.log("Your Name is Dahal");
});
event.on("sayYourName", () => {
  console.log("Your Name is Nabaraj Dahal");
});
event.emit("sayYourName");

//REGISTERING FOR THE EVENTS WITH CALL BACK PARAMETERS
event.on("checkPage", (sc, msg) => {
  console.log(`Ypur code is ${sc} and msg is ${msg}`);
});
event.emit("checkPage", 200, "ok");

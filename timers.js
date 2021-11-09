"use strict";

const timers = require("timers");

console.log(Object.keys(timers));

console.log(
  "setTimeout === timers.setTimeout = " + (setTimeout === timers.setTimeout)
);

console.dir({ setTimeout: setTimeout(() => {}, 0) });
console.dir({ setInterval: setInterval(() => {}, 0) });
console.dir({ setImmediate: setImmediate(() => {}, 0) });
console.dir({ nextTick: process.nextTick(() => {}, 0) });

const { active, _unrefActive } = timers;
console.dir({active,_unrefActive,});

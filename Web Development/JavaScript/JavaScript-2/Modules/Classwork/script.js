// 1.
import { PI, AreaOfCircle } from "./mathUtils";
let radius = 5;
const calculateAreaOfCircle = (radius) => {
  return PI * radius * radius;
};
console.log(calculateAreaOfCircle(radius));

// 2.
import { capitalizeFirstLetter } from "./stringUtils";
let string = "hello";
console.log(capitalizeFirstLetter(string));

// 3.
// radius = 7;
// console.log(AreaOfCircle(radius));

// 4.
import './deferredModule.js';

// 5.
//used in moduleB.js

// 6.
import { testStrictMode } from "./strictModeModule.js";
testStrictMode();

// 7.
// done in other files

// 8.
import {apiUrl, apiKey, timeout, retries} from "./configManager.js";
console.log(apiUrl);
console.log(apiKey);
console.log(timeout);
console.log(retries);

// 9.
import { getPrivateVar } from "./encapsulationModule.js";
console.log(getPrivateVar());
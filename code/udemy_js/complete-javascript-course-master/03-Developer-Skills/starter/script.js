// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const tempratures = [3, -2, -6, "error", 9, 13, 17, 15, 14, 9, 5];
const rishi = [1, 56, 34, 66, 69, "rishi", 43, "lol"];
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: prompt("Degrees celsius:"),
    value: 10,
  };

  const kelvin = Number(measurement.value) + 273;

  return kelvin;
};

console.log(measureKelvin());

//using a debugger
const calcTempAmplitudeBug = function (temps1, temps2) {
  const merger = temps1.concat(temps2);
  let max = merger[0];
  let min = merger[0];

  for (let i = 1; i < merger.length; ++i) {
    const currentTemp = merger[i];
    if (merger[i] === "string") continue;
    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitudeBug(tempratures, rishi));
calcTempAmplitudeBug(tempratures, rishi);

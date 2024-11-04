//Made a new let varibale called "kelvin"
let kelvin = 0;
console.log(kelvin);
//Made a new let varibale called "celsius" which is  kelvin - 273
let celsius = kelvin - 273;
console.log(celsius);
//Made a new let varibale called "fahrenheit" which is  celsius * (9/5) +32 that is rounded down to the nearest whole number
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
console.log(fahrenheit);
// Made a new let varibale called "newton" which is  celsius * (33/100) that is rounded down to the nearest whole number
let newton = Math.floor(celsius * (33 / 100));
console.log(newton)

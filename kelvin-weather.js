/* declares constant of kelvin and assigns it the value 293 which is constant*/
const kelvin = 293;

// subtracts 293- 273//
let celsius = Math.abs(kelvin - 273);

// calculates farenheit based on the fomula used considering celslius then floors the decimal to make it an interger//
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Farenheit.`);

let newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${newton} degrees Newton.`) 
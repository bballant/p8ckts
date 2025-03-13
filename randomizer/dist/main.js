#!/usr/bin/env node
// for running as npx package after building
const getRandomElement = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};
console.log(process.argv);
if (process.argv.length < 3) {
    console.error("Please provide a list of strings.");
    process.exit(1);
}
const inputStrings = process.argv.slice(2);
console.log(getRandomElement(inputStrings));
export {};


// Define an array
const color = orange

const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
alert(colors)

// Select elements by index
const selectedColors = [
  colors[0], // Selects "red"
  colors[2], // Selects "blue"
  colors[4]  // Selects "purple"
];

alert(selectedColors); // Output: ["red", "blue", "purple"]






// Define an array of numbers
const numbers = [10, 20, 30, 40, 50, 60, 70, 80];

// Select elements with even indexes
const evenIndexNumbers = numbers.filter((_, index) => index % 2 === 0);

console.log(evenIndexNumbers); // Output: [10, 30, 50, 70]

// Select elements with odd indexes
const oddIndexNumbers = numbers.filter((_, index) => index % 2 !== 0);

console.log(oddIndexNumbers); // Output: [20, 40, 60, 80]


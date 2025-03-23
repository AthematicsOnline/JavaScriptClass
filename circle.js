// Function to calculate the perimeter (circumference) of a circle
function calculatePerimeter(radius) {
    return 2 * Math.PI * radius;
  }
  
  // Function to calculate the area of a circle
  function calculateArea(radius) {
    return Math.PI * radius * radius;
  }
  
  // Function to prompt the user for the radius and then calculate and display the perimeter and area
  function calculateCircleProperties() {
    let radius = parseFloat(prompt("Enter the radius of the circle:"));
  
    if (isNaN(radius) || radius <= 0) {
      alert("Please enter a valid positive number for the radius.");
      return;
    }
  
    let perimeter = calculatePerimeter(radius);
    let area = calculateArea(radius);
  
    alert("Radius: " + radius);
    alert("Perimeter (Circumference): " + perimeter);
    alert("Area: " + area);
  }
  
  // Run the function to calculate and display the circle properties
  calculateCircleProperties();
  
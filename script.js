// Part 2: Functions, Scope, Parameters & Return

// A function with parameters and return value
function calculateSum(a, b) {
  return a + b;
}

// Local vs Global Scope Example
let globalMessage = "I am global";

function scopeDemo() {
  let localMessage = "I am local";
  console.log(globalMessage); // Accessible
  console.log(localMessage);  // Only inside function
}

// Run scope demo
scopeDemo();

// Handling form submission
document.getElementById("calcForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  let result = calculateSum(num1, num2); // using return value
  document.getElementById("result").textContent = "Sum: " + result;
});

// Part 3: Combining CSS Animations with JavaScript
const jsBox = document.getElementById("jsBox");
document.getElementById("animateBtn").addEventListener("click", function() {
  jsBox.classList.toggle("animate"); // Add/remove class to trigger CSS animation
});

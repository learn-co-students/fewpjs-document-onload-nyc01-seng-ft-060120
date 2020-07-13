// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
  let cool = document.getElementById('text')

  cool.textContent = 'This is really cool!'
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

function updateDOM() {
    let cool = document.getElementById("text");
    
    cool.textContent = `This is really cool!`;
}

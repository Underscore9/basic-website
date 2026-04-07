counter = 0;
const counterElement = document.getElementById("counter");
function increment() {
    counter = counter + 1;
    counterElement.innerHTML = "Widget: " + counter;
    if (counter <= 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "green";
    }
}
function autoclick() { 
    counter = counter - 64;
    setInterval(increment, 1000);
}


/*
Feature:
Toggle Dark/Light Mode

Research Source:
https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp 

What I Learned:
I learned how to use JavaScript to toggle a CSS class on the body element.
I made a button that toggles the dark and light mode on the webpage.
I used the `classList.toggle` to switch between dark and light mode
whenever the feature button is clicked.
*/




document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("message").textContent = "The button has been clicked!";
    console.log("Start button clicked");
});

function toggleDarkLight() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    console.log("feature button clicked");
}
document.getElementById("featureButton").addEventListener("click", toggleDarkLight);


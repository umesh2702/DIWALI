// Select elements
const rocket = 
document.getElementById("rocket");
const fireworks =
 document.getElementById("fireworks");
const diwaliText = 
document.getElementById("diwaliText");

// Launch the rocket
function launchRocket() {
  rocket.style.transform = 
  "translateY(-350px)"; // Moves rocket upwards
  setTimeout(() => {
    // Hide the rocket after reaching the top
    rocket.style.display = "none";
    
    // Display fireworks and text after rocket reaches the top
    fireworks.style.display = "block";
    diwaliText.style.opacity = "1";
  }, 1500); // Fireworks appear after 1.5s (matches rocket launch duration)
}

// Trigger launch on page load
window.onload = () => {
  setTimeout(launchRocket, 500); // Delay to start animation
};

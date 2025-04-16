const button = document.getElementById("hi");

// Create image element
const img = document.createElement("img");
img.id = "toggle-img";
img.src = "./images/hi.png";

// Initial animation
img.style.animation = "fadeInZoom 0.5s ease-out";

// Create dynamic message
const message = document.createElement("p");
message.id = "end-message";
message.textContent = "🎉 Greetings from Tom";
Object.assign(message.style, {
  display: "none",
  fontSize: "24px",
  color: "white",
  marginTop: "20px",
  textAlign: "center",
});

// Append message to the DOM once
const main = document.querySelector("main");
main.appendChild(message);

// Button click ➜ show image
button.addEventListener("click", () => {
  button.style.display = "none";
  message.style.display = "none";
  main.appendChild(img);

  // Delay spin + message
  setTimeout(() => {
    img.style.animation = "spinAndShrink 1.5s ease-out forwards";

    setTimeout(() => {
      message.style.display = "block";
    }, 1500);
  }, 4000);
});

// Click image ➜ reset
img.addEventListener("click", () => {
  img.remove();
  button.style.display = "flex";
  message.style.display = "none";
  img.style.animation = "fadeInZoom 0.5s ease-out";
});

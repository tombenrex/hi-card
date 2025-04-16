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

img.addEventListener("click", () => {
  img.remove();
  button.style.display = "flex";
  message.style.display = "none";
  img.style.animation = "fadeInZoom 0.5s ease-out";
});

button.addEventListener("mouseenter", () => {
  button.style.animation =
    "flyAcrossScreen 8s cubic-bezier(0.32, 0.01, 0.44, 1.07) forwards";
});

button.addEventListener("mouseleave", () => {
  button.style.animation = "none";
  button.offsetHeight;
  button.style.animation =
    "flyAcrossScreen 8s cubic-bezier(0.32, 0.01, 0.44, 1.07) forwards";
});

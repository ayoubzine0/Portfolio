// Greeting
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded successfully!");
});

// Popup System
const popup = document.getElementById("popup");
const popupContent = document.querySelector(".popup-content");
const closeBtn = document.querySelector(".close-btn");

// Open popup
document.querySelectorAll(".popup-trigger").forEach((item) => {
  item.addEventListener("click", () => {
    const type = item.getAttribute("data-type");
    const src = item.getAttribute("data-src");
    popup.classList.add("active");

    if (type === "image") {
      popupContent.innerHTML = `<img src="${src}" alt="Project Image" />`;
    } else if (type === "video") {
      popupContent.innerHTML = `
        <video controls autoplay loop>
          <source src="${src}" type="video/mp4">
          Your browser does not support video playback.
        </video>`;
    }
  });
});

// Close popup
closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
  popupContent.innerHTML = "";
});

// Close when clicking outside content
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
    popupContent.innerHTML = "";
  }
});

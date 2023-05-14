const video = document.getElementById("myVideo");
const button = document.getElementById("myButton");
const overlay = document.querySelector(".overlay");
const follower = document.getElementById("follower");

video.addEventListener("ended", function () {
  overlay.classList.add("fade-in");
  setTimeout(function () {
    overlay.classList.remove("fade-in");
    button.classList.remove("hidden");
    video.classList.add("hidden");
  }, 1000);
});

button.addEventListener("click", function () {
  window.location.href = "/about.html";
});



video.addEventListener("ended", function () {
  playButton.style.display = "block";
});




document.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    follower.style.transform = `translate(${x}px, ${y}px) scale(1)`;
    follower.style.opacity = 1;
});

document.addEventListener("mouseleave", function(event) {
    follower.style.opacity = 0;
});

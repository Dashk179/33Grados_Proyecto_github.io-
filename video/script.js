const video = document.getElementById("myVideo");
const button = document.getElementById("myButton");
const overlay = document.querySelector(".overlay");
const follower = document.getElementById("follower");
const textElement = document.getElementById("textElement");

video.addEventListener("loadedmetadata", function() {
  setTimeout(function() {
    overlay.classList.add("fade-in");
    setTimeout(function() {
      overlay.classList.remove("fade-in");
      button.classList.remove("hidden");
      video.classList.add("hidden");
      textElement.textContent = "Proximamente";
      textElement.style.display = "block";
    }, 5);
  }, 26); // Retraso de 3000 milisegundos (3 segundos)
});



// button.addEventListener("click", function () {
//     // Obtener el elemento donde se mostrará el texto
//     var textElement n= document.getElementById("textElement");
  
//     // Actualizar el contenido del elemento con el texto deseado
//     textElement.textContent = "Proximamente";
// });



document.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  follower.style.transform = `translate(${x}px, ${y}px) scale(1)`;
  follower.style.opacity = 1;
});

document.addEventListener("mouseleave", function(event) {
  follower.style.opacity = 0;
});
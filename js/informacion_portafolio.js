document.addEventListener('DOMContentLoaded', function () {
     const productDetailsContainer = document.querySelector('.pr-det_container');
   const index = new URLSearchParams(window.location.search).get('index');

   fetch('js/informacion.json')
   .then(response => response.json())
      .then(data => {
         // Actualizar contenido HTML con datos del archivo JSON según el índice
         const titleElement = productDetailsContainer.querySelector('#title');
         titleElement.textContent = data[index].title;

         const descriptionElement = productDetailsContainer.querySelector('#description');
         descriptionElement.innerHTML = ""; // Limpiar contenido previo

         data[index].description.forEach(paragraph => {
            const p = document.createElement('p');
            p.textContent = paragraph;
            descriptionElement.appendChild(p);
         });

         const arquitectoElement = productDetailsContainer.querySelector('#arquitecto');
         arquitectoElement.textContent = data[index].arquitecto;

         const ccolaboradoresElement = productDetailsContainer.querySelector('#colaboradores');
         ccolaboradoresElement.textContent = data[index].colaboradores;

         const lugarElement = productDetailsContainer.querySelector('#lugar');
         lugarElement.textContent = data[index].lugar;

         const fechaElement = productDetailsContainer.querySelector('#fecha');
         fechaElement.textContent = data[index].fecha;

         const superficeElement = productDetailsContainer.querySelector('#superficie');
         superficeElement.textContent = data[index].superficie;

         
         const renderElement = productDetailsContainer.querySelector('#render');
         renderElement.textContent = data[index].render;

         // Mostrar el contenedor de detalles del producto
         productDetailsContainer.style.display = 'block';
      }).catch(error => console.error('Error al cargar el archivo JSON', error));

      const imagenDetailsContainer = document.querySelector('.swiper-wrapper');

      fetch('js/imagenes_detalles.json')
      .then(response => response.json())
      .then(data => {
          // Asegurémonos de que el índice sea válido
        
              const imgElement = document.querySelector('#img1');
              imgElement.src = data[index].img1;
  
              const img2Element = document.querySelector('#img2');
              img2Element.src = data[index].img2;
  
              const img3Element = document.querySelector('#img3');
              img3Element.src = data[index].img3;
  
              const img4Element = document.querySelector('#img4');
              img4Element.src = data[index].img4;
              
              const img5Element = document.querySelector('#img5');
              img5Element.src = data[index].img5;
  
              
              const img6Element = document.querySelector('#img6');
              img6Element.src = data[index].img6;
  
              
              const img7Element = document.querySelector('#img7');
              img7Element.src = data[index].img7;
                
              const img8Element = document.querySelector('#img8');
              img8Element.src = data[index].img8;
                
              const img9Element = document.querySelector('#img9');
              img9Element.src = data[index].img9;
                
              const img10Element = document.querySelector('#img10');
              img10Element.src = data[index].img10;
                
              const img11Element = document.querySelector('#img11');
              img11Element.src = data[index].img11;

              const img12Element = document.querySelector('#img12');
              img12Element.src = data[index].img12;

              const img13Element = document.querySelector('#img13');
              img13Element.src = data[index].img13;
              
              const img14Element = document.querySelector('#img14');
              img14Element.src = data[index].img14;

              const img16Element = document.querySelector('#img16');
              img16Element.src = data[index].img16;

              const img17Element = document.querySelector('#img17');
              img17Element.src = data[index].img17;

              const img18Element = document.querySelector('#img18');
              img18Element.src = data[index].img18;

              const img19Element = document.querySelector('#img19');
              img19Element.src = data[index].img19;
  
              
         
      })
      .catch(error => {
          console.error('Error al cargar el JSON:', error);
      });

      fetch('js/axonometricos.json')
      .then(response => response.json())
      .then(data => {
          // Asegurémonos de que el índice sea válido
        
              const axonometrico1Element = document.querySelector('#axonometrico1');
              axonometrico1Element.src = data[index].axonometrico1;
  
              const axonometrico2Element = document.querySelector('#axonometrico2');
              axonometrico2Element.src = data[index].axonometrico2;
         
               // Después de cargar los datos, cargar el script 'js/scripts.js' con un retraso de 10 segundos
            setTimeout(function () {
               var script = document.createElement('script');
               script.src = 'js/scripts.js';
               document.head.appendChild(script);
           }, 2500); // 10000 milisegundos (10 segundos)
  
      })
      .catch(error => {
          console.error('Error al cargar el JSON:', error);
      });

   // Ocultar el contenedor de detalles del producto cuando se hace clic en el botón "Close Details"
   const closeButton = productDetailsContainer.querySelector('.cpr_det');
   closeButton.addEventListener('click', function() {
      productDetailsContainer.style.display = 'block';
   });




});

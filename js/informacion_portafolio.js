window.onload = function() {
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

         const locationElement = productDetailsContainer.querySelector('#arquitecto');
         locationElement.textContent = data[index].arquitecto;

         const categoryElement = productDetailsContainer.querySelector('#colaboradores');
         categoryElement.textContent = data[index].colaboradores;

         const modelElement = productDetailsContainer.querySelector('#lugar');
         modelElement.textContent = data[index].lugar;

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
  
              
         
      })
      .catch(error => {
          console.error('Error al cargar el JSON:', error);
      });

   // Ocultar el contenedor de detalles del producto cuando se hace clic en el botón "Close Details"
   const closeButton = productDetailsContainer.querySelector('.cpr_det');
   closeButton.addEventListener('click', function() {
      productDetailsContainer.style.display = 'none';
   });
}
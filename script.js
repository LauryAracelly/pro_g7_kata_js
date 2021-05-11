console.log('hola desde peliculas');

const JSON_LOCAL = 'peliculas.json';

fetch(JSON_LOCAL)
  .then(response => response.json())
  .then(peliculas => {
    console.log(peliculas);
   
    // Imprimiendo con un forEach
    peliculas.forEach(pelicula => {
        console.log(pelicula.peliculaNombre)
    });
  })
  .catch(error => {
    console.log(error);
  })


  let promptPelis = 'peliculaNombre';
  let gen = 'genero';

  if (promptPelis == 'peliculaNombre') {
      alert('Bienvenido a +PixelFLIX aqui encontraras las mejores peliculas en JSON LOCAL');
  } else  {
      alert ('Deja algun Valor');
  }

    var person = prompt("Queremos saber tu Nickname", "Nickname");
    if (person != null) {
      document.getElementById("respuestaNickname").innerHTML =
      "Hello " + person + "! acabas de entrar a la mejor APP en DevF totalmente gratis ";
    }
  
  

  


    

 //console.log();


 /* const buscador = document.querySelector('#buscador');
  const boton = document.querySelector('#boton');

  boton.addEventListener('click',filtrar);

  const filtrar = ()=>{
   // console.log(buscador.value);
   const texto = buscador.value();
   for (let pelicula of peliculas){
  let nombre = pelicula.peliculaNombre();
  
   }
  }
*/
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



  $(document).ready(function(){
   $('#search').keyup(function(){
   $('result').html('');
   var searchField =('#search').val();
   var expression = 
});
  });
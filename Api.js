const Peliculas = async() => {

       try {
        const respuesta = await fetch ('https://api.themoviedb.org/3/movie/popular?api_key=fe06c97f41e39fe84c00512e926586db')
        console.log(respuesta);

        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let movies = '';
            datos.results.forEach(pelicula => {
                movies +=`
                <div class="pelicula">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></img>
                    <h3 class="titulo">${pelicula.title}</h3>
                    </div>
                `;
            });

            document.getElementById('contenedor').innerHTML = movies;

           
        }else if(respuesta.status === 404) {
            console.log('no existe');
        }else{
            console.log('mal');
        }

        

       } catch(error){
        console.log(error);
       }
   
   
}



Peliculas();


//https://www.themoviedb.org/movie/763165-the-burial?
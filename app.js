const MOVIE_API_KEY = "ae754c3e0709266b0133438020625c67";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/original";

let elMoviesList = document.querySelector(".movies-list");
let elMovieTemplate = document.querySelector(".movie-card").content;
// console.log(elMoviesTemplate);


async function request(url, options) {
  let request = await fetch(url, options);
  let data = await request.json();
  // console.log(data);
  return data;
}

async function getMoviesList() {
  let url = BASE_URL + "/list/1?api_key=" + MOVIE_API_KEY;
  let movies = await request(url, {
    method: "GET",
  });
  renderData(movies.items);
}

function renderData(movies){
  movies.forEach((movie) =>{
    let elMovie = elMovieTemplate.cloneNode(true)
    console.log(movie, elMovie);
    let title = elMovie.querySelector('.card-title');
     title.textContent = movie.original_title;
    let images = elMovie.querySelector('.images');
    images.src = IMG_URL + movie.poster_path;
    elMoviesList.append(elMovie);
  });
}

getMoviesList();
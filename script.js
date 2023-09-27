let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
let films = {

};
let arr = [];

let lastFilm = prompt("Один из последних просмотренных фильмов?");
let gradeFilm = prompt("На сколько оцените его?");

films[lastFilm] = gradeFilm;

let personalMovieDB = {
    count: numberOfFilms,
    movies: films,
    actors: films,
    genres: arr,
    privat: false,
};
console.log(personalMovieDB.movies);

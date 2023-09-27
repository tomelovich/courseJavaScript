const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let films = {

};
let arr = [];

let a = prompt("Один из последних просмотренных фильмов?", "");
let b = +prompt("На сколько оцените его?","");
let c = prompt("Один из последних просмотренных фильмов?", "");
let d = +prompt("На сколько оцените его?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: arr,
    privat: false
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

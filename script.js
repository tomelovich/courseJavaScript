let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Один из последних просмотренных фильмов?", "");
        let b = +prompt("На сколько оцените его?", "");
        if (a != "" && a.length < 50 && a != null && b != "" && b < 50 && !isNaN(b) && b != null) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Мало");
    } else if ((personalMovieDB.count > 9) && (personalMovieDB.count < 31)) {
        console.log("Классика");
    } else if (personalMovieDB.count > 30) {
        console.log("Киноман");
    } else {
        console.log("Error!");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }    
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${1 + i}?`, "");
    }
    
}

writeYourGenres();

console.log(personalMovieDB);
let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function start() {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Один из последних просмотренных фильмов?", "");
            let b = +prompt("На сколько оцените его?", "");
            if (a != "" && a.length < 50 && a != null && b != "" && b < 50 && !isNaN(b) && b != null) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Мало");
        } else if ((personalMovieDB.count > 9) && (personalMovieDB.count < 31)) {
            console.log("Классика");
        } else if (personalMovieDB.count > 30) {
            console.log("Киноман");
        } else {
            console.log("Error!");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }    
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${1 + i}?`, "");
            if (genre == null || genre == "") {
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }
        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
console.log(personalMovieDB);



const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let arr = [];

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: arr,
    privat: false
};

for (let i = 1; i<3; i++) {
    let a = prompt("Один из последних просмотренных фильмов?", "");
    let b = +prompt("На сколько оцените его?","");
    if ((a == "" || a.length > 50) || (b == "" || b.length > 50)) {
        i--;
    }
    else {
        personalMovieDB.movies[a] = b;
    }
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log("Мало");
}
else if ((personalMovieDB.count > 9) && (personalMovieDB.count < 31)) {
    console.log("Классика");
}
else {
    console.log("Киноман");
}
// let i=1;

// while (i<3) {
//     let a = prompt("Один из последних просмотренных фильмов?", "");
//     let b = +prompt("На сколько оцените его?","");
//     if ((a == "" || a.length > 50) || (b == "" || b.length > 50)) {
//         i--;
//     }
//     else {
//         i++;
//         personalMovieDB.movies[a] = b;
//     }
// }
// console.log(personalMovieDB);
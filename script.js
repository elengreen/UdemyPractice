"use strict"; //директива, отслеживающая, что код работает по правилам современных стандартов
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (numberOfFilms < 10){
    alert("Просмотрено довольно мало фильмов");
} else if (9 < numberOfFilms && numberOfFilms < 31){
    alert("Вы классический зритель");
} else if (numberOfFilms > 30){
    alert("Вы киноман");
} else {
    alert("произошла ошибка");
}

for (let i = 0; i < 2; i++){
    const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
    rating = prompt('На сколько оцените его?', '');
    if (lastFilm != null && rating != null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = rating;
    }
    else i--;
}

console.log(personalMovieDB);
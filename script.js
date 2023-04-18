"use strict"; //директива, отслеживающая, что код работает по правилам современных стандартов
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilmFirst = prompt('Один из последних просмотренных фильмов?', ''),
      ratingFirst = prompt('На сколько оцените его?', ''),
      lastFilmSecond = prompt('Один из последних просмотренных фильмов?', ''),
      ratingSecond = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilmFirst] = ratingFirst;
personalMovieDB.movies[lastFilmSecond] = ratingSecond;
console.log(personalMovieDB);
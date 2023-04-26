"use strict"; //директива, отслеживающая, что код работает по правилам современных стандартов
let numberOfFilms;

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

detectPersonalLevel();

rememberMyFilms();

writeYourGenres();

showMyDB(personalMovieDB.privat);





function start(){
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");

    while(numberOfFilms =="" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");
    }
    
}

function detectPersonalLevel(){
    if (numberOfFilms < 10){
        alert("Просмотрено довольно мало фильмов");
    } else if (9 < numberOfFilms && numberOfFilms < 31){
        alert("Вы классический зритель");
    } else if (numberOfFilms > 30){
        alert("Вы киноман");
    } else {
        alert("произошла ошибка");
    }
}

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
        rating = prompt('На сколько оцените его?', '');
        if (lastFilm != null && rating != null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = rating;
        }
        else i--;
    }
}

function showMyDB(isPrivate){
    if (isPrivate === false){
        console.log(personalMovieDB);
    } else console.log("Access is denied");
}

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр #${i+1}?`, '');
    }
}
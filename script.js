/* Задание:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

//РЕЗУЛЬТАТ
"use strict"; //директива, отслеживающая, что код работает по правилам современных стандартов
let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start : function(){
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");

    while(numberOfFilms =="" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");
    }
    },
    detectPersonalLevel : function(){
        if (numberOfFilms < 10){
            alert("Просмотрено довольно мало фильмов");
        } else if (9 < numberOfFilms && numberOfFilms < 31){
            alert("Вы классический зритель");
        } else if (numberOfFilms > 30){
            alert("Вы киноман");
        } else {
            alert("произошла ошибка");
        }
    },
    rememberMyFilms : function(){
        for (let i = 0; i < 2; i++){
        const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
        rating = prompt('На сколько оцените его?', '');
        if (lastFilm != null && rating != null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = rating;
        }
        else i--;
    }
    },
    showMyDB : function(isPrivate){
        if (isPrivate === false){
            console.log(personalMovieDB);
        } else console.log("Access is denied");
    },
    writeYourGenres : function(){
        for(let i = 0; i < 3; i++){
            let genre = prompt(`Ваш любимый жанр #${i+1}?`, '');
            if (genre === '' || genre === null) {
                alert('Введены некорректные данные, попробуйте еще раз');
                i--;
            } else personalMovieDB.genres[i] = genre;
        }
        personalMovieDB.genres.forEach((genre, i) => {
            console.log(`Любимый жанр ${i+1} - это ${genre}`);
        });
    },
    toggleVisibleMyDB : function(){
        if (personalMovieDB.privat === true) personalMovieDB.privat = false; 
        else personalMovieDB.privat = true;
    }
};

personalMovieDB.start();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0');

    while( 
        numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)
    ){ numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0');}
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
}



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?');
        const b = prompt('На сколько оцените его?');
       
    
        if (a != null && b != null && a != '' && b != '' && a.length <50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
    
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.cont < 10) {
        console.log('Просмотрено слишком мало фильмов');
    
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if(personalMovieDB.count >=30) {
        console.log('Вы киноман');
    } else {
        console.log('Error');
    }
    
}

// detectPersonalLevel();

function showMyDB() {
    personalMovieDB.privat ? console.log('Ваша база приватная') : console.log(personalMovieDB);
    
}
showMyDB();


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt("Ваш любимый жанр под номером " + i);
        personalMovieDB.genres[i - 1] = genre;

    }
    console.log(personalMovieDB);
}
writeYourGenres();

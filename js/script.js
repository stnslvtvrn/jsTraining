"use strict"

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '0');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}



const lastFilm = prompt('Один из последних просмотренных фильмов?');
const lastFilmGrade = prompt('На сколько оцените его?');

personalMovieDB.movies[lastFilm] = lastFilmGrade;

console.log(personalMovieDB);
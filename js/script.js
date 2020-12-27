"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '0');

        while (
            personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)
        ) { personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '0'); }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?');
            const b = prompt('На сколько оцените его?');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');

            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.cont < 10) {
            console.log('Просмотрено слишком мало фильмов');

        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Error');
        }

    },
    showMyDB: function () {
        personalMovieDB.privat ? console.log('Ваша база приватная') : console.log(personalMovieDB);

    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt("Ваш любимый жанр под номером " + i);
            if (genre != null && genre != '') {

                personalMovieDB.genres[i - 1] = genre;
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    }
}






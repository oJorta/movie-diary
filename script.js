let myDiary = [];

function Movie(name, director, year, duration, watched){
    this.name = name;
    this.director = director;
    this.year = year;
    this.duration = duration;
    this.watched = Boolean(watched) || false;
    this.movieIndex = myDiary.length;
}

function addMovieToLibrary(){
    /* let newMovie = new Movie(prompt(), prompt(), prompt(), prompt(), prompt()); */
    let newMovie = new Movie('Creed III', 'Michael B. Jordan', 2023, '2:30', true);
    myDiary.push(newMovie);
}

addMovieToLibrary();

console.log(myDiary)
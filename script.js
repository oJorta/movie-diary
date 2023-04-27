const modal = document.querySelector('.modal');
const addMovieBtn = document.querySelector('#add-movie');

addMovieBtn.onclick = function(e){
    modal.style.display = 'flex'
}

window.addEventListener('click', (e) =>{
    if(e.target == modal){
        modal.style.display = 'none'
    }
})

let myDiary = [];

function Movie(name, director, year, duration, genre, watched){
    this.name = name;
    this.director = director;
    this.year = year;
    this.duration = duration;
    this.genre = genre;
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
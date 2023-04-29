const modal = document.querySelector('.modal');
const addMovieBtn = document.querySelector('#add-movie');
const moviesGrid = document.querySelector('.movies-grid')

addMovieBtn.onclick = function(e){
    modal.style.display = 'flex'
}

window.addEventListener('click', (e) =>{
    if(e.target == modal){
        modal.style.display = 'none'
    }
})

let myDiary = [
    {
        name: 'The Shining',
        director: 'directed by Stanley Kubrick',
        year: 1980,
        duration: '2:26',
        genre: 'Horror/Mistery',
        watched: true
    },
    {
        name: 'The Shining',
        director: 'directed by Stanley Kubrick',
        year: 1980,
        duration: '2:26',
        genre: 'Horror/Mistery',
        watched: false
    }
];

function Movie(name, director, year, duration, genre, watched){
    this.name = name;
    this.director = 'directed by ' + director;
    this.year = year;
    this.duration = duration;
    this.genre = genre;
    this.watched = Boolean(watched) || false;
    this.movieIndex = myDiary.length;
}

function addMovieToLibrary(){
    /* let newMovie = new Movie(prompt(), prompt(), prompt(), prompt(), prompt()); */
    let newMovie = new Movie('Creed III', 'Michael B. Jordan', 2023, '2:30', 'Action/Sports', true);
    myDiary.push(newMovie);
}

function loadMovies(){
    myDiary.forEach( (movie) =>{
        //console.log(movie);
        let movieCard = document.createElement('div');
        let movieInfo = document.createElement('div');
        let moviePoster = document.createElement('div');
        let watched = document.createElement('div');

        let movieTitle = document.createElement('h2');
        let movieGenre = document.createElement('p');
        let movieDirector = document.createElement('p');
        let movieDuration = document.createElement('p');

        let watchedInput = document.createElement('input');
        let watchedInputTag = document.createElement('p');

        movieCard.classList.add('movie-card')
        movieInfo.classList.add('movie-info')
        moviePoster.classList.add('movie-poster')
        watched.classList.add('watched-check')

        movieTitle.innerText = movie.name + ` (${movie.year})`;
        movieGenre.innerText = movie.genre;
        movieDirector.innerText = movie.director;
        movieDuration.innerText = movie.duration;

        watchedInput.type = 'checkbox';
        watchedInput.name = 'watched';
        watchedInput.id = 'watched';
        watchedInput.checked = movie.watched;
        watchedInputTag.innerText = 'watched';



        movieInfo.appendChild(movieTitle);
        movieInfo.appendChild(movieGenre);
        movieInfo.appendChild(movieDirector);
        movieInfo.appendChild(movieDuration);

        watched.appendChild(watchedInput);
        watched.appendChild(watchedInputTag);

        moviesGrid.appendChild(movieCard);
        movieCard.appendChild(movieInfo);
        movieCard.appendChild(moviePoster);
        movieCard.appendChild(watched);

        console.log(movieCard)

    })
}

addMovieToLibrary();

loadMovies()
//console.log(myDiary)
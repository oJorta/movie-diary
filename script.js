const modal = document.querySelector('.modal');
const form = document.querySelector('#add-movie-form');
const addMovieBtn = document.querySelector('#add-movie');
const moviesGrid = document.querySelector('.movies-grid');

let myDiary = [
    {
        name: 'The Shining',
        director: 'Stanley Kubrick',
        year: 1980,
        duration: '2:26',
        genre: 'Horror/Mistery',
        watched: true,
        index: 0
    },
    {
        name: 'Creed III',
        director: 'Michael B. Jordan',
        year: 2022,
        duration: '2:30',
        genre: 'Action/Sports',
        watched: true,
        index: 1
    }
];

loadMovies();

addMovieBtn.onclick = function(e){
    modal.style.display = 'flex'
}

window.addEventListener('click', (e) =>{
    console.log(e.target.parentNode.parentNode.dataset.index)
    if(e.target === modal){
        modal.style.display = 'none'
    }

    if(e.target.id === 'watched'){
        let index = e.target.parentNode.parentNode.dataset.index;
        myDiary[index].watched = !myDiary[index].watched;
    }
});

form.addEventListener('submit', (e) =>{

    e.preventDefault();
    let inputValues = getFormData();

    addMovieToLibrary(inputValues[0], inputValues[1], inputValues[2], inputValues[3], inputValues[4], inputValues[5], myDiary.length);

});

moviesGrid.addEventListener('click', (e) => {
    if(e.target.id === 'remove-movie'){
        removeMovie(e.target.parentNode)
    }
});

function Movie(name, director, year, duration, genre, watched, index){
    this.name = name || '?';
    this.director =  director;
    this.year = year || '?';
    this.duration = duration;
    this.genre = genre || 'Not informed';
    this.watched = Boolean(watched) || false;
    this.index = index;
}

Movie.prototype.toggleWatched = function(){
    Movie.watched = !Movie.watched;
    console.log(Movie.watched)
}

function addMovieToLibrary(name, director, year, duration, genre, watched, index){
    let newMovie = new Movie(name, director, year, duration, genre, watched, index);
    myDiary.push(newMovie);
    loadMovies();
}

function showMovie(movie){
    let movieCard = document.createElement('div');
    let removeMovie = document.createElement('p');
    let movieInfo = document.createElement('div');
    let moviePoster = document.createElement('div');
    let watched = document.createElement('div');

    let movieTitle = document.createElement('h2');
    let movieGenre = document.createElement('p');
    let movieDirector = document.createElement('p');
    let movieDuration = document.createElement('p');
    let movieDurationSplit = movie.duration.split(':');
    let formattedDuration =  movie.duration ? (Number(movieDurationSplit[0]) + 'h ' + movieDurationSplit[1] + 'm'):'Not informed'; 
    let watchedInput = document.createElement('input');
    let watchedInputTag = document.createElement('p');

    movieCard.classList.add('movie-card');
    movieCard.dataset.index = movie.index;
    removeMovie.id = 'remove-movie';
    movieInfo.classList.add('movie-info');
    moviePoster.classList.add('movie-poster');
    watched.classList.add('watched-check');

    movieTitle.innerText = movie.name + ` (${movie.year})`;
    movieGenre.innerText = movie.genre;
    movieDirector.innerText = 'directed by ' + movie.director;
    movieDuration.innerText = formattedDuration;
    removeMovie.innerText = '❌'

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
    movieCard.appendChild(removeMovie)
    movieCard.appendChild(movieInfo);
    movieCard.appendChild(moviePoster);
    movieCard.appendChild(watched);
}

function loadMovies(){
    moviesGrid.innerHTML = ''
    myDiary.forEach( (movie) =>{
        showMovie(movie);
    });
}

function getFormData(){
    let inputNodeList = form.querySelectorAll('input');
    let inputValues = []
    inputNodeList.forEach(input =>{
        if(input.type === 'checkbox')
            inputValues.push(input.checked)
        else
            inputValues.push(input.value)
        
        input.value = '';
    });

    return inputValues;
}

function removeMovie(movie){
    myDiary.splice(movie.dataset.index, 1);
    loadMovies();
}
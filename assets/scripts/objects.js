

// variable and DOM node selection

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

// event handlers

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');
    
    if(movies.length === 0)
    {
        movieList.classList.remove('visible');
        return;
    }else{
        movieList.classList.add('visible');
    }

    movieList.innerHTML = '';

    const filteredMovies = !filter ? movies : movies.filter((movie)=>{
       return movie.info.title.includes(filter);
    });

    filteredMovies.forEach((movie)=>{
        const movieEl = document.createElement('li');
        const {info} = movie;
        const {title: movieTitle} = info;
        let text = `${movieTitle} => `;
        
        for(const key in info )
        {
            if(key != 'title')
            {
                text = text + `${key} : ${info[key]}`;
            }
        }

        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};

const addMovieHandler = () => {
    let title = document.getElementById('title').value;
    let extraName = document.getElementById('extra-name').value;
    let extraValue = document.getElementById('extra-value').value;

    if(title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === '')
    {
        return;
    }

    const newMovie = {
        info : {
            title,
            [extraName] : extraValue
        },
        id : Math.random().toString()
    };

    movies.push(newMovie);
    renderMovies();

    // clearing current data from input box
    document.getElementById('title').value = '';
    document.getElementById('extra-name').value = '';
    document.getElementById('extra-value').value = '';
 };

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);

};


// event listeners
 addMovieBtn.addEventListener('click',addMovieHandler);
 searchBtn.addEventListener('click',searchMovieHandler);




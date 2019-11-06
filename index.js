document.addEventListener('DOMContentLoaded', function () {
    function renderMovies(movieArray) {
        var movieHTML = movieArray.map(function (currentMovie) {
            return `
            <div class="movie">
                <div class="card" style="width: 18rem;">
				    <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
				    <div class="card-body">
					    <h5 class="card-title">${currentMovie.Title}<span class="badge badge-secondary">${currentMovie.Year}</span></h5>
					    <p class="card-text">IMDB ID: ${currentMovie.imdbID}</p>
					    <button onclick="saveToWatchlist('${currentMovie.imdbID}')" class="btn btn-primary">Add Movie</button>
				    </div>
			    </div>;
            </div>
            `;
        });
        return movieHTML.join('');

    }
    const searchInput = document.getElementById("searchInput")
    var content = document.getElementById('movie-container');
    // const content.innerHTML = 
    const searchForm = document.getElementById('search-form')
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault()
        console.log(e)
        console.log(searchInput.value)
        const filteredMovies = movieData.filter(movie => movie.Title.toLowerCase().includes(searchInput.value.toLowerCase()))
        // const filteredMovies = movieData.filter(movie => movie.imdbID === searchInput.value) search by imdb id
        console.log(filteredMovies)
        content.innerHTML = renderMovies(filteredMovies)
        // e.renderMovies(movieData)
    });
    



})
function saveToWatchlist(imdbID){
    var movie = movieData.find(function(currentMovie){
        return currentMovie.imdbID == imdbID;

    })
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    if (watchlist == null) {
        watchlist = [];
    } else {
        watchlist.push(movie)
    }
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    console.log(watchlist)

}
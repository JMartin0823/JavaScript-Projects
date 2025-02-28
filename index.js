const movieList = document.getElementById('movies')
const form = document.querySelector('form')
const SavedMovies = []

async function fetchMovie(input) {
	try {
		const response = await fetch(`http://www.omdbapi.com/?s=${input}&apikey=c79d6a86`)
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}
		const data = await response.json()
		movieList.innerHTML = render(data.Search)
		console.log(data)
	} catch (error) {
		console.error('Error:', error)
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault()
	const userSearch = encodeURIComponent(document.getElementById('search').value)
	fetchMovie(userSearch)
})

function render(movies) {
	return movies
		.map((movie) => {
			return `
         <div class="container">
            <img src="${movie.Poster}" alt="${movie.Title} Poster"/>
            <div class="side-container">
               <div class="title">
                  <h3>${movie.Title}</h3>
               </div>
               <div class="type-year">
                  <p>${movie.Type}</p>
                  <hr/>
                  <p>${movie.Year}</p>
               </div>
               <div class="add-btn" data-id="${movie.imdbID}">
                     <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM28.125 15.625C28.125 13.8991 26.7259 12.5 25 12.5C23.2741 12.5 21.875 13.8991 21.875 15.625V21.875H15.625C13.8991 21.875 12.5 23.2741 12.5 25C12.5 26.7259 13.8991 28.125 15.625 28.125H21.875V34.375C21.875 36.1009 23.2741 37.5 25 37.5C26.7259 37.5 28.125 36.1009 28.125 34.375V28.125H34.375C36.1009 28.125 37.5 26.7259 37.5 25C37.5 23.2741 36.1009 21.875 34.375 21.875H28.125V15.625Z"/>
                     </svg>
                     <p>Watchlist</p>
               </div>
            </div>
         </div>
      `
		})
		.join('')
}

document.getElementById('movies').addEventListener('click', function (e) {
	if (e.target.closest('.add-btn')) {
		const selectedMovie = e.target.closest('.add-btn').dataset.id
		fetchSelectedMovie(selectedMovie)
	}
})

async function fetchSelectedMovie(id) {
	try {
		const response = await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=c79d6a86`)
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}
		const data = await response.json()
		let savedMovies = JSON.parse(localStorage.getItem('SavedMovies')) || []

		if (!savedMovies.some((movie) => movie.imdbID === data.imdbID)) {
			savedMovies.push(data)
			localStorage.setItem('SavedMovies', JSON.stringify(savedMovies))
		}

		console.log('Movie saved:', data)
	} catch (error) {
		console.error('Error:', error)
	}
}

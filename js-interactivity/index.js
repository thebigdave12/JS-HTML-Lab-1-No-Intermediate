console.log('JS Connected')

// Step 1: Grab an HTML element

let movieForm = document.querySelector('form')
let message = document.querySelector('#message')



// Step 2: Write a Function

const addMovie = (e) => {

    e.preventDefault()

    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    

    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'

    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', deleteMovie)

    let movieList = document.querySelector('ul')

    movieList.appendChild(movie)

    inputField.value = ''
}

const deleteMovie = (e) => {
    e.target.parentNode.remove()

    message.textContent = 'Movie deleted'

    
}

const crossOffMovie = (e) => {
    e.target.classList.toggle('checked')

    if(e.target.classList.contains('checked')){
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }
}
// Step 3: Combine steps 1 and 2 with an event listener

movieForm.addEventListener('submit', addMovie)





// addMovie.addEventListener('submit', addToMovieList)








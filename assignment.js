let moviesList = document.getElementById('moviesList')
let movieItem = document.getElementById('movieItem')
let request = new XMLHttpRequest()
let movieDataArray = []



const movieClick = function(evt){
    console.log(movieDataArray[this.index])
}












request.onload = function(){
    
    movieDataArray = JSON.parse(this.responseText).Search
    
    console.log(movieClick)
    let liItems = movieDataArray.forEach((movie, index) => {
        const row = document.createElement('div')
        row.classList.add('row')

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('imageContainer')

        const image = document.createElement('img')
        image.src = movie.Poster

        const title = document.createElement('div')
        title.classList.add('title')
        title.index = index
        title.onclick = movieClick

        const pTag = document.createElement('p')
        pTag.innerHTML = movie.Title

        title.appendChild(pTag)
        imageContainer.appendChild(image)
        row.appendChild(imageContainer)
        row.appendChild(title)

        moviesList.appendChild(row)



    })
    
}


request.open('GET','http://www.omdbapi.com/?s=batman&apikey=18ca0031')
request.send()


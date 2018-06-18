$(document).ready(() => {

    $('#searchResults').css('display','none')

    $('#search').click(() => {    
            getMovieInfoID()
            getMovieInfoTitle()
            getMovieInfoYear() 
            
    })
    
}) // end of document.ready function


let getMovieInfoID = () => {

    let mId = $('#imdbId').val()
    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'https://www.omdbapi.com/?apikey=59479e7d&i=' +mId,
        success: (response) => {
           $('#searchResults').css('display','block')       
            console.log(response)
            $('#image').attr('src', `${response.Poster}`)
            $('#tit').append(response.Title)
            $('#yr').append(response.Year)
            $('#rate').append(response.Rated)
            $('#release').append(response.Released)
            $('#runt').append(response.Runtime)
            $('#gen').append(response.Genre)
            $('#dir').append(response.Director)
            $('#writ').append(response.Writer)
            $('#act').append(response.Actors)
            $('#pl').append(response.Plot)
            $('#lan').append(response.Language)
            $('#con').append(response.Country)
            $('#aw').append(response.Awards)
            $('#mscor').append(response.Metascore)
            $('#irat').append(response.imdbRating)
            $('#ivot').append(response.imdbVotes)
            $('#iid').append(response.imdbID)
            $('#typ').append(response.Type)
            $('#dv').append(response.DVD)
            $('#box').append(response.BoxOffice)
            $('#prod').append(response.Production)
            $('#webs').append(response.Website)
        },
        error: (err) => {
            alert(err.responseJSON.error.message)
        }
    }) // end of ajax request by IMDB ID
} // end of getMovieInfoID function

let getMovieInfoTitle = () => {

    let newTitle = $('#title').val()

    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'https://www.omdbapi.com/?apikey=59479e7d&t='+newTitle,
        success: (response) => {
           $('#searchResults').css('display','block')       
            console.log(response)
            $('#image').attr('src', `${response.Poster}`)
            $('#tit').append(response.Title)
            $('#yr').append(response.Year)
            $('#rate').append(response.Rated)
            $('#release').append(response.Released)
            $('#runt').append(response.Runtime)
            $('#gen').append(response.Genre)
            $('#dir').append(response.Director)
            $('#writ').append(response.Writer)
            $('#act').append(response.Actors)
            $('#pl').append(response.Plot)
            $('#lan').append(response.Language)
            $('#con').append(response.Country)
            $('#aw').append(response.Awards)
            $('#mscor').append(response.Metascore)
            $('#irat').append(response.imdbRating)
            $('#ivot').append(response.imdbVotes)
            $('#iid').append(response.imdbID)
            $('#typ').append(response.Type)
            $('#dv').append(response.DVD)
            $('#box').append(response.BoxOffice)
            $('#prod').append(response.Production)
            $('#webs').append(response.Website)
        },
        error: (err) => {
            alert(err.responseJSON.error.message)
        }
    }) // end of ajax request by IMDB ID
} // end of getMovieInfoID function

let getMovieInfoYear = () => {

    let newYear = $('#year').val()

    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'https://www.omdbapi.com/?apikey=59479e7d&y='+newYear,
        success: (response) => {
           $('#searchResults').css('display','block')       
            console.log(response)
            $('#image').attr('src', `${response.Poster}`)
            $('#tit').append(response.Title)
            $('#yr').append(response.Year)
            $('#rate').append(response.Rated)
            $('#release').append(response.Released)
            $('#runt').append(response.Runtime)
            $('#gen').append(response.Genre)
            $('#dir').append(response.Director)
            $('#writ').append(response.Writer)
            $('#act').append(response.Actors)
            $('#pl').append(response.Plot)
            $('#lan').append(response.Language)
            $('#con').append(response.Country)
            $('#aw').append(response.Awards)
            $('#mscor').append(response.Metascore)
            $('#irat').append(response.imdbRating)
            $('#ivot').append(response.imdbVotes)
            $('#iid').append(response.imdbID)
            $('#typ').append(response.Type)
            $('#dv').append(response.DVD)
            $('#box').append(response.BoxOffice)
            $('#prod').append(response.Production)
            $('#webs').append(response.Website)
        },
        error: (err) => {
            alert(err.responseJSON.error.message)
        }
    }) // end of ajax request by IMDB ID
} // end of getMovieInfoID function


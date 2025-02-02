const searchInput = document.getElementById('search-input');
const resultsArtists = document.getElementById('result-artist');
const resultPlaylists = document.getElementById('result-playlist');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults() {
    resultPlaylists.classList.add('hidden');
    const artistsName = document.getElementById('artist-name');
    const artistsImage = document.getElementById('artist-img');

}

result.forEach(element => {
    artistsName.innerText = element.name
    artistsImage.src = element.image;
});

resultPlaylists.classList.remove('hidden');


document.addEventListener('input',function() {
    const  searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylists.classList.add('hidden');
        resultsArtists.classList.remove('hidden');
        return;
    
    }

    // requestApi(searchTerm);
})
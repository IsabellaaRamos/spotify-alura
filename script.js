const searchInput = document.getElementById('search-input');
const resultsArtists = documentFragment.getElementById('result-artist');
const resultPlaylists = document.getElementById('result-playlist');

function requestApi(searchTerm) {
    const url = "htpp://localhost:3000/artists?name_like=${searchTerm}";
    fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults() {
    resultPlaylists.classList.add('hidden');
    const artistsName = document.getElementById('artists-name');
    const artistsImage = document.getElementById('artists-image');

}


document.addEventListener('input',function() {
    const  searchTerm = searchInput.value.toLowerCase();
    if (searchterm === '') {
        resultPlaylists.classList.add('hidden');
        resultsArtists.classList.remove('hidden');
        return;
    
    }
})
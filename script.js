const searchInput = document.getElementById('search-input');
const resultsArtists = documentFragment.getElementById('result-artist');
const resultPlaylists = document.getElementById('result-playlist');

function requestApi(searchTerm) {
    const url = "htpp://localhost:3000/artists?name_like=${searchTerm}";
    fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result));
}


document.addEventListener('input',function() {
    const  searchTerm = searchInput.value.toLowerCase();
    if (searchterm === '') {
        resultPlaylists.classList.add('hidden');
        resultsArtists.classList.remove('hidden');
        return;
    
    }
})
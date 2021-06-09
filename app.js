const searchSongs = () => {
    const searchText = document.getElementById('search-field').value;
    const api = `https://api.lyrics.ovh/suggest/${searchText}`
    // load data from api
    fetch(api)
        .then(res => res.json())
        .then(data => displaySongs(data.data));
}

const displaySongs = (songs) => {
    console.log(songs)
    const songContainer = document.getElementById('song-container');
    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = "single-result row align-items-center my-3 p-3";
        songDiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
            <audio controls>
                <source src="${song.preview}" type="audio/mpeg">
            </audio>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-success">Get Lyrics</button>
        </div>
        `;
        songContainer.appendChild(songDiv);
    });
}
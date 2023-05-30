// Example song data
var songs = [
    { title: 'Still Rollin', artist: 'Shubh', file: 'Still Rollin.m4a', cover: 'cover5.jpeg' },
    { title: 'Ice', artist: 'Shubh', file: 'Ice.m4a', cover: 'cover5.jpeg' },
    { title: 'Cheques', artist: 'Shubh', file: 'Cheques.m4a', cover: 'cover5.jpeg' },
    { title: 'OG', artist: 'Shubh', file: 'OG.m4a', cover: 'cover5.jpeg' },
    { title: 'Ruthless', artist: 'Shubh', file: 'Ruthless.m4a', cover: 'cover5.jpeg' },
    { title: 'Dior', artist: 'Shubh', file: 'Dior.m4a', cover: 'cover5.jpeg' },
    { title: 'The-Flow--Outro', artist: 'Shubh', file: 'The-Flow--Outro.m4a', cover: 'cover5.jpeg' }
  ];
  
  // Populate the playlist with songs
  var songList = document.getElementById('songList');
  songs.forEach(function(song, index) {
    var listItem = document.createElement('li');
    listItem.textContent = song.title + ' - ' + song.artist;
    listItem.addEventListener('click', function() {
      playSong(index);
    });
    songList.appendChild(listItem);
  });
  
  // Play a selected song
  function playSong(index) {
    var song = songs[index];
    var audioPlayer = document.getElementById('audioPlayer');
    var songCover = document.getElementById('songCover');
    var songTitle = document.getElementById('songTitle');
    var songArtist = document.getElementById('songArtist');
  
    audioPlayer.src = song.file;
    songCover.src = song.cover;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
  }
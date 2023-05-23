// Define an array of songs
const playlist = [
    {
      title: 'Song 1',
      source: 'Clash.mp3'
    },
    {
      title: 'Song 2',
      source: 'Tu Chahiye.mp3'
    },
    // Add more songs as needed
  ];
  
  // Function to create playlist items
  function createPlaylistItem(song) {
    const listItem = document.createElement('li');
    listItem.textContent = song.title;
    listItem.addEventListener('click', function() {
      playSong(song.source);
    });
    return listItem;
  }
  
  // Function to play a song
  function playSong(source) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = source;
    audioPlayer.play();
  }
  
  // Function to initialize the music player
  function initializePlayer() {
    const playlistElement = document.getElementById('playlist');
  
    // Create playlist items and add them to the playlist
    playlist.forEach(function(song) {
      const playlistItem = createPlaylistItem(song);
      playlistElement.appendChild(playlistItem);
    });
  }
  
  // Call the initializePlayer function when the page loads
  window.addEventListener('load', initializePlayer);
  
function openPopup(popupId) {
  var popup = document.getElementById(popupId);
  closeAllPopups(); // Close all popups before opening a new one
  popup.style.display = "block";
}

function closePopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "none";
}

function closeAllPopups() {
  var popups = document.getElementsByClassName("popup");
  for (var i = 0; i < popups.length; i++) {
    popups[i].style.display = "none";
  }
}







// Function to play a song
function playSong(source) {
    const audioPlayer = document.getElementById('audioPlayer');
  
    if (audioPlayer.src !== source) {
      pauseSong();
      audioPlayer.src = source;
    }
  
    audioPlayer.play();
  }
  
  // Function to pause the song
  function pauseSong() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
  }
  
  // Function to initialize the music player
  function initializePlayer() {
    const songButtons = document.querySelectorAll('.songButton');
    songButtons.forEach(function(button) {
      button.setAttribute('data-playing', 'false');
      button.addEventListener('click', function() {
        const songSource = button.getAttribute('data-source');
        const isPlaying = button.getAttribute('data-playing');
        const playButton = document.getElementById('playButton1');
        const popup = document.querySelector('.popup');
  
        if (isPlaying === 'true') {
          button.setAttribute('data-playing', 'false');
          pauseSong();
        } else {
          button.setAttribute('data-playing', 'true');
          playSong(songSource);
        }
      });
    });
  }
  
  // Call the initializePlayer function when the page loads
  window.addEventListener('load', initializePlayer);
  
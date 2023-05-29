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

  
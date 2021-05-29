var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
function onCloudA() {
    document.getElementById("overlay-CloudA").style.display = "block";
  }
  
  function offCloudA() {
    document.getElementById("overlay-CloudA").style.display = "none";
  }

function myFunction() {
if (video.paused) {
video.play();
btn.innerHTML = "Pause";
} else {
video.pause();
btn.innerHTML = "Play";
}
}
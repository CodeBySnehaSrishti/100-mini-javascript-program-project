const video = document.getElementById('video');
const playPause = document.getElementById('playPause');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const time = document.getElementById('time');
const fullscreen = document.getElementById('fullscreen');
const playlist = document.getElementById('playlist');
const playlistItems = playlist.querySelectorAll('li');
let currentVideoIndex = 0;
// Play/Pause Functionality
playPause.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPause.textContent = '⏸';
    } else {
        video.pause();
        playPause.textContent = '⏯';
    }
});
// Update Progress Bar and Time
video.addEventListener('timeupdate', () => {
    const currentTime = video.currentTime;
    const duration = video.duration;
    progress.value = (currentTime / duration) * 100;
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };
    time.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
});
// Seek Functionality
progress.addEventListener('input', () => {
    video.currentTime = (progress.value / 100) * video.duration;
});
// Volume Control
volume.addEventListener('input', () => {
    video.volume = volume.value;
});
// Fullscreen Functionality
fullscreen.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
});
// Playlist Functionality
playlistItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        playVideoFromPlaylist(index);
    });
});
function playVideoFromPlaylist(index) {
    playlistItems.forEach((item) => item.classList.remove('active'));
    playlistItems[index].classList.add('active');
    video.src = playlistItems[index].dataset.src;
    currentVideoIndex = index;
    video.play();
    playPause.textContent = '⏸';
}
// Auto-play Next Video
video.addEventListener('ended', () => {
    currentVideoIndex = (currentVideoIndex + 1) % playlistItems.length;
    playVideoFromPlaylist(currentVideoIndex);
});

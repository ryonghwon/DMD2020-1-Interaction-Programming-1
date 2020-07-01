var audioPlayerEl = document.getElementById("audio-player"),
    audio,
    audioInfoEl = audioPlayerEl.querySelector(".audio-info"),
    songCoverEl = audioInfoEl.querySelector(".song-cover"),
    artworkEl = songCoverEl.querySelector("img"),
    songInfoEl = audioInfoEl.querySelector(".song-info"),
    songInfoTitleEl = songInfoEl.querySelector(".song-title"),
    songInfoDescEl = songInfoEl.querySelector(".song-desc"),
    titleEl = songInfoTitleEl.querySelector(".title"),
    bylineEl = songInfoDescEl.querySelector(".byline"),
    albumEl = songInfoDescEl.querySelector(".album"),
    yearEl = songInfoDescEl.querySelector(".year"),
    audioControlsEl = audioPlayerEl.querySelector(".audio-controls"),
    progressBarContainerEl = audioControlsEl.querySelector(".progress-bar-container"),
    progressBarEl = progressBarContainerEl.querySelector(".progress-bar"),
    progressEl = progressBarEl.querySelector(".progress"),
    progressHandleEl = progressBarEl.querySelector(".handle"),
    controlContainerEl = audioControlsEl.querySelector(".controls-container"),
    playControlEl = controlContainerEl.querySelector(".play-control"),
    btnPrevEl = playControlEl.querySelector(".btn-prev"),
    btnPlayPauseEl = playControlEl.querySelector(".btn-play-pause"),
    btnNextEl = playControlEl.querySelector(".btn-next"),
    timeInfoEl = controlContainerEl.querySelector(".time-info"),
    currentTimeEl = timeInfoEl.querySelector(".current-time"),
    totalTimeEl = timeInfoEl.querySelector(".total-time"),
    volumeControlEl = controlContainerEl.querySelector(".volume-control"),
    btnMuteEl = volumeControlEl.querySelector(".btn-mute"),
    volumeBarEl = volumeControlEl.querySelector(".volume-bar"),
    volumeEl = volumeBarEl.querySelector(".volume"),
    volumeHandleEl = volumeBarEl.querySelector(".handle"),
    playList = [
        {
            "album" : "Album",
            "byline" : "Singer",
            "title" : "Song title",
            "year" : 2020,
            "artwork" : "./assets/",
            "track" : "./assets/"
        }
    ],
    isHour = true,
    isPlay = false,
    isMute = false,
    isTimeDrag = false,
    isVolumeDrag = false,
    isEnd = false,
    duration = 0,
    cuId = 0,
    cuTime = 0,
    cuVolume = null;

function onLoadmetadata(e) {
    duration = audio.duration;
    if(duration < 3600) isHour = false;
    totalTimeEl.innerHTML = getTimeFormat(duration);
    currentTimeEl.innerHTML = getTimeFormat(cuTime);
    cuVolume = audio.volume;
}
function onTimeupdate() {
    cuTime = audio.currentTime;
    currentTimeEl.innerHTML = getTimeFormat(cuTime);
    if(!isTimeDrag) updateProgressBar(cuTime);
    if(playList.length <= 1){
        if(cuTime >= duration) {
            btnPlayPauseEl.classList.remove("paused");
            isPlay = false;
        }
    }
}
function onEnded() {
    cuId++;
    if(cuId > playList.length - 1) {
        cuId = 0;
    }
    selectTrack();
}
function onMouseDownProgress(e) {
    e.preventDefault();
    if(isTimeDrag) return;
    isTimeDrag = true;
    audio.pause();
    updateProgress(e.pageX);
}
function onMouseMoveProgress(e) {
    e.preventDefault();
    if(!isTimeDrag) return;
    updateProgress(e.pageX);
}
function onMouseUpProgress(e) {
    e.preventDefault();
    if(!isTimeDrag) return;
    isTimeDrag = false;
    updateProgress(e.pageX);
    if(isPlay) audio.play();
}
function onClickPrev() {
    cuId--;
    if(cuId < 0) {
        cuId = playList.length - 1;
    }
    selectTrack();
}
function onClickPlayPause() {
    if(!isPlay) {
        btnPlayPauseEl.classList.add("paused");
        audio.play();
    }else{
        btnPlayPauseEl.classList.remove("paused");
        audio.pause();
    }
    isPlay = !isPlay;
}
function onClickNext() {
    console.log(cuId);
    cuId++;
    if(cuId > playList.length - 1) {
        cuId = 0;
    }
    selectTrack();
}
function onClickMute() {
    if(!isMute) {
        btnMuteEl.classList.add("muted");
        audio.volume = 0;
        updateVolumeBar(0);
    }else{
        btnMuteEl.classList.remove("muted");
        if(cuVolume <= 0) cuVolume = 0.1;
        audio.volume = cuVolume;
        updateVolumeBar(cuVolume);
    }
    isMute = !isMute;
}
function onMouseDownVolume(e) {
    e.preventDefault();
    if(isVolumeDrag) return;
    isVolumeDrag = true;
    updateVolume(e.pageX);
}
function onMouseMoveVolume(e) {
    e.preventDefault();
    if(!isVolumeDrag) return;
    updateVolume(e.pageX);
}
function onMouseUpVolume(e) {
    e.preventDefault();
    if(!isVolumeDrag) return;
    isVolumeDrag = false;
    updateVolume(e.pageX);
}
function selectTrack() {
    var playItem = playList[cuId],
        album = playItem["album"],
        byline = playItem["byline"],
        title = playItem["title"],
        year = playItem["year"],
        artwork = playItem["artwork"],
        track = playItem["track"];
    titleEl.innerHTML = title;
    bylineEl.innerHTML = byline;
    albumEl.innerHTML = album;
    yearEl.innerHTML = year;
    cuTime = 0;
    artworkEl.setAttribute("src", artwork);
    audio.src = track;
    audio.currentTime = cuTime;
    updateProgressBar(cuTime);
    if(isPlay) audio.play();
}
function getTimeFormat(ms) {
    var hours = Math.floor(ms / 3600),
        minutes = Math.floor((ms - (hours * 3600)) / 60),
        seconds = Math.floor(ms - (hours * 3600) - (minutes * 60)),
        result = "";
    if(hours < 10) hours = "0" + hours;
    if(minutes < 10) minutes = "0" + minutes;
    if(seconds < 10) seconds = "0" + seconds;
    if(isHour) result += hours + ":";
    result += minutes + ":" + seconds
    return result;
}
function updateProgressBar(time) {
    var percent = time / duration * 100;
    progressEl.style.width = percent + "%";
    progressHandleEl.style.left = percent + "%";
}
function updateProgress(x) {
    var progressBarLeft = progressBarEl.getBoundingClientRect().left,
        progressBarWidth = progressBarEl.getBoundingClientRect().width,
        pos = x - progressBarLeft;
    if(pos >= progressBarWidth) pos = progressBarWidth;
    if(pos <= 0) pos = 0;
    cuTime = pos / progressBarWidth * duration;
    updateProgressBar(cuTime);
    audio.currentTime = cuTime;
}
function updateVolumeBar(volume) {
    var percent = volume * 100;
    volumeEl.style.width = percent + "%";
    volumeHandleEl.style.left = percent + "%";
}
function updateVolume(x) {
    var volumeBarLeft = volumeBarEl.getBoundingClientRect().left,
        volumeBarWidth = volumeBarEl.getBoundingClientRect().width,
        pos = x - volumeBarLeft;
    if(pos >= volumeBarWidth) pos = volumeBarWidth;
    if(pos <= 0) pos = 0;
    cuVolume = pos / volumeBarWidth;
    if(cuVolume <= 0) {
        btnMuteEl.classList.add("muted");
    }else{
        btnMuteEl.classList.remove("muted");
    }
    isMute = cuVolume <= 0;
    updateVolumeBar(cuVolume);
    audio.volume = cuVolume;
}
function addEvent() {
    audio.addEventListener("loadedmetadata", onLoadmetadata);
    audio.addEventListener("timeupdate", onTimeupdate);
    audio.addEventListener("ended", onEnded);
    progressBarEl.addEventListener("mousedown", onMouseDownProgress);
    window.addEventListener("mousemove", onMouseMoveProgress);
    window.addEventListener("mouseup", onMouseUpProgress);
    btnPrevEl.addEventListener("click", onClickPrev);
    btnPlayPauseEl.addEventListener("click", onClickPlayPause);
    btnNextEl.addEventListener("click", onClickNext);
    btnMuteEl.addEventListener("click", onClickMute);
    volumeBarEl.addEventListener("mousedown", onMouseDownVolume);
    window.addEventListener("mousemove", onMouseMoveVolume);
    window.addEventListener("mouseup", onMouseUpVolume);
}
function init() {
    if(playList.length <= 1) {
        btnPrevEl.style.display = "none";
        btnNextEl.style.display = "none";
    }
    audio = new Audio();
    audio.loop = false;
    selectTrack();
    addEvent();
}
init();
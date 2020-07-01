var videoPlayerEl = document.getElementById("video-player"),
    videoEl = videoPlayerEl.querySelector("video.video"),
    videoControlsEl = videoPlayerEl.querySelector(".video-controls"),
    progressBarContainerEl = videoControlsEl.querySelector(".progress-bar-container"),
    progressBarEl = progressBarContainerEl.querySelector(".progress-bar"),
    progressEl = progressBarEl.querySelector(".progress"),
    progressHandleEl = progressBarEl.querySelector(".handle"),
    currentTimeEl = progressBarContainerEl.querySelector(".current-time"),
    totalTimeEl = progressBarContainerEl.querySelector(".total-time"),
    controlContainerEl = videoControlsEl.querySelector(".controls-container"),
    playControlEl = controlContainerEl.querySelector(".play-control"),
    btnPrevEl = playControlEl.querySelector(".btn-prev"),
    btnPlayPauseEl = playControlEl.querySelector(".btn-play-pause"),
    btnNextEl = playControlEl.querySelector(".btn-next"),
    volumeControlEl = controlContainerEl.querySelector(".volume-control"),
    btnMuteEl = volumeControlEl.querySelector(".btn-mute"),
    volumeBarEl = volumeControlEl.querySelector(".volume-bar"),
    volumeEl = volumeBarEl.querySelector(".volume"),
    volumeHandleEl = volumeBarEl.querySelector(".handle"),
    fullscreenControlEl = controlContainerEl.querySelector(".fullscreen-control"),
    btnFullscreenEl = fullscreenControlEl.querySelector(".btn-fullscreen"),
    playList = [
        [{"type" : "video/mp4", "src" : "./assets/"}]
    ],
    isHour = true,
    isPlay = false,
    isMute = false,
    isTimeDrag = false,
    isVolumeDrag = false,
    isEnd = false,
    isFS = false,
    duration = 0,
    cuId = 0,
    cuTime = 0,
    cuVolume = null;

function onLoadmetadata(e) {
    duration = videoEl.duration;
    if(duration < 3600) isHour = false;
    totalTimeEl.innerHTML = getTimeFormat(duration);
    currentTimeEl.innerHTML = getTimeFormat(cuTime);
    cuVolume = videoEl.volume;
}
function onTimeupdate() {
    cuTime = videoEl.currentTime;
    currentTimeEl.innerHTML = getTimeFormat(cuTime);
    if(!isTimeDrag) updateProgressBar(cuTime);
    if(playList.length <= 1) {
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
    setVideo();
}
function onMouseDownProgress(e) {
    e.preventDefault();
    if(isTimeDrag) return;
    isTimeDrag = true;
    videoEl.pause();
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
    if(isPlay) videoEl.play();
}
function onClickPlayPause() {
    if(!isPlay) {
        btnPlayPauseEl.classList.add("paused");
        videoEl.play();
    }else{
        btnPlayPauseEl.classList.remove("paused");
        videoEl.pause();
    }
    isPlay = !isPlay;
}
function onClickMute() {
    if(!isMute) {
        btnMuteEl.classList.add("muted");
        videoEl.volume = 0;
        updateVolumeBar(0);
    }else{
        btnMuteEl.classList.remove("muted");
        if(cuVolume <= 0) cuVolume = 0.1;
        videoEl.volume = cuVolume;
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
function onClickFullscreen() {
    if(!isFS){
        isFS = true;
        if(videoPlayerEl.requestFullscreen) {
            videoPlayerEl.requestFullscreen();
        }else if(videoPlayerEl.mozRequestFullScreen) {
            videoPlayerEl.mozRequestFullScreen();
        }else if(videoPlayerEl.webkitRequestFullscreen) {
            videoPlayerEl.webkitRequestFullscreen();
        }else if(videoPlayerEl.msRequestFullscreen) {
            videoPlayerEl.msRequestFullscreen();
        }
        setTimeout(function() {
            setFullscreen();
        }, 10); 
    }else{
        if(document.exitFullscreen) {
            document.exitFullscreen();
        }else if(videoPlayerEl.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }else if(document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        setTimeout(function() {
            setFullscreen(true);
        }, 10);
        isFS = false;
    }
}
function onChangeWebkitFullscreen() {
    if(!document.webkitIsFullScreen) {
        setTimeout(function() {
            setFullscreen(true);
        }, 10);
        isFS = false;
    }
}
function onChangeMozFullscreen() {
    if(!document.mozIsFullScreen) {
        setTimeout(function() {
            setFullscreen(true);
        }, 10);
        isFS = false;
    }
}
function onChangeMSFullscreen() {
    if(!document.msFullscreenElement) {
        setTimeout(function() {
            setFullscreen(true);
        }, 10);
        isFS = false;
    }
}
function setVideo() {
    var playItems = playList[cuId]
    videoEl.innerHTML = "";
    cuTime = 0;
    for(var i = 0; i < playItems.length; i++) {
        var sourceEl = document.createElement("source"),
            playItem = playItems[i],
            type = playItem["type"],
            src = playItem["src"];
        sourceEl.setAttribute("type", type);
        sourceEl.src = src;
        videoEl.appendChild(sourceEl);
        videoEl.currentTime = cuTime;
        updateProgress(cuTime);
        if(isPlay) videoEl.play();
    }
}
function setFullscreen(fs) {
    var bool = (fs) ? true : false;
    if(!bool){
        videoPlayerEl.classList.add("fs");
    }else{
        videoPlayerEl.classList.remove("fs");
    }
    updateProgressBar(cuTime);
    if(!isMute) updateVolumeBar(cuVolume);
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
    videoEl.currentTime = cuTime;
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
    videoEl.volume = cuVolume;
}
function addEvent() {
    videoEl.addEventListener("loadedmetadata", onLoadmetadata);
    videoEl.addEventListener("timeupdate", onTimeupdate);
    videoEl.addEventListener("ended", onEnded);
    progressBarEl.addEventListener("mousedown", onMouseDownProgress);
    window.addEventListener("mousemove", onMouseMoveProgress);
    window.addEventListener("mouseup", onMouseUpProgress);
    btnPlayPauseEl.addEventListener("click", onClickPlayPause);
    btnMuteEl.addEventListener("click", onClickMute);
    volumeBarEl.addEventListener("mousedown", onMouseDownVolume);
    window.addEventListener("mousemove", onMouseMoveVolume);
    window.addEventListener("mouseup", onMouseUpVolume);
    btnFullscreenEl.addEventListener("click", onClickFullscreen);
    document.addEventListener("webkitfullscreenchange", onChangeWebkitFullscreen);
    document.addEventListener("mozfullscreenchange", onChangeMozFullscreen);
    document.addEventListener("MSFullscreenChange", onChangeMSFullscreen);
}
function init() {
    if(playList.length <= 1) {
        btnPrevEl.style.display = "none";
        btnNextEl.style.display = "none";
    }
    videoEl.loop = false;
    setVideo();
    addEvent();
}
init();

//<source src="./assets/video.mp4" type="video/mp4" />
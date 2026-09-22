// START TEXT COPY LOGDIC
const textsToCopy = document.querySelectorAll(".copy");

textsToCopy.forEach(function (current) {
  current.addEventListener("click", function (event) {
    navigator.clipboard.writeText(event.target.innerHTML);
  });
});

// END TEXT COPY LOGDIC

// START AUDIO LOGIC
const audio = document.querySelector(".audio");
const playBtn = document.querySelector(".play-btn");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
let count = 0;
let audioTime = 0;
let audioDuration = 0;

playBtn.addEventListener("click", function () {
  audio.volume = .4;
  if (count <= 0) {
    audio.play();
    play.classList.add("hide");
    pause.classList.remove("hide");
    count++;
    const durationUpdate = setInterval(() => {
      audioTime = Math.floor(audio.currentTime);
      audioDuration = Math.floor(audio.duration);
      if (audioTime === 29) {
        play.classList.remove("hide");
        pause.classList.add("hide");
        clearInterval(durationUpdate);
      }
    }, 1000);
  } else {
    audio.pause();
    play.classList.remove("hide");
    pause.classList.add("hide");
    count--;
  }
});

// END AUDIO LOGIC

// START MOVING PLAY BUTTON LOGIC
const namePic = document.querySelector(".name-pic");

namePic.addEventListener("mousemove", function (event) {
  playBtn.style.top = `${event.clientY}px`;
  playBtn.style.bottom = `${event.clientY}px`;
  playBtn.style.left = `${event.clientX}px`;
  playBtn.style.right = `${event.clientX}px`;
});
// END MOVING PLAY BUTTON LOGIC

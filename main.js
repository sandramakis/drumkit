"use strict";

// playSound()
function playSound(e) {
  // select the audio element to apply the sound to
  const audio = document.querySelector(`audio[data-key=${e.code}]`);

  // select the key to add animation to on keypress
  const key = document.querySelector(`.key[data-key=${e.code}]`);

  if (!audio) return; // stop other functions from returning
  else {
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add("playing");
  }
}

// removeTransition()
function removeTransition(e) {
  if (e.propertyName !== "transform") {
    return;
  } else console.log(e.propertyName);

  this.classList.remove("playing");
}

// set a transition end for each key
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

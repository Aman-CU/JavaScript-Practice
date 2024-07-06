//For Keyboard
window.addEventListener("keydown", playSound);

/* //we can also do this

window.addEventListener("keydown", (e) => {
  const key = document.querySelector(`div[data-key = '${e.keyCode}']`);
  const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
  key.classList.add("playing");

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}); */

const keys = document.querySelectorAll(".keys");

keys.forEach((newKey) =>
  newKey.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return;
    newKey.classList.remove("playing");
  })
);

//For Mouse
keys.forEach((newKey) =>
  newKey.addEventListener("click", (e) => {
    console.log(newKey.innerHTML);
    const audio = document.querySelector(`audio[id = '${newKey.innerHTML}']`);
    newKey.classList.add("playing");
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  })
);

function playSound(e) {
  const key = document.querySelector(`div[data-key = '${e.keyCode}']`);
  const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
  key.classList.add("playing");

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

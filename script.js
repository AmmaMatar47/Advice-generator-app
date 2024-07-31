"use strict";

const adviceEl = document.querySelector("blockquote");
const adviceId = document.querySelector(".advice-id");
const button = document.querySelector("button");
const nerd = document.querySelector(".nerd-icon");

let turn = 0;
const adviceAPI = async function () {
  const response = await fetch(`https://api.adviceslip.com/advice`);
  const data = await response.json();
  const advice = data.slip.advice;
  const adviceNum = data.slip.id;
  adviceEl.textContent = `${advice}`;
  adviceId.textContent = adviceNum;
  turn++;
  nerd.style.transform = `rotate(${turn}turn)`;
};
adviceAPI();

button.addEventListener("click", adviceAPI);

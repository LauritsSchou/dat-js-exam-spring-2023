"use strict";
let runners = [];
window.addEventListener("load", initApp);

async function initApp() {
  await getRunners();
  sortRunnersByTime();
  showRunnerUps();
  showWinners();
}
async function getRunners() {
  const response = await fetch("runners.json");
  const data = await response.json();
  runners = data;
}
function sortRunnersByTime() {
  runners.sort((a, b) => a.time - b.time);
}
function showRunnerUps() {
  const runnerUps = runners.slice(3);
  const runnerupList = document.querySelector("#runnerups-list");
  runnerupList.innerHTML = "";
  for (const runner of runnerUps) {
    const runnerupListHTML = /*html*/ `
    <li>Runner: ${runner.name} - time: ${runner.time}</li>
    `;
    runnerupList.insertAdjacentHTML("beforeend", runnerupListHTML);
  }
}
function showWinners() {
  document.querySelector("#gold").innerHTML = "";
  const goldWinnerHTML = /*html*/ `
  <p id="gold-name">${runners[0].name}</p>
                    <p id=${runners[0].name}></p>
                    <div class="podium">1</div>`;
  document
    .querySelector("#gold")
    .insertAdjacentHTML("beforeend", goldWinnerHTML);

  document.querySelector("#silver").innerHTML = "";
  const silverWinnerHTML = /*html*/ `
  <p id="gold-name">${runners[1].name}</p>
                    <p id=${runners[1].name}></p>
                    <div class="podium">2</div>`;
  document
    .querySelector("#silver")
    .insertAdjacentHTML("beforeend", silverWinnerHTML);

  document.querySelector("#bronze").innerHTML = "";
  const bronzeWinnerHTML = /*html*/ `
  <p id="gold-name">${runners[2].name}</p>
                    <p id=${runners[2].name}>51</p>
                    <div class="podium">3</div>`;
  document
    .querySelector("#bronze")
    .insertAdjacentHTML("beforeend", bronzeWinnerHTML);
}

import { events } from "./data.js";
window.addEventListener("load", initApp);
function initApp() {
  showEvents(events);
}
function showEvents(events) {
  events.sort(compareDates);
  document.querySelector("#students-list").innerHTML = "";
  for (const event of events) {
    let eventHTML = /*html*/ `
        <li>${event.title}. ${event.description}. ${event.date}</li>
        `;
    document.querySelector("#students-list").insertAdjacentHTML("beforeend", eventHTML);
  }
}
function compareDates(event1, event2) {
  const date1 = new Date(event1.date);
  const date2 = new Date(event2.date);
  return date1.getTime() - date2.getTime();
}
function sortByTitle() {
  events.sort((a, b) => a.title.localeCompare(b.title));
}
function sortByDescription() {
  events.sort((a, b) => a.description.localeCompare(b.description));
}

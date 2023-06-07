"use strict";
const rooms = [
  { name: "Køkken", width: 15, length: 4 },
  { name: "Stue", width: 8, length: 7 },
  { name: "Badeværelse", width: 3, length: 3 },
];

window.addEventListener("load", initApp);

function initApp() {
  showRooms();
  document
    .querySelector("#create-room-form")
    .addEventListener("submit", addRoomClicked);
}

function showRooms() {
  rooms.sort((a, b) => a.length * a.width - b.length * b.width);
  const roomTable = document.querySelector("#rooms-table");
  roomTable.innerHTML = "";
  for (const room of rooms) {
    const roomTableHTML = /*html */ `
        <tr>
            <td>${room.name}</td>
            <td>${room.width}m</td>
            <td>${room.length}m</td>
            <td>${room.width * room.length}m2</td>
          <tr>
        
        `;
    roomTable.insertAdjacentHTML("beforeend", roomTableHTML);
  }
}
function addRoom(name, width, length) {
  const newRoom = {
    name: name,
    width: width,
    length: length,
  };
  rooms.push(newRoom);
  showRooms();
}
function addRoomClicked(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const width = form.width.value;
  const length = form.length.value;
  addRoom(name, width, length);
}

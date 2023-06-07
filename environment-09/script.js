"use strict";
let posts = [];

window.addEventListener("load", initApp);

async function initApp() {
  await getPosts();
  document.querySelector("#all").addEventListener("change", checkFilter);
}

async function getPosts() {
  const response = await fetch("posts.json");
  const data = await response.json();
  posts = data;
}
function showPosts() {
  const postList = document.querySelector("#posts-list");
  postList.innerHTML = "";
  for (const post of posts) {
    const postListHTML = /*html*/ `
    
    <article>
                    <img src=${post.image} alt=${post.caption} />
                    <h2>${post.caption}</h2>
                    <p>Likes: ${post.likes}</p>
                </article>
    `;
    postList.insertAdjacentHTML("beforeend", postListHTML);
  }
}
function checkFilter() {
  if (document.querySelector("#all").checked) {
    showPosts();
  } else {
    document.querySelector("#posts-list").innerHTML = "";
  }
}

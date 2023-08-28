"use strict";
let posts = [];

window.addEventListener("load", initApp);
async function initApp() {
  await getPosts();
  showPosts();
}
async function getPosts() {
  const response = await fetch("posts.json");
  const data = await response.json();
  posts = data;
}
function showPosts() {
  sortPostsByLikes();
  const postList = document.querySelector("#posts-list");
  postList.innerHTML = "";
  for (const post of posts) {
    const postListHTML = /*html*/ `
        <article>
        <img src="${post.image}" alt="${post.caption}" />
        <h2>${post.caption}</h2>
        <p>Likes: ${post.likes}</p>
        <button>Like</button>
        </article> 
        `;
    postList.insertAdjacentHTML("beforeend", postListHTML);
    document.querySelector("#posts-list article:last-child button").addEventListener("click", () => postLiked(post));
  }
}
function postLiked(post) {
  post.likes++;
  showPosts();
}
function sortPostsByLikes() {
  posts.sort((post1, post2) => post1.likes - post2.likes);
}

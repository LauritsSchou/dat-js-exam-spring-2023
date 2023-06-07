"use strict";
let posts = [];
window.addEventListener("load", initApp);

async function initApp() {
  await getPosts();
  showPosts();
  document.querySelector("#sortorder").addEventListener("change", sortByLikes);
}

async function getPosts() {
  const response = await fetch("posts.json");
  const data = await response.json();
  posts = data;
}
function showPosts() {
  const postsList = document.querySelector("#posts-list");
  postsList.innerHTML = "";
  for (const post of posts) {
    const postsListHTML = /*html */ `
   <article>
                    <img src=${post.image} alt=${post.caption} />
                    <h2>${post.caption}</h2>
                    <p>Likes: ${post.likes}</p>
                </article>
   
   `;
    postsList.insertAdjacentHTML("beforeend", postsListHTML);
  }
}
function sortByLikes() {
  const selectedValue = document.querySelector("#sortorder").value;
  if (selectedValue === "ascending") {
    posts.sort((a, b) => a.likes - b.likes);
  } else {
    posts.sort((a, b) => b.likes - a.likes);
  }
  showPosts();
}

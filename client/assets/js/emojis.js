const like_button = document.getElementById("like-emoji");
//const like_counter = document.getElementById("like-counter");
const love_button = document.getElementById("love-emoji");
//const love_counter = document.getElementById("love-counter");
const wow_button = document.getElementById("wow-emoji");
//const wow_counter = document.getElementById("wow-counter");
let like_content = document.querySelector('#like-counter');
let love_content = document.querySelector('#love-counter');
let wow_content = document.querySelector('#wow-counter');

let like_count = 0;
like_button.addEventListener("click", e => {
  like_count += 1;
  //like_content.style.display = like_count;
  like_content.textContent = like_count;
  console.log(like_content.textContent);
})

let love_count = 0;
love_button.addEventListener("click", e => {
  love_count += 1;
  love_content.textContent = love_count;
  console.log(love_content.textContent);
})

let wow_count = 0;
wow_button.addEventListener("click", e => {
  wow_count += 1;
  wow_content.textContent = wow_count;
  console.log(wow_content.textContent);
})

//Query selectors for like, love and wow emojis
const like_button = document.getElementById("like-emoji");
const love_button = document.getElementById("love-emoji");
const wow_button = document.getElementById("wow-emoji");
//Query selectors for like, love and wow counts
let like_content = document.querySelector('#like-counter');
let love_content = document.querySelector('#love-counter');
let wow_content = document.querySelector('#wow-counter');

//Event Listener for Like button with function to iterate number of likes
let like_count = 0;
like_button.addEventListener("click", e => {
  like_count += 1;
  like_content.textContent = like_count;
  console.log(like_content.textContent);
})

//Event Listener for Love button with function to iterate number of loves
let love_count = 0;
love_button.addEventListener("click", e => {
  love_count += 1;
  love_content.textContent = love_count;
  console.log(love_content.textContent);
})

//Event Listener for Wow button with function to iterate number of wows
let wow_count = 0;
wow_button.addEventListener("click", e => {
  wow_count += 1;
  wow_content.textContent = wow_count;
  console.log(wow_content.textContent);
})

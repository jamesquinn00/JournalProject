let button = document.querySelector("#submitbutton");
button.addEventListener("click", (e) => {
  handleBlogValues(e);
});

function handleBlogValues(e) {
  e.preventDefault();

  let blogtext = document.querySelector("#blogtextarea").value;
  displaybBlogOnPage(blogtext);
}

function displayBlogOnPage(blogtext) {
  document.querySelector("");
}

//Ask group if we want blog to be displayed on home page as card- or link to new page?
//Also, how to give user option to choose a gif- how to show options with api?

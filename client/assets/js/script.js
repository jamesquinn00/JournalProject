let button = document.querySelector("#submitbutton");
let form1 = document.querySelector("#form1");
button.addEventListener("click", (e) => {
  handleBlogValues(e);
});

function handleBlogValues(e) {
  e.preventDefault(e);
  //   let blogtext = document.querySelector("#blogtextarea").value;
  let blogtitle = document.querySelector("#blog_title").value;
  console.log(blogtitle);
  let blogcontent = document.querySelector("#blog_content").value;
  console.log(blogcontent);
  let bloggif = document.querySelector("#blog_gif").value;
  console.log(bloggif);
  //   let bloggif = document.querySelector("#gif").value;
  displayBlogOnPage(blogtitle, blogcontent, bloggif);
}

function send(title, contents, gif) {
  const blogData = {
    id: null,
    heading: title,
    content: contents,
    image: gif,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(blogData),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("http://localhost:3000/blogs", options)
    .then((r) => r.json())
    .catch(console.warn);
  location.reload();
}

function displayBlogOnPage(title, content, gif) {
  document.querySelector("#blognewt").textContent = title;
}

//Also, how to give user option to choose a gif- how to show options with api?

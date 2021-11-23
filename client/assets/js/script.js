let blogbutton = document.querySelector("#submitbutton");
let form1 = document.querySelector("#form1");
let commentbutton = document.querySelector("#commentbutton");

async function pageLoad() {
  try {
    let response = await fetch(`http://localhost:3000/blogs/`);
    response = await response.json();
    displayOnLoad(response);
  } catch (err) {
    console.log(err);
  }
}

function displayOnLoad(data) {
  for (let x in data) {
    blogNumber = parseInt(x) + 1;
    // console.log(blogNumber);
    let currentBlog = data[x];
    if (blogNumber <= 6) {
      buildCards("#page1", currentBlog);
    } else if (blogNumber > 6 && blogNumber <= 12) {
      buildCards("#page2", currentBlog);
    }
  }
  addListeners(data);
}

function buildCards(id, currentBlog) {
  const blogSection = document.querySelector(id);
  const blogPost = document.createElement("div");
  blogPost.setAttribute("class", "blog-post cursor-change");
  blogSection.appendChild(blogPost);

  const blogWrapper = document.createElement("div");
  blogWrapper.setAttribute("class", "blog-post-thumbnail-wrapper blog-image");
  blogPost.appendChild(blogWrapper);

  const blogImg = document.createElement("img");
  blogImg.setAttribute("src", currentBlog.image);
  blogWrapper.appendChild(blogImg);

  const blogTitle = document.createElement("h6");
  blogTitle.setAttribute("class", "blog-post-title");
  blogTitle.textContent = currentBlog.heading;
  blogPost.appendChild(blogTitle);

  const blogContent = document.createElement("p");
  let bloglength = currentBlog.content.replace("\n", "").trim().length;
  let blogtext = currentBlog.content.replace("\n", "").trim();
  if (bloglength>150){
    blogContent.textContent = blogtext.substring(0,150)+'...';
  }
  else{
    blogContent.textContent = blogtext
  }
  blogPost.appendChild(blogContent);
  blogSection.appendChild(blogPost);
}

function addListeners(data) {
  const blogSection = document.querySelector(".blog-section-simple");
  const allBlogs = document.querySelectorAll(".blog-section-simple .blog-post");
  // console.log(data);
  for (let i = 0; i < allBlogs.length; i++) {
    currentBlog = data[i];
    allBlogs[i].addEventListener("click", (e) => {
      blogSection.style.display = "none";
      document.querySelector("#page2").style.display = "none";
      document.querySelector("#page3").style.display = "none";
      let currentBlog = data[i];

      const singleBlog = document.querySelector(".single-blog");
      const blogPost = document.createElement("div");
      blogPost.setAttribute("class", "blog-post");
      singleBlog.appendChild(blogPost);

      const blogWrapper = document.createElement("div");
      blogWrapper.setAttribute(
        "class",
        "blog-post-thumbnail-wrapper blog-image"
      );
      blogPost.appendChild(blogWrapper);

      const blogImg = document.createElement("img");
      blogImg.setAttribute("src", currentBlog.image);
      blogWrapper.appendChild(blogImg);

      const blogTitle = document.createElement("h6");
      blogTitle.setAttribute("class", "blog-post-title");
      blogTitle.textContent = currentBlog.heading;
      blogPost.appendChild(blogTitle);

      const blogContent = document.createElement("p");

      blogContent.textContent = currentBlog.content;
      blogPost.appendChild(blogContent);
      singleBlog.insertBefore(
        blogPost,
        document.querySelector(".comments_section")
      );
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      document.querySelector("#emojis_section").style.display = "block";
      document.querySelector(".comments_section").style.display = "block";
      document.querySelector("#form1").style.display = "none";

      const backButton = document.createElement("button");
      backButton.textContent = "Go Back";
      backButton.setAttribute("class", "btn btn-success");
      backButton.setAttribute("id", "backbutton");
      backButton.addEventListener("click", (e) => {
        blogSection.style.display = "flex";
        document.querySelector("#page2").style.display = "flex";
        document.querySelector("#page3").style.display = "flex";
        document.querySelector("#emojis_section").style.display = "none";
        document.querySelector(".comments_section").style.display = "none";
        document.querySelector("#form1").style.display = "block";
        singleBlog.style.display = "none";
        backButton.style.display = "none";
      });
      singleBlog.insertBefore(backButton, blogPost);
    });
  }
}

blogbutton.addEventListener("click", (e) => {
  handleBlogValues(e);
});

function handleBlogValues(e) {
  e.preventDefault(e);
  let blogtitle = document.querySelector("#blog_title").value;
  let blogcontent = document.querySelector("#blog_content").value;
  let bloggif = document.getElementById("blog_gif").value.trim();
  if (bloggif===""){
    sendBlog(blogtitle,blogcontent,"")
  }
  else{
    getFinalGifUrl(bloggif)
  };
}

let APIKey = "S3T7ZBACrEr9MH7QC5RKPzsgF9zT6pjm";
document.addEventListener("DOMContentLoaded", gifPreview);

function gifPreview() {
  let btn = document.querySelector("#gifbutton");
  btn.addEventListener("click", e => {
    e.preventDefault();
    let preview = document.querySelector(".preview");
    preview.textContent = "";
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q=`;
    let str = document.getElementById("blog_gif").value.trim();
    url = url.concat(str);
    fetch(url)
      .then((response) => response.json())
      .then(content => {
        let figure = document.createElement("figure");
        figure.textContent = "";
        let img = document.createElement("img");
        img.src = content.data[0].images.downsized.url;
        let gifImage = img.src
        img.alt = content.data[0].title;
        figure.appendChild(img);
        preview.insertAdjacentElement("afterbegin", figure);
        // console.log(gifImage)
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

function getFinalGifUrl(str){
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q=`;
  url = url.concat(str);
  fetch(url)
    .then((response) => response.json())
    .then(content => {
      let gifImage = content.data[0].images.downsized.url;
      let blogtitle = document.querySelector("#blog_title").value;
      let blogcontent = document.querySelector("#blog_content").value;
      sendBlog(blogtitle, blogcontent, gifImage);
    })
}

function sendBlog(title, body, gif) {
  const blogData = {
    id: null,
    heading: title,
    content: body,
    image: gif,
  };
  console.log(blogData);
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

// COMMENT HANDLING ------------------------------------------
commentbutton.addEventListener("click", (e) => {
  handleCommentValues(e);
});

function handleCommentValues(e) {
  e.preventDefault(e);
  let comment = document.querySelector("#comment_content").value;
  sendComment(comment);
}

function sendComment(com) {
  const commentData = {
    id: null,
    comment: com,
  };
  console.log(commentData);
  const options = {
    method: "POST",
    body: JSON.stringify(commentData),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("http://localhost:3000/comments", options)
    .then((r) => r.json())
    .catch(console.warn);
  // location.reload();
}

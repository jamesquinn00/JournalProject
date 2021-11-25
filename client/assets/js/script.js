let blogbutton = document.querySelector("#submitbutton");
let form1 = document.querySelector("#form1");
let commentbutton = document.querySelector("#commentbutton");

let allBlogs = {};
let currentPostId = -1;

document.addEventListener("DOMContentLoaded", pageLoad);

// Asynchronous function for when page loads
async function pageLoad() {
  try {
    // fetch data upon page load, then call the displayOnLoad function

    let response = await fetch(`http://localhost:3001/blogs/`);
    response = await response.json();
    displayOnLoad(response);
    gifinit();
  } catch (err) {
    console.log(err);
  }
}

// Function to iterate through fetched data, each blog is then sent to buildCards 1 by 1
function displayOnLoad(data) {
  allBlogs = data;
  for (let x in data) {
    blogNumber = parseInt(x);
    // console.log(blogNumber);
    let currentBlog = data[x];
    // If statement to select the page id depending the blog number
    // ID changes every 6 blogs, so only 6 are shown per page
    if (blogNumber <= 6) {
      // call buildCards function
      buildCards("#page1", currentBlog);
    } else if (blogNumber > 6 && blogNumber <= 12) {
      buildCards("#page2", currentBlog);
    } else if (blogNumber > 12 && blogNumber <= 18) {
      buildCards("#page3", currentBlog);
    }
  }
  // once all blog cards have been built, call the addListeners function
  addListeners(data);
}

// Function to build blog cards from scratch
function buildCards(id, currentBlog) {
  // define html elements (where the cards will go) as variables
  const blogSection = document.querySelector(id);
  const blogPost = document.createElement("div");

  // set the class of BlogPost to a pre-made Edica class, add to the larger blogSection container
  blogPost.setAttribute("class", "blog-post cursor-change");
  blogSection.appendChild(blogPost);

  // Create a html div element for the image to be put in, give it Edica classes
  const blogWrapper = document.createElement("div");
  blogWrapper.setAttribute("class", "blog-post-thumbnail-wrapper blog-image");
  blogPost.appendChild(blogWrapper);

  // Create a html img element and assign its source to the image value of currentBlog
  const blogImg = document.createElement("img");
  if (currentBlog.image !== null && currentBlog.image !== "") {
    blogImg.setAttribute("src", currentBlog.image);
  } else {
    blogImg.setAttribute(
      "src",
      "https://media.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif"
    );
  }
  blogWrapper.appendChild(blogImg);

  // Create a html h6 element, give it Edica classes, assign text content to the heading value of currentBlog
  const blogTitle = document.createElement("h6");
  blogTitle.setAttribute("class", "blog-post-title");
  blogTitle.textContent = currentBlog.heading;
  blogPost.appendChild(blogTitle);

  // Create html p element and assign text content currentBlog content value
  const blogContent = document.createElement("p");

  // Remove new lines and trim trailing spaces, and get the length of the blog content
  let bloglength = currentBlog.content.replace("\n", "").trim().length;
  let blogtext = currentBlog.content.replace("\n", "").trim();

  // if blog content is >150 characters, only first 150 are displayed and ... is added at the end
  if (bloglength > 150) {
    blogContent.textContent = blogtext.substring(0, 150) + "...";
  } else {
    blogContent.textContent = blogtext;
  }

  // Add the blog content to the card, then add the card to the larger blog section containter
  blogPost.appendChild(blogContent);
  blogSection.appendChild(blogPost);
}

// Function to add event listeners to each of the blog posts
function addListeners(data) {
  // define 'blog section container' and 'all blog posts' as separate variables
  const blogSection = document.querySelector(".blog-section-simple");
  const allBlogs = document.querySelectorAll(".blog-section-simple .blog-post");

  // iterate through each blog post (the cards produced in buildCards)
  for (let i = 0; i < allBlogs.length; i++) {
    // add an 'click' event listener to the current blog in the iteration
    allBlogs[i].addEventListener("click", (e) => {
      // set the entire grid of cards to display: none
      blogSection.style.display = "none";
      document.querySelector("#page2").style.display = "none";
      document.querySelector("#page3").style.display = "none";

      let currentBlog = data[i + 1]; //CHANGE

      // choose the singleBlog html element, which is a containter for a single blog post
      const singleBlog = document.querySelector(".single-blog");
      const blogPost = document.createElement("div");

      // start building a single card in a similar way to buildCards, add to the singleBlog container
      blogPost.setAttribute("class", "blog-post");
      singleBlog.appendChild(blogPost);

      // add wrapper and image to the blog post
      const blogWrapper = document.createElement("div");
      blogWrapper.setAttribute(
        "class",
        "blog-post-thumbnail-wrapper blog-image"
      );
      blogPost.appendChild(blogWrapper);
      const blogImg = document.createElement("img");
      if (currentBlog.image !== null && currentBlog.image !== "") {
        blogImg.setAttribute("src", currentBlog.image);
      } else {
        blogImg.setAttribute(
          "src",
          "https://media.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif"
        );
      }
      blogWrapper.appendChild(blogImg);
      currentPostId = currentBlog["id"];

      // add blog title to blog post
      const blogTitle = document.createElement("h6");
      blogTitle.setAttribute("class", "blog-post-title");
      blogTitle.textContent = currentBlog.heading;
      blogPost.appendChild(blogTitle);

      // add blog content to blog post
      const blogContent = document.createElement("p");
      blogContent.textContent = currentBlog.content;
      blogPost.appendChild(blogContent);

      // insert the newly made single blog post at the top of the page
      singleBlog.insertBefore(
        blogPost,
        document.querySelector(".comments_section")
      );

      // automatically scroll to the top of the page, hide the blog form and pagination
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      document.querySelector("#form1").style.display = "none";
      document.querySelector(".nextpage").style.display = "none";

      // display the emoji and comment sections
      document.querySelector("#emojis_section").style.display = "block";
      document.querySelector(".comments_section").style.display = "block";

      // create a 'back button' that takes the user back to the main page of blogs
      const backButton = document.createElement("button");
      backButton.style.display = "block";
      backButton.textContent = "Go Back";

      // give the button the preset Edica classes
      backButton.setAttribute("class", "btn btn-success");
      backButton.setAttribute("id", "backbutton");

      // add a click event listener to back button
      backButton.addEventListener("click", (e) => {
        // redisplay the main blog post container again
        blogSection.style.display = "flex";
        // clear the single blog post that was created line 92
        blogPost.textContent = "";
        blogPost.style.display = "none";
        // redisplay the blog pages, pagination and form. Hide emoji/comment sections
        document.querySelector("#page2").style.display = "flex";
        document.querySelector("#page3").style.display = "flex";
        document.querySelector("#emojis_section").style.display = "none";
        document.querySelector(".comments_section").style.display = "none";
        document.querySelector("#form1").style.display = "block";
        document.querySelector(".nextpage").style.display = "block";
        backButton.style.display = "none";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });
      // insert the back button above the single blog post
      singleBlog.insertBefore(backButton, blogPost);
    });
  }
}

// // event listener for the blog form submission, calls the handleBlogValues function
// blogbutton.addEventListener("click", (e) => {
//   handleBlogValues(e);
// });

// event listener for the blog form submission, calls the handleBlogValues function
form1.addEventListener("submit", (e) => {
  handleBlogValues(e);
});

// function to handle the form inputs from the user
function handleBlogValues(e) {
  e.preventDefault(e);
  // assign each form input to its own variable
  let blogtitle = document.querySelector("#blog_title").value;
  let blogcontent = document.querySelector("#blog_content").value;
  let bloggif = document.getElementById("blog_gif").value.trim();
  // if user doesnt enter anything in the gif section,
  // call the sendBlog function with an empty string as the image argument

  // CHANGE
  if (bloggif !== "") {
    bloggif = getFinalGifUrl(bloggif);
  }

  // creates new blog entry
  else {
    sendBlog(null, blogtitle, blogcontent, bloggif, null, null);
  }
}

// GIF HANDLING ----------------------------------------------
// Define the API key from GIPHY
let APIKey = "S3T7ZBACrEr9MH7QC5RKPzsgF9zT6pjm";
// once DOM content is loaded, call the gifPreview function

function gifPreview() {
  // define the preview gif button as variable called btn
  let btn = document.querySelector("#gifbutton");
  btn.setAttribute("class", "btn-success");
  // add event listener for the preview button
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    // define the preview section html element as a variable called preview
    let preview = document.querySelector(".preview");
    // clear any previous gif previews
    preview.textContent = "";

    // define the GIPHY API URL, insert the API key previously defined,
    // and add the users gif search to the end of the URL
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q=`;
    let str = document.getElementById("blog_gif").value.trim();
    url = url.concat(str);
    // fetch data from the url, convert to JSON
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        // create element for preview to be displayed
        let figure = document.createElement("figure");
        figure.textContent = "";
        let img = document.createElement("img");
        // set the image source to that of the first gif fetched
        img.src = content.data[0].images.downsized.url;
        let gifImage = img.src;
        // set the image title to that of the first gif fetched
        img.alt = content.data[0].title;
        figure.appendChild(img);
        preview.insertAdjacentElement("afterbegin", figure);
        // console.log(gifImage)
      })
      // if errors occur in fetching data, log them
      .catch((err) => {
        console.error(err);
      });
  });
}

// Function to get the chosen gif URL and from there, call the sendBlogs function
function getFinalGifUrl(str) {
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q=`;
  url = url.concat(str);
  fetch(url)
    .then((response) => response.json())
    .then((content) => {
      // return content.data[0].images.downsized.url //(Check what this is for)
      let gifImage = content.data[0].images.downsized.url;
      let blogtitle = document.querySelector("#blog_title").value;
      let blogcontent = document.querySelector("#blog_content").value;
      sendBlog(null, blogtitle, blogcontent, gifImage, null, null);
    });
}

// Function to post the users input data to the server
function sendBlog(id, title, body, gif, comments, reacts) {
  // create an object that has the users input as values
  // only use inputs that are not null
  const blogData = {};
  if (id !== null) {
    blogData["id"] = id;
  }
  if (title !== null) {
    blogData["heading"] = title;
  }
  if (body !== null) {
    blogData["content"] = body;
  }
  if (gif !== null) {
    blogData["image"] = gif;
  }
  if (comments !== null) {
    blogData["comments"] = comments;
  }
  if (reacts !== null) {
    blogData["reacts"] = reacts;
  }

  // post method object is defined, with stringified blogData object
  const options = {
    method: "POST",
    body: JSON.stringify(blogData),
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(blogData);

  // post to the '/blogs' URL
  fetch("http://localhost:3001/newBlog", options)
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
  let id = currentPostId;

  // Retrieve the blog that this comment belongs to
  console.log(allBlogs);
  console.log(id);

  let currentBlog = allBlogs[id];

  // See if currentBlog has other comments already
  if (
    currentBlog.hasOwnProperty("comments") &&
    Array.isArray(currentBlog["comments"])
  ) {
    currentBlog["comments"].push(comment);
  } else {
    currentBlog["comments"] = [comment];
  }

  sendBlog(id, null, null, null, currentBlog["comments"], null);
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
  fetch("http://localhost:3001/comments", options)
    .then((r) => r.json())
    .catch(console.warn);
  // location.reload();
}

module.exports = {
  pageLoad,
  sendBlog,
  displayOnLoad,
  sendComment,
  handleCommentValues,
  getFinalGifUrl,
  gifPreview,
  addListeners,
  buildCards,
};

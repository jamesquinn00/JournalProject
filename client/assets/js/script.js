let button = document.querySelector("#submitbutton");
let form1 = document.querySelector("#form1");

async function pageLoad(){
  try{
    let response = await fetch(`http://localhost:3000/blogs/`);
    response = await response.json();
    displayOnLoad(response)
  } catch(err){
    console.log(err)
  }
}

function displayOnLoad(data){
  const blogSection = document.querySelector(".blog-section-simple")
  
  for(let x in data){
      let currentBlog = data[x]
      console.log(currentBlog)
      const blogPost = document.createElement("div")
      blogPost.setAttribute("class","blog-post")
      blogSection.appendChild(blogPost)

      const blogWrapper = document.createElement("div")
      blogWrapper.setAttribute("class","blog-post-thumbnail-wrapper blog-image")
      blogPost.appendChild(blogWrapper)

      const blogImg = document.createElement("img")
      blogImg.setAttribute("src","assets/images/blog_1.jpg")
      blogWrapper.appendChild(blogImg)

      const blogLink = document.createElement("a")
      blogLink.setAttribute("href",`http://localhost:3000/blogs/${currentBlog.id}`)
      blogPost.appendChild(blogLink)

      const blogTitle = document.createElement("h6")
      blogTitle.setAttribute("class", "blog-post-title")
      blogTitle.textContent = currentBlog.heading
      blogLink.appendChild(blogTitle)

      const blogContent = document.createElement("p")
      blogContent.textContent = currentBlog.content
      blogLink.appendChild(blogContent)

      blogSection.appendChild(blogPost)
    }
  // <div class="featured-post blog-post">
  //             <div class="blog-post-thumbnail-wrapper blog-image">
  //               <img src="assets/images/blog_1.jpg" alt="blog post" />
  //             </div>
  //             <a href="#" class="blog-post-permalink">
  //               <h6 class="blog-post-title">
  //                 Blog post title 1
  //               </h6>
  //               <p>
  //                 Blog Content
  //               </p>
  //             </a>
  //           </div>
}

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
  send(blogtitle, blogcontent, bloggif);
  displayBlogOnPage(blogtitle, blogcontent, bloggif);
  
}

function send(title, contents, gif) {
  const blogData = {
    id: null,
    heading: title,
    content: contents,
    image: gif,
  };
  console.log(blogData)
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

async function displayBlogOnPage(title, content, gif) {
  try{
    let response = await fetch(`http://localhost:3000/blogs/`);
    response = await response.json();
    let arrayLength =  await response.length;
    console.log(arrayLength)

    let response2 = await fetch(`http://localhost:3000/blogs/${arrayLength}`);
    response2 = await response2.json();

  } catch(err){

  }
}

//Also, how to give user option to choose a gif- how to show options with api?

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
  
  
  for(let x in data){
      blogNumber = parseInt(x)+1
      console.log(blogNumber)
      let currentBlog = data[x]
      if(blogNumber<=6){
        buildCards("#page1",currentBlog)
      } else if(blogNumber>6 && blogNumber<=12){
        buildCards("#page2",currentBlog)
      }
      
    }
    addListeners(data)
}

function buildCards(id,currentBlog){
      const blogSection = document.querySelector(id)
      const blogPost = document.createElement("div")
      blogPost.setAttribute("class","blog-post")
      blogSection.appendChild(blogPost)

      const blogWrapper = document.createElement("div")
      blogWrapper.setAttribute("class","blog-post-thumbnail-wrapper blog-image")
      blogPost.appendChild(blogWrapper)

      const blogImg = document.createElement("img")
      blogImg.setAttribute("src","assets/images/blog_1.jpg")
      blogWrapper.appendChild(blogImg)

      const blogTitle = document.createElement("h6")
      blogTitle.setAttribute("class", "blog-post-title")
      blogTitle.textContent = currentBlog.heading
      blogPost.appendChild(blogTitle)

      const blogContent = document.createElement("p")
      let bloglength = currentBlog.content.replace("\n","").trim().length;
      let blogtext = currentBlog.content.replace("\n","").trim();
      if (bloglength>30){     
        console.log(">30")       
        console.log(blogtext.split());
        console.log(`blog ${currentBlog.id} is too long`);
        blogContent.textContent = blogtext.substring(0,150)+"...";
        }
      // blogContent.textContent = currentBlog.content
      blogPost.appendChild(blogContent)
      blogSection.appendChild(blogPost)
}

function addListeners (data){
  const blogSection = document.querySelector(".blog-section-simple")
  const allBlogs = document.querySelectorAll(".blog-section-simple .blog-post")
  console.log(data)
  for(let i = 0; i<allBlogs.length; i++){
    currentBlog = data[i]
    allBlogs[i].addEventListener("click", e=>{
      blogSection.style.display = "none";
      let currentBlog = data[i]

      const singleBlog = document.querySelector(".single-blog")
      const blogPost = document.createElement("div")
      blogPost.setAttribute("class","blog-post")
      singleBlog.appendChild(blogPost)

      const blogWrapper = document.createElement("div")
      blogWrapper.setAttribute("class","blog-post-thumbnail-wrapper blog-image")
      blogPost.appendChild(blogWrapper)

      const blogImg = document.createElement("img")
      blogImg.setAttribute("src","assets/images/blog_2.jpg")
      blogWrapper.appendChild(blogImg)

      const blogTitle = document.createElement("h6")
      blogTitle.setAttribute("class", "blog-post-title")
      blogTitle.textContent = currentBlog.heading
      blogPost.appendChild(blogTitle)

      const blogContent = document.createElement("p")
      
      blogContent.textContent = currentBlog.content
      blogPost.appendChild(blogContent)

      singleBlog.appendChild(blogPost)
    })
  }
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
  // displayBlogOnPage(blogtitle, blogcontent, bloggif);
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

// async function displayBlogOnPage(title, content, gif) {
//   try{
//     let response = await fetch(`http://localhost:3000/blogs/`);
//     response = await response.json();
//     let arrayLength =  await response.length;
//     console.log(arrayLength)

//     let response2 = await fetch(`http://localhost:3000/blogs/${arrayLength}`);
//     response2 = await response2.json();

//   } catch(err){

//   }
// }

//Also, how to give user option to choose a gif- how to show options with api?

//Query selectors for page buttons to click and for "active" class to be rotated
let pagenos = document.querySelectorAll(".page-number");
const next = document.querySelector(".next-page");
const previous = document.querySelector(".previous-page");
//let page=document.querySelector('ul.pagination > li.active');
let pages = document.querySelectorAll(".page-content .page");

//Function to add "active" class for page number button
let activatePage = () => {
  for (let i = 0; i <= 2; i++) {
    pagenos[i].addEventListener("click", (e) => {
      e.preventDefault();
      pagenos.forEach((li) => {
        li.classList.remove("active");
      });
      pagenos[i].classList.add("active");
      pages.forEach((p) => {
        p.classList.remove("active");
      });

      pages[i].classList.add("active");
      // scroll to top of page once page has changed
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
    nextPage();
    previousPage();
  }
  // window.scroll(0, 0);
};

//EventListeners for Next Page and Previous Page
next.addEventListener("click", nextPage);
previous.addEventListener("click", previousPage);

//Function to go to next and previous pages
function nextPage() {
  var pageCounter = 0;
  for (let j = 0; j <= 2; j++) {
    if (pagenos[j].classList.contains("active") === true) {
      pageCounter = j;
    }
  }
  if (pageCounter === 2) {
    pagenos.forEach((li) => {
      li.classList.remove("active");
    });
    pagenos[0].classList.add("active");
    pageCounter = 0;
    console.log("pageCounter" + pageCounter);
    pages.forEach((p) => {
      p.classList.remove("active");
    });
    pages[0].classList.add("active");
  } else {
    pagenos.forEach((li) => {
      li.classList.remove("active");
    });
    pagenos[pageCounter + 1].classList.add("active");
    pageCounter += 1;
    console.log("pageCounter" + pageCounter);
    pages.forEach((p) => {
      p.classList.remove("active");
    });
    pages[pageCounter].classList.add("active");
  }
}

function previousPage() {
  var pageCounter = 0;
  for (let j = 0; j <= 2; j++) {
    if (pagenos[j].classList.contains("active") === true) {
      pageCounter = j;
    }
  }
  if (pageCounter === 0) {
    pagenos.forEach((li) => {
      li.classList.remove("active");
    });
    pagenos[2].classList.add("active");
    pageCounter = 2;
    console.log("pageCounter" + pageCounter);
    pages.forEach((p) => {
      p.classList.remove("active");
    });
    pages[2].classList.add("active");
  } else {
    pagenos.forEach((li) => {
      li.classList.remove("active");
    });
    pagenos[pageCounter - 1].classList.add("active");
    pageCounter -= 1;
    console.log("pageCounter" + pageCounter);
    pages.forEach((p) => {
      p.classList.remove("active");
    });
    pages[pageCounter].classList.add("active");
  }
}

//Execute function for acivatePage(contains nextPage() and previousPage() functions)
activatePage();

module.exports = {
  activatePage,
  nextPage,
  previousPage,
};

let pagenos = document.querySelectorAll(".page-number");
const next = document.querySelector(".next-page");
const previous = document.querySelector(".previous-page");
//let page=document.querySelector('ul.pagination > li.active');
let pages = document.querySelectorAll(".page-content .page");

var pageCounter=0

let activatePage = () => {
    for (let i=0; i<=2; i++){
        pagenos[i].addEventListener("click", e => {
            e.preventDefault();
            pagenos.forEach(li => {
                li.classList.remove("active");
            })
            pagenos[i].classList.add("active");
            pages.forEach(p => {
                p.classList.remove("active");
            })
    
            pages[i].classList.add("active");
        })
    }
    window.scroll(0, 0);
}

let nextPage = (pageCounter) => {
    //let page=document.querySelector('ul.pagination > li.active');
    //let index = page.textContent - 1;
    next.addEventListener("click", () => {
        if (pageCounter===2){
            pagenos.forEach(li => {
                li.classList.remove("active");
            })
            pagenos[0].classList.add("active");
            pageCounter = 0;
            console.log("pageCounter"+pageCounter);
            pages.forEach(p => {
                p.classList.remove("active");
            })
            pages[0].classList.add("active");
        }
        else {
            pagenos.forEach(li => {
                li.classList.remove("active");
            })
            pagenos[pageCounter+1].classList.add("active");
            pageCounter += 1;
            console.log("pageCounter"+pageCounter);
            pages.forEach(p => {
                p.classList.remove("active");
            })
            pages[0].classList.add("active");
        }
    })
}

activatePage();
//nextPage(pageCounter);
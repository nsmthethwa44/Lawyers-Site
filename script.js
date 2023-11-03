// new services slide 
var swiper = new Swiper(".mySlide", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
},
breakpoints: {
200: {
  slidesPerView: 1,
},

567: {
  slidesPerView: 2,
},
 992: {
  slidesPerView: 3,
},
},
});

// accordion 
let accBox = document.querySelectorAll(".accordion .box");
accBox.forEach((item, index) =>{
 item.onclick = (e) =>{
    item.classList.toggle("open");
   
    let dropdown = item.querySelector(".dropdown");
    let heading = item.querySelector(".heading");
    let closed = item.querySelector(".closed");
    
    if (item.classList.contains("open")){
        dropdown.classList.add("active");
        heading.classList.add("active");
        closed.classList.add("opened");
    }else{
        dropdown.classList.remove("active");
        heading.classList.remove("active");
        closed.classList.remove("opened");
    }
    console.log(item)
 };
});

let header = document.querySelector(".header");
let arrowUp = document.querySelector(".goUp");
let menu = document.querySelector(".menu");
let navbar = document.querySelector(".navbar")

window.onscroll = () =>{
  menu.classList.remove("close");
  navbar.classList.remove("active")

  if (window.scrollY >2){
    header.classList.add("active");
    arrowUp.classList.add("active");
  }else{
    header.classList.remove("active");
    arrowUp.classList.remove("active");
  }
}
menu.onclick = () =>{
  menu.classList.toggle("close");
  navbar.classList.toggle("active")
}

// when nav link is clicked add active class
// remove current active class
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(navLink).forEach((item, index) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
  }
});
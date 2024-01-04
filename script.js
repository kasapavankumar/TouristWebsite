const preloader=document.querySelector(".preloader")

window.addEventListener("load",()=>{
    setTimeout(()=>{
        preloader.classList.toggle("remove")
    },1000)
})

const menu = document.querySelector(".nav-menu");
const nav_top=document.querySelector(".navbar-top");
const nav_menu=document.querySelector("#nav-menu")
menu.addEventListener("click",()=>{
    if (nav_top.classList.contains("active")){
        nav_top.classList.remove("active");
        nav_menu.className="fa-solid fa-bars"
    }else{
        nav_top.classList.add("active");
        nav_menu.className="fa-solid fa-xmark"
    }
})

const nav_link=document.querySelectorAll(".nav-link");

nav_link.forEach(n=>{
    n.addEventListener("click",()=>{
        nav_top.classList.remove("active")
        nav_menu.className="fa-solid fa-bars"
    })
})
//header section//
const header=document.querySelector(".header")
window.addEventListener("scroll",()=>{
    if(window.scrollY > 80){
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
})

document.querySelector(".Copyright-year").innerHTML=new Date().getFullYear();


const loginBtn=document.querySelector(".login-btn");
const signupBtn=document.querySelector(".signup-btn");
const closeIcon=document.querySelector(".close-icon");
const formBox=document.querySelector(".form-box");
const loginContainer=document.querySelector(".login-container");
const registerContainer=document.querySelector(".register-container");


signupBtn.addEventListener("click",()=>{
    formBox.style.transform="scale(1)";
    loginContainer.style.left="-510px";
    registerContainer.style.right="5px"
})
loginBtn.addEventListener("click",()=>{
    formBox.style.transform="scale(1)";
    loginContainer.style.left="4px";
    registerContainer.style.right="-520px"
})

function signin(){
    loginContainer.style.left="-510px";
    registerContainer.style.right="5px"
}
function login(){
    loginContainer.style.left="4px";
    registerContainer.style.right="-520px"
}
closeIcon.addEventListener("click",()=>{
    console.log("clicked")
    formBox.style.transform="scale(0)"
})

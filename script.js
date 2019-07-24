const button = document.getElementsByClassName("menu-btn");
const menu = document.getElementsByClassName("nav-list");
const menuItems = document.querySelectorAll(".nav-list li a");
const footerMenu = document.querySelectorAll(".footer-list li");
const xBtn = document.getElementsByClassName("x-btn");
const listItems = document.getElementsByClassName('item');


const media = window.matchMedia("(max-width: 820px)");


function mediaQuery(){
    if(media.matches){
        
        function slideIn(){
            menu[0].style.width = "50%";
            for(let i =0; i < listItems.length;i++){
                listItems[i].style.opacity = "1";
            }
            xBtn[0].style.opacity = "1";
            xBtn[0].style.marginLeft = "40%"; 
        }
        
        function slideOut(){
            menu[0].style.width = "0";
            for(let i =0; i < listItems.length;i++){
                listItems[i].style.opacity = "0";
            }
            xBtn[0].style.opacity = "0";
            xBtn[0].style.marginLeft = "0";
            for(let i =0; i < footerMenu.length; i++){
                footerMenu[i].style.opacity = "1"; 
            }
        }
        
        for(let i=0; i< listItems.length; i++){
                listItems[i].addEventListener("click", slideOut);
        }
        
        
        button[0].addEventListener("click", slideIn);
        xBtn[0].addEventListener("click", slideOut);
    }
    
}


mediaQuery(media);



const home = document.querySelector(".home a");

const homeFooter = document.querySelector(".footer-list .home a");


home.addEventListener("click", function(e){
    e.preventDefault;
    window.scrollTo(0,0);
});

homeFooter.addEventListener("click", function(e){
    e.preventDefault;
    window.scrollTo(0,0);
});

const links = document.querySelectorAll('.nav-list li');
const footLinks = document.querySelectorAll('.footer-list li');


for(let i =0; i < links.length; i++){
    links[i].addEventListener("click", function(){
            setTimeout(() => {
                window.scrollBy(0,-55); 
            }, 10,);
    });

}

for(let i =0; i < footLinks.length; i++){
    footLinks[i].addEventListener("click", function(){
            setTimeout(() => {
                window.scrollBy(0,-50); 
            }, 10);
    });

}








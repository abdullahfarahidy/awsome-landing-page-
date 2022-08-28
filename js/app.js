const menuItem = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));

function createListItem() {
    for (sec of sections) {
        secname = sec.getAttribute('data-nav');
        seclink = sec.getAttribute('id');
        listItem = document.createElement("li");
        listItem.innerHTML = `<li><a href ="#${seclink}" data-nav ="${seclink}" class ="menu__link">${secname}</a></li>`;
        menuItem.appendChild(listItem);
    }
}
createListItem();

 
 //preparing toggle function
 
 let secClass = document.querySelectorAll(".your-active-class");
 let isShow = true;
 let litoggles =  Array.from(document.getElementsByClassName("menu__link"));
//toggle function(show-hide)

 for(litoggle of litoggles){
    addEventListener("click", function showHideSec(){
        isShow=!isShow;
     secClass.classList.toggle("hide",isShow);
    });
 };

 
 // click _scroll to specified section

 function ClickScroll(){
    menuItem.addEventListener('click', (scro) => {
     scro.preventDefault();
     document
     .getElementById(scro.target.dataset.nav)
     .scrollIntoView({behavior:"smooth"});
     addActiveClass(scro.target.dataset.nav);
   
  });   
};

setTimeout(ClickScroll(),201);



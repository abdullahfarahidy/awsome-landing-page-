/*
creating list items dynamically
*/
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

// click _scroll to specified section

function ClickScroll() {
    menuItem.addEventListener('click', (scro) => {
        scro.preventDefault();
        document
            .getElementById(scro.target.dataset.nav)
            .scrollIntoView({ behavior: "smooth" });      //nice scrolling  behavior
    });
};
// setTimeout to wait some time before performing the function.
setTimeout(ClickScroll(), 201);
ClickScroll();

//below function is  to add active class to the section in viewport only and remove it  from others
function targetedActiveSec (){
    // Select all anchor using "menu__link" class
    const listIt = document.querySelectorAll('.menu__link');
    sections.forEach((section, i)=>{ 
        const viewsection = section.getBoundingClientRect(); // storing section measurements(section rect) in viewsection variable
        //Check if the section is in viewport or not 
        if (viewsection.top <= 400 && viewsection.bottom >= 320){
            //section in viewport accourding to top and bottom boundings
            
            section.classList.add("your-active-class"); 
            /*add 'your-active-class' class to the specific section in the vieport
            add 'active_click' class to the specific nav anchor */
            
            listIt[i].classList.add("active_click"); 
        } else{
            //Remove both section and navanchor active classes when a section is mot invieport
            section.classList.remove("your-active-class");
            listIt[i].classList.remove("active_button");
        }
    })
}
//when scrolling targetedActiveSec function is executed 
window.addEventListener('scroll',(event)=>{
    targetedActiveSec();
});
 // for menu bar
const menu = document.querySelector("ul");
const bar = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-times")


bar.addEventListener('click', ()=>{
    menu.style.right = "-30px";
})

cross.addEventListener('click', ()=>{
    menu.style.right = "-600px";
})

// profession textAnimation
let professions = ["Web Developer","OS Developer", "Photographer"];
let currentProf = "";
let profCount = 0;
let letter ="";
let letterIndex = 0;

(function textAnimation(){
    if(profCount === professions.length){
        profCount = 0;
    }
    currentProf = professions[profCount];
    letter = currentProf.slice(0 , ++letterIndex);
    document.querySelector(".prof").textContent = letter;
    if(letter.length === currentProf.length){
        profCount++;
        letterIndex = 0;
    }
    setTimeout(textAnimation, 500)
    
    
}());


// navbar scrolling transition
const nav = document.querySelector("nav");
const show = document.querySelector(".show");
const navScrollOption = {rootMargin: "-200px 0px 0px 0px"};


const navObserver = new IntersectionObserver(function (entries,navObserver){
   
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            nav.classList.add("nav-scroll")
        }else{
            nav.classList.remove("nav-scroll")
        }
     });
   
},navScrollOption)


navObserver.observe(show);
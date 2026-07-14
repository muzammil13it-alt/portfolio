/* ==========================================
   TYPING ANIMATION
========================================== */

const typing = document.querySelector(".typing");

const words = [

    "Entry-Level IT Support Specialist",
    "Computer Troubleshooter",
    "Windows Support",
    "Learning Python",
    "Learning Backend Development"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(type,1600);

            return;

        }

    }

    else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(type,deleting ? 45 : 90);

}

type();



/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll("section");

function reveal(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();



/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section, header");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if(pageYOffset >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});



/* ==========================================
   SMOOTH BUTTON HOVER
========================================== */

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px) scale(1.02)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});



/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show-btn");

}

else{

topButton.classList.remove("show-btn");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});



/* ==========================================
   CURRENT YEAR
========================================== */

const footer=document.querySelector("footer p");

footer.innerHTML=`© ${new Date().getFullYear()} Muhammad Muzammil. All Rights Reserved.`;
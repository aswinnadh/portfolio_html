function toggleMenu() {
    const menu = document.querySelector(".menu-links");    
       
    const icon = document.querySelector(".hamburger-icon");
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".contact-info-upper-container, .about-containers,.section__text__p1, .section__text__p2, .btn").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value)/250;
        var y = (e.clientY * moving_value)/250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}

//dark light mode
const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if(currentTheme === "dark") {
    setDarkMode();
}

btn.addEventListener("click",  function () {
    setTheme();
});
btn2.addEventListener("click", function () {
    setTheme();
});

function setTheme() {
    let currentTheme=document.body.getAttribute("theme");

    if (currentTheme === "dark") {
        setLightMode();
    }else{
        setDarkMode();
    }
}

function setDarkMode() {
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");
    
    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("src_dark");
    });
}
function setLightMode() {
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");
    
    themeIcons.forEach((icon) => {
        icon.src =icon.getAttribute("src_light");
    });
}



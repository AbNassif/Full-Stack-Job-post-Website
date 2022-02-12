function toggleClass(el, className) {
    el.classList.toggle(className);
}


//Menu toggler rotate effect

const menuToggler = document.getElementById("navbar-toggler");
menuToggler.addEventListener("click",toggleClass.bind(this,menuToggler,`rotateHeaven`))


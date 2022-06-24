const nav = document.querySelector('nav');
const logo = document.getElementById('logo');

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 50) {
                nav.classList.add('active_nav');
            } else {
                nav.classList.remove('active_nav');
            }
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 50) {
                logo.classList.add('active_logo');
            } else {
                logo.classList.remove('active_logo');
            }
        });

const hamburger = document.getElementById('nav_hamburger');
const navLinks = document.getElementById('nav_menu');

document.onclick = function(e){
    if(e.target.id !== 'nav_menu' && e.target.id !=='nav_hamburger')
    {
        hamburger.classList.remove('open')
        navLinks.classList.remove('active')
    }
}

hamburger.onclick = function(){
    hamburger.classList.toggle('open')
    navLinks.classList.toggle('active')
}


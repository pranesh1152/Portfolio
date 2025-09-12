/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            nav.classList.toggle('show');
            
            // Optional: Add active class to hamburger for animation
            toggle.classList.toggle('active');
        });
    }
}
showMenu('nav-toggle','nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show');
    
    // Also remove active class from toggle button
    if(navToggle) {
        navToggle.classList.remove('active');
    }
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== CLOSE MENU WHEN CLICKING OUTSIDE ====================*/
document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    // If click is outside nav menu and toggle button, close menu
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('show');
        navToggle.classList.remove('active');
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass?.classList.add('active-link');
        } else {
            sectionsClass?.classList.remove('active-link');
        }                                                    
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== HANDLE RESIZE EVENT ====================*/
window.addEventListener('resize', () => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    // Close mobile menu when resizing to desktop
    if (window.innerWidth >= 768) {
        navMenu.classList.remove('show');
        navToggle.classList.remove('active');
    }
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});
const menuIcon = document.querySelector('.menu-icon');
const headerNav = document.querySelector('.header-nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    headerNav.classList.toggle('active');
});

// scroll reveal animation 
// scroller reveal 
animateElement = (element,origin,delay,distance) => {
    // Initialize ScrollReveal with options
    const sr = ScrollReveal({
        delay: delay,
        distance: distance,
        duration: 1000,
        easing: 'ease',
        origin: origin
    });
  
    // Reveal the element
    sr.reveal(element);
}

animateElement('.header-logo','left','500','500px')
animateElement('.header-nav','right','500','500px')
animateElement('.hero-content','left','500','500px')
animateElement('.hero-img','right','500','500px')
animateElement('.social-icon-list .nav','bottom','500','500px')
window.sr = ScrollReveal();
sr.reveal('.navbar',{
  duration: 2000,
  origin:'bottom'
});

window.sr = ScrollReveal();
sr.reveal('.header-content-left',{
  duration: 2500,
  origin:'top',
  distance: '200px'
});

window.sr = ScrollReveal();
sr.reveal('.header-content-right',{
  duration:2500,
  origin: 'bottom',
  distance: '200px'
});

window.sr = ScrollReveal();
sr.reveal('.header-btn',{
  duration:2500,
  origin: 'right',
  delay : 1000
});


window.sr = ScrollReveal();
sr.reveal('#testimonial',{
  duration:2500,
  origin: 'left',
  distance: '300px',
  viewFactor : 0.4
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})

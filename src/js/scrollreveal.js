//navbar
window.sr = ScrollReveal();
sr.reveal('.navbar',{
  duration: 2000,
  origin:'bottom'
});
//header
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

//testimonial
window.sr = ScrollReveal();
sr.reveal('#testimonial',{
  duration:2500,
  origin: 'left',
  distance: '300px',
  viewFactor : 0.4
});

window.sr = ScrollReveal();
sr.reveal('.primera1',{
  duration:3000,
  origin: 'left',
  distance: '300px',
  viewFactor : 0.4
});


window.sr = ScrollReveal();
sr.reveal('.titulo-testimonial1',{
  duration:2500,
  origin: 'top',
  distance: '300px',
  viewFactor : 0.4
});
window.sr = ScrollReveal();
sr.reveal('.p-testimonial1',{
  duration:2500,
  origin: 'right',
  distance: '300px',
  viewFactor : 0.4
});

window.sr = ScrollReveal();
sr.reveal('.b-testimonial1',{
  duration:2500,
  origin: 'right',
  delay : 1000
});

window.sr = ScrollReveal();
sr.reveal('.primera2',{
  duration:3000,
  origin: 'right',
  distance: '300px',
  viewFactor : 0.4
});

window.sr = ScrollReveal();
sr.reveal('.titulo-testimonial2',{
  duration:2500,
  origin: 'top',
  distance: '300px',
  viewFactor : 0.4
});
window.sr = ScrollReveal();
sr.reveal('.p-testimonial2',{
  duration:2500,
  origin: 'left',
  distance: '300px',
  viewFactor : 0.4
});

window.sr = ScrollReveal();
sr.reveal('.b-testimonial2',{
  duration:2500,
  origin: 'right',
  delay : 1000
});
window.sr = ScrollReveal();
sr.reveal('.primera3',{
  duration:3000,
  origin: 'left',
  distance: '300px',
  viewFactor : 0.4
});

window.sr = ScrollReveal();
sr.reveal('.titulo-testimonial3',{
  duration:2500,
  origin: 'top',
  distance: '300px',
  viewFactor : 0.4
});
window.sr = ScrollReveal();
sr.reveal('.p-testimonial3',{
  duration:2500,
  origin: 'right',
  distance: '300px',
  viewFactor : 0.4
});

window.sr = ScrollReveal();
sr.reveal('.b-testimonial3',{
  duration:2500,
  origin: 'right',
  delay : 1000
});


//smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})

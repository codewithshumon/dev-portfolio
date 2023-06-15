
// ==========Toggle icon navbar===============

let menuIcon = document.querySelector("#menu-icon");
let addNavbar = document.querySelector(".navbar");

menuIcon.onclick = () => {

    menuIcon.classList.toggle("bx-x");
    addNavbar.classList.toggle("active")
}



// ==========scroll section active link===============

let sections = document.querySelectorAll('section');
let navBar = document.querySelectorAll('hader nav a');


window.onscroll = () => {

    sections.forEach((sec)=> {

        let top = window.scrollY;

        let offsetTop = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offsetTop && top < offsetTop + height) {
 
            navBar.forEach((links) => {
                links.classList.remove('active');
                document.querySelector('hader nav a[href*=' + id + ']').classList.add('active');
            })
        }

    });

   

    let heder = document.querySelector('.hader');
    heder.classList.toggle('sticky', window.scrollY > 150)


    // ==========remove toggle icon and navbar when click navbar (scroll)===============

    menuIcon.classList.remove("bx-x");
    addNavbar.classList.remove("active")

};




// ==========remove scroll reveal===============


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin:'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
 ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});


// ==========typed js===============

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Youtuber', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})




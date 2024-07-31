// console.log('here');

const navbtn = document.querySelector('.btn');
const navbtnall = document.querySelectorAll('.btn');

navbtnall.forEach(navbtn => {
    navbtn.addEventListener('click', () => {
        document.querySelector('.active-btn')?.classList.remove('active-btn');
        navbtn.classList.add('active-btn');
    });
});


const lowerCon = document.getElementById('lower-contact');

lowerCon.addEventListener('click',  () => {
    navbtnall.forEach(navbtn => {
            document.querySelector('.active-btn')?.classList.remove('active-btn');
            navbtn.classList.add('active-btn');
        
    });
});

var typed = new Typed('.typing', {
      strings: ['Back-End Developer', 'Front-End Developer', 'Web Developer'],
      typeSpeed: 100,
      startDelay: 20,
      backSpeed: 70,
      loop: true
    });


var clickemail = document.getElementById("email");
var emailcontent = document.getElementById("personal-email");

clickemail.addEventListener("click", () => {

    const email = emailcontent.value;

    navigator.clipboard.writeText(email);
    
});


// const tingloy = document.getElementById("tingloy-ferry");

// tingloy.addEventListener("click", () => {
//     // tingloy.style.fontSize = '12px';

//     const visual = document.getElementById("visual-part");
//     visual.style.display = 'none';
// });


$(document).ready(function(){

    $('#tingloy-ferry').click(function(){
        $('#visual-part').css('display', 'none');
        $('.wifimonitoring-visual').css('display', 'none');
        $('.tingloy-ferry-visual').fadeIn('slow');

        $('.info-part').css('display', 'none');
        $('.monitoring-sys-info').css('display', 'none');
        $('.tingloy-ferry-info').fadeIn('slow');

        $('.monitoring-active-icon').css("transform","rotate(0deg)");
        $('.tingloy-active-icon').css("transform","rotate(-45deg)");
    });

    $('#monitoring-sys').click(function(){
        $('#visual-part').css('display', 'none');
        $('.tingloy-ferry-visual').css('display', 'none');
        $('.wifimonitoring-visual').fadeIn('slow');

        $('.info-part').css('display', 'none');
        $('.tingloy-ferry-info').css('display', 'none');
        $('.monitoring-sys-info').fadeIn('slow');

        $('.tingloy-active-icon').css("transform","rotate(0deg)");
        $('.monitoring-active-icon').css("transform","rotate(-45deg)");
    });


    $('.deac-icon').click(function(){
        $('.tingloy-ferry-visual').css('display', 'none');
        $('.wifimonitoring-visual').css('display', 'none');
        $('#visual-part').fadeIn('slow');

        $('.tingloy-ferry-info').css('display', 'none');
        $('.monitoring-sys-info').css('display', 'none');
        $('.info-part').fadeIn('slow');

        $('.monitoring-active-icon').css("transform","rotate(0deg)");
        $('.tingloy-active-icon').css("transform","rotate(0deg)");
    });



});















const swiper = new Swiper('.project-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  graCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  breakpoints: {
    0: {
        slidePerView:1
    },
    620:{
        slidePerView:2
    },
     1024: {
        slidePerView:3
    }
  }
});




const video = document.getElementById('tingloy-ferry-vid');

function pauseVid(){
    video.pause();
}













$(document).ready(function(){
    $('.project-video').click(function(){
        $('.project-video-content').toggle('linear');
    });

    $('.project-certificates').click(function(){
        $('.project-certificates-content').toggle('linear');

    });
    $('.project-interface').click(function(){
        $('.project-interface-content').toggle('linear');
    });

    $('.project-certificates-dict').click(function(){
        $('.project-certificates-content-dict').toggle('linear');
    });

    $('.project-interface-dict').click(function(){
        $('.project-interface-dict-content').toggle('linear');
    });                 

});













const email = document.getElementById('email');
const emailTooltip = document.getElementById('email-tooltip');

email.addEventListener('click', () =>{
    emailTooltip.style.display = 'block';
    setTimeout(()=>{
        emailTooltip.style.display = 'none';
    }, 2000); 
});
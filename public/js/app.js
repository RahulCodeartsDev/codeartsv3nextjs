

/* On Scroll Js */
window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        var header= document.getElementById("header");
        header.classList.add('active');
    } else {
        var header= document.getElementById("header");
        header.classList.remove('active');
    }
}
/* On Scroll Js */

/* Header Click events */
function csMenu(){
    let csMenu= document.getElementById('cs-menu');
    csMenu.classList.add('cs-mobile_menu_open');
}
function csMenuclose(){
    let csMenu= document.getElementById('cs-menu');
    csMenu.classList.remove('cs-mobile_menu_open');
}
function subMenu(){
    let subMenu= document.getElementById('cs-sub_menu');
    subMenu.classList.toggle('cs-sub_menu_open');
}
function csRightpanel(){
    let right_panel= document.getElementById('cs-right_panel');
    let csOvarlay= document.getElementById('cs-Ovarlay');
    right_panel.classList.add('cs-company_info_right_panel_open');
    csOvarlay.classList.add('cs-ovarlay_open');
}
function csOvarlay(){
    let right_panel= document.getElementById('cs-right_panel');
    let csOvarlay= document.getElementById('cs-Ovarlay');
    right_panel.classList.remove('cs-company_info_right_panel_open');
    csOvarlay.classList.remove('cs-ovarlay_open');
}
/* Header Click events */

/*Text Type script*/

if ($(".cs-text_slider").length == 1) {              
    var typed_strings = 
    $(".cs-text_slide_items").text();
        var typed = new Typed(".cs-text_slider", {
            strings: typed_strings.split(","),
            typeSpeed: 50,
            loop: true,
            backDelay: 900,
            backSpeed: 30,
        });
        
}


/*Text Type script*/


document.addEventListener("mousemove", movement);
function movement(e){
    this.querySelectorAll('.move').forEach(move =>{
        const speed= move.getAttribute('data-speed');
        const x= (window.innerWidth - e.pageX*speed)/1000;
        const y= (window.innerHeight - e.pageY*speed)/100;

        move.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}



setInterval(() => {
var owl = $('#blogs-slider');
owl.owlCarousel({
     loop: false,
     dots: true,
     nav:false,
     autoplay:true,
     center:false,
     margin: 30,
     responsive:{
         0:{
             items: 1,
             margin: 0,
         },
         600:{
             items: 2,
         },
         1000:{
             items: 3
         }
     }
 });
}, 500);

/*$('.counter').countUp();*/

setInterval(() => {
var owl = $('#brand-slider');
owl.owlCarousel({
     loop: false,
     dots: false,
     nav:false,
     autoplay:true,
     center:false,
     margin: 0,
     responsive:{
         0:{
             items: 2,
             margin: 0,
         },
         600:{
             items: 4,
             margin: 0,
         },
         1000:{
             items: 6
         }
     }
 });
}, 500);


setInterval(() => {
var owl = $('#testi-slider');
owl.owlCarousel({
     loop: false,
     dots: true,
     nav:false,
     autoplay:false,
     center:false,
     margin: 0,
     responsive:{
         0:{
             items: 1,
             margin: 0,
         },
         600:{
             items: 1,
         },
         1000:{
             items: 1
         }
     }
 });
}, 500);

setInterval(() => {
var owl = $('#team-slider');
owl.owlCarousel({
     loop: false,
     dots: true,
     nav:false,
     autoplay:false,
     center:false,
     margin: 30,
     responsive:{
         0:{
             items: 1,
             margin: 0,
         },
         600:{
             items: 2,
         },
         1000:{
             items: 4
         }
     }
 });

}, 500);




setInterval(() => {
    let singleProjectpopup = document.getElementsByClassName("cs-portfolio_item");
    
    for (let i = 0; i < singleProjectpopup.length; i++) {
        singleProjectpopup[i].addEventListener("click", function (item) {
            console.log("working");
            for (let i = 0; i < singleProjectpopup.length; i++) {
                if (item !== singleProjectpopup) {
                    singleProjectpopup[i].classList.remove("active");
                }
            }
            this.classList.toggle('active');
            
        });
        
    };

    
    
}, 500);

function close_pop(){    
    let singleProjectpopup = document.getElementsByClassName("cs-portfolio_item");
    singleProjectpopup.classList.remove('active')
}









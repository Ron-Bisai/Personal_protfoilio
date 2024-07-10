
/*===== SHOW MENU =====*/
const showmenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if (toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu')
        })
    }
}

showmenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navlink = document.querySelectorAll('.nav_link')

function linkaction(){
    const navmenu=document.getElementById('nav-menu')
    navmenu.classList.remove('show-menu')
}
navlink.forEach(n=> n.addEventListener('click',linkaction))


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections=document.querySelectorAll('section[id]')

function scrollactive(){
    const scrollY= window.pageYOffset

    sections.forEach(current =>{
        const sectionheight=current.offsetHeight
        const sectiontop=current.offsettop-50
        scetionId=current.getAttribute('id')

        if(scrollY>sectiontop  && scrollY <= sectiontop + sectionheight){
            document.querySelector('.nav_menu a[href*=' + scetionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav_menu a[href*=' + scetionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollactive)

/*===== CHANGE BACKGROUND HEADER =====*/ 
function scrollheader(){
    const header= document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
} 

window.addEventListener('scroll',scrollheader)



/*===== SHOW SCROLL TOP =====*/ 

function scrolltop(){
    const scrolltop= document.getElementById('scroll-top')
    if(this.scrollY>= 560) scrolltop.classList.add('show-scroll');
    else scrolltop.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrolltop)

/*===== MIXITUP FILTER PORTFOLIO =====*/ 
const mixer = mixitup('.portfolio_container', {
    selectors: {
        target: '.portfolio_content'
    },
    animation: {
        duration: 400
    }
});



/* Link active portfolio */ 
const linkportfolio= document.querySelectorAll('.portfolio_item')

function activeportfolio(){
    if(linkportfolio){
        linkportfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}

linkportfolio.forEach(l => l.addEventListener('click',activeportfolio))

/*===== SWIPER CAROUSEL =====*/ 


/*===== GSAP ANIMATION =====*/ 


gsap.from('.home_img',{opacity:0, duration:2, delay:.5, x:60})
gsap.from('.home_data',{opacity:0, duration:2, delay:.8, y:25})

gsap.from('.home_greeting, .home_name, .home_profession, .home__button',{opacity:0, duration:2, delay:1, y:25,ease:'expo.out',stagger:.2})

gsap.from('.nav_logo, .nav_toggle',{opacity:0, duration:2, delay:1.5, y:25,ease:'expo.out',stagger:.2})

gsap.from('.nav_item,', {opacity:0, duration:2, delay:1.8, y:25,ease:'expo.out',stagger:.2})

gsap.from('.home_social-icon, .home_name, .home_profession, .home__button',{opacity:0, duration:2, delay:2.0, y:25,ease:'expo.out',stagger:.2})





function myFunction() {
    document.getElementById("contact-form").reset();
  }
  

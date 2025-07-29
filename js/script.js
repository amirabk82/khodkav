$(document).ready(function(){

    // go up btn, sticky nav:
    let go_up_btn = $(".go-up");
    $(window).scroll(function(){

      console.log($(window).scrollTop())
      if($(window).scrollTop() > 200 ){
        go_up_btn.fadeIn("fast")
        go_up_btn.addClass("d-flex")

              // sticky nav
      $("nav").addClass("fixed")
      } 
      else{
        go_up_btn.fadeOut("fast", function(){
          go_up_btn.removeClass("d-flex")

        })

        // sticky nav
        $("nav").removeClass("fixed")
      }



      
    })
    go_up_btn.click(function(){
      $("html").animate({scrollTop: 0}, 800)
    })

    // loader
    $("body").addClass("loaded");


    // authPage:
    // اول مطمئن شو DOM کاملاً لود شده


    function showForm(type) {
      const $loginForm = $('#loginForm');
      const $registerForm = $('#registerForm');
      const $loginTab = $('#loginTab');
      const $registerTab = $('#registerTab');
  
      if (type === 'login') {
        $loginForm.addClass('active');
        $registerForm.removeClass('active');
        $loginTab.addClass('active');
        $registerTab.removeClass('active');
      } else {
        $loginForm.removeClass('active');
        $registerForm.addClass('active');
        $loginTab.removeClass('active');
        $registerTab.addClass('active');
      }
    }
  
    // تابع رو global می‌کنیم که از onclick قابل دسترسی باشه
    window.showForm = showForm;
  
  

    $("ul.navbar-nav li.nav-item a").click(function(){
      $("ul.navbar-nav li.nav-item a").removeClass("active");
      $(this).addClass("active");
    })
  


    // Reveal animation
    ScrollReveal({
      origin: "right",
      distance: '90px',
      duration: 1700,
      reset: true
  });

// hero
  ScrollReveal().reveal('.hero', {origin: "bottom"});

  ScrollReveal().reveal('.section-title', {duration: 1200});
  ScrollReveal().reveal('.benefit-item', {delay: 100, interval: 100});

  // services
  ScrollReveal().reveal('.niceGuy', {delay: 200, origin: "top"});
  ScrollReveal().reveal('.services-section ul', {delay: 200, origin: "top"});

  // bigBox
  ScrollReveal().reveal('.big-box', {origin:"top"});
  ScrollReveal().reveal('.big-box .col-3', {interval: 200});

  // stages
  ScrollReveal().reveal('.stages .arrowBg', {origin: "top"});
  ScrollReveal().reveal('.stages .content', {origin: "right"});
  ScrollReveal().reveal('.stages .content div', {interval: 200});

  // models
  ScrollReveal().reveal('.models .item', {interval: 100, origin: "top"});

  // last articles
  ScrollReveal().reveal('.last-articles .item', {interval: 100, origin: "top"});
  ScrollReveal().reveal('.last-articles aside', { origin: "left"});

  // accordion
  ScrollReveal().reveal('.accordion-item', { origin: "right", interval: 100});

  // footer
  ScrollReveal().reveal('footer .title', { origin: "right", delay: 100});
  ScrollReveal().reveal('footer .services', { origin: "top", delay: 100});
  ScrollReveal().reveal('footer .fast', { origin: "top", delay: 100});
  ScrollReveal().reveal('.logos', { origin: "left", delay: 100});

// social media
ScrollReveal().reveal('.socialMedia .icon', { origin: "bottom", interval: 200, delay: 100, distance: "100px"});

// safe
ScrollReveal().reveal('.safe', { origin: "top"});




 // scrollSpy
 const currentPath = window.location.pathname;

 // فقط وقتی در صفحه اصلی هستیم، کد اسکرول فعال باشه
 if (currentPath === "/" || currentPath.endsWith("index.html")) {
   const sections = $("section.linkedToMenu");
   const navLinks = $("nav a");
   let activeId = null;

   const observer = new IntersectionObserver((entries) => {
     let visibleSectionFound = false;

     entries.forEach(entry => {
       if (entry.isIntersecting) {
         const id = entry.target.id;
         if (activeId !== id) {
           activeId = id;
           navLinks.removeClass("active");
           navLinks.filter(`[href="#${id}"]`).addClass("active");
         }
         visibleSectionFound = true;
       }
     });

     // اگه هیچ سکشنی توی دید نبود → همه رو غیر فعال کن
     if (!visibleSectionFound) {
       navLinks.removeClass("active");
       activeId = null;
     }
   }, {
     root: null,
     threshold: 0.4
   });

   // مشاهده همه سکشن‌ها
   sections.each(function () {
     observer.observe(this);
   });

   // اسکرول نرم هنگام کلیک روی منو
   navLinks.on("click", function (e) {
     const href = $(this).attr("href");
     if (href.startsWith("#")) {
       e.preventDefault();
       $("html, body").animate({
         scrollTop: $(href).offset().top
       }, 500);
     }
   });
 } else {
   // اگر توی صفحه غیر از اصلی بودیم (مثل /404.html)
   $("nav a").removeClass("active");
   $("nav a[href='/'], nav a[href='index.html']").addClass("active");
 }





  });










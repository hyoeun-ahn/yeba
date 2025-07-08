$(document).ready(function () {

  //탑메뉴_____________________________
  $(".gnb").hover(function(){
    $(this).find(".sub").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  }, function(){
    $(this).find(".sub").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });


  //비주얼____________________________________
  let fadeContainer = $(".visual"),
  fadeImage = fadeContainer.find(".visu-img li"),
  oldidx = 0, 
  idx=0,  
  fadeCount = fadeImage.length, 
  interval = 7000;

  fadeImage.hide().eq(0).show();

  function fadeAni(idx){ 
  if(oldidx != idx){ 
    fadeImage.eq(oldidx).stop().animate({ opacity: 0 }, 1500);

    fadeImage.eq(idx).stop().css({opacity: 0, display: "block"}).show().animate({ opacity: 1 }, 1500);
  };
  oldidx = idx;
  };

  function fadeAuto(){
  fadeTimer = setInterval(function(){
    idx = (oldidx + 1) % fadeCount;
    fadeAni(idx);
    },interval);
  };

  fadeImage.eq(0).css({ opacity: 1, display: "block" });

  fadeAuto();

  fadeContainer.mouseenter(function(){
  clearInterval(fadeTimer);
  })
  .mouseleave(function(){
  fadeAuto();
  });



  //모달___________________________________
  $(".open-modal").on("click", function(e){
    e.preventDefault(); 
    $("#modal").fadeIn();
  });

  $(".btn-close").on("click", function(){
    $("#modal").fadeOut();
  });

  $("#modal").on("click", function(e) {
    if ($(e.target).is("#modal")) {
      $("#modal").fadeOut();
    }
  });





  // Sec2_______________________________
  const iconItems = document.querySelectorAll('.icon-item');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        iconItems.forEach((item, i) => {
          setTimeout(() => {
            item.classList.add('show');
          }, i * 500); 
        });
      } else {
        iconItems.forEach(item => item.classList.remove('show'));
      }
    });
  }, { threshold: 0.5});

  observer.observe(document.querySelector('.sec2-icons'));




  //sec1, sec3, sec4___________________________________
  function animateOnScroll() {
    let scrollTop = $(window).scrollTop();
    let windowHeight = $(window).height();
    

      // mainSec1 애니메이션
    if ($(".mainSec1").length) {
      const main1Top = $(".mainSec1").offset().top;
      if (scrollTop + windowHeight > main1Top + 100) {
        $(".title1").addClass("show");
        setTimeout(function () {
          $(".mainSec1 .modal-btn").addClass("show");
        }, 200);
      } else {
        $(".title1").removeClass("show");
        $(".mainSec1 .modal-btn").removeClass("show");
      };
    };
  
    // mainSec3 애니메이션
    if ($(".mainSec3").length) {
      let main3Top = $(".mainSec3").offset().top;
      if (scrollTop + windowHeight > main3Top + 100) {
        if (!$(".sec3-top").hasClass("show")) {
          setTimeout(function (){
            $(".sec3-top").addClass("show");
            $(".sec3-bottom").addClass("show");
          }, 500);
        }
      } else {
        $(".sec3-top").removeClass("show");
        $(".sec3-bottom").removeClass("show");
      };
    };

  
    // mainSec4 애니메이션
    if ($(".mainSec4").length) {
      const sec4Top = $(".mainSec4").offset().top;
  
      if (scrollTop + windowHeight > sec4Top + 200) {
        $(".talk img").each(function(index) {
          const that = $(this);
          setTimeout(function() {
            that.addClass("show");
          }, index * 800); 
        });
  
        setTimeout(function() {
          $(".sec4-txt").addClass("show");
        }, 2300); 
      } else {
        $(".talk img").removeClass("show");
        $(".sec4-txt").removeClass("show");
      };
      
    };
  };

  $(window).on("scroll", animateOnScroll);
  animateOnScroll();

  

});
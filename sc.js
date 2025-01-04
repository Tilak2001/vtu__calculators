$(document).ready(function(){
    $(".video").hover(function(){
        $(this).css("background-color", "#4399fa");
        $(this).css("color","white");
        $(this).css("border-color","#4399fa");
    }, function(){
        $(this).css("background-color", "darkblue");
        $(this).css("border-color","darkblue");
    })

    $(".know").hover(function(){
        $(this).css("background-color", "darkblue");
        $(this).css("color","white");
        $(this).css("border-color","darkblue");
    }, function(){
        $(this).css("background-color", "#4399fa");
        $(this).css("border-color","#4399fa");
    })
    $(".dropdown-item").hover(function(){
        $(this).css("background-color", "#002c73");
    }, function(){
        $(this).css("background-color", "#002c73");
    })
    $(".cnt").hover(function(){
        $(this).css("background-color", "#4399fa");
        $(this).css("color","white");
        $(this).css("border-color","#4399fa");
    }, function(){
        $(this).css("background-color", "darkblue");
        $(this).css("border-color","darkblue");
    })
    // $(".nav-link").hover(function(){
    //     $(this).css("border-bottom", "solid 6px hsl(199.71deg 100% 41.18%)");
    // }, function(){
    //     $(this).css("border-bottom", "solid 6px transparent");
    // })
});

// $('.team-wrapper').move({
//     infinite: true,       
//     slidesToShow: 3,  
//     slidesToScroll: 1, 
//     autoplay: true,    
//     autoplaySpeed: 5000,
//     arrows: false,          
//     dots: true, 
//     responsive: [
//       {
//         breakpoint: 1024, 
//         settings: {
//           slidesToShow: 1, 
//           slidesToScroll: 1,      
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1, 
//           slidesToScroll: 1,  
//         }
//       }
//     ]
//   });




// $(document).ready(function() {
//   let $carouselItems = $('.text-wrapper'); 
//   let $indicators = $('.indicators button');
//   let currentIndex = 0;
//   let slideInterval;


//   function showSlide(index) {
  
//     $carouselItems.removeClass('active');
//     $indicators.removeClass('active');

    
//     $carouselItems.eq(index).addClass('active');
//     $indicators.eq(index).addClass('active');

  
//     $('.inner').css('transform', 'translateX(' + (-index * 100) + '%)');
//   }


//   $indicators.on('click', function() {
//     currentIndex = $(this).data('slide-to');
//     showSlide(currentIndex);
//   });


//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % $carouselItems.length;
//     showSlide(currentIndex);
//   }

//   slideInterval = setInterval(nextSlide, 5000);

//   $('.carousel').hover(function() {
//     clearInterval(slideInterval);
//   }, function() {
//     slideInterval = setInterval(nextSlide, 5000);
//   });

//   showSlide(currentIndex);
// });


// $(document).ready(function() {
//   let $carouselItems = $('.team-wrapper'); 
//   let $indicators = $('.indicators1 button');
//   let currentIndex = 0;
//   let slideInterval;


//   function showSlide(index) {
  
//     $carouselItems.removeClass('active');
//     $indicators.removeClass('active');

//     $carouselItems.eq(index).addClass('active');
//     $indicators.eq(index).addClass('active');
  
//     $('.inner').css('transform', 'translateX(' + (-index * 100) + '%)');
//   }

//   $indicators.on('click', function() {
//     currentIndex = $(this).data('slide-to');
//     showSlide(currentIndex);
//   });
//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % $carouselItems.length;
//     showSlide(currentIndex);
//   }
//   slideInterval = setInterval(nextSlide, 5000);
//   $('.carousel1').hover(function() {
//     clearInterval(slideInterval);
//   }, function() {
//     slideInterval = setInterval(nextSlide, 5000);
//   });

//   showSlide(currentIndex);
// });



// $(document).ready(function () {

//   function handleScroll() {
//       $('.box').each(function () {
//           var $this = $(this);
//           var sectionTop = $this.offset().top;
//           var sectionBottom = sectionTop + $this.outerHeight();
//           var windowTop = $(window).scrollTop();
//           var windowBottom = windowTop + $(window).height();

         
//           if (sectionBottom > windowTop && sectionTop < windowBottom) {
              
//               $this.addClass('fade-in'); 
//               $this.find('.box1').addClass('fade-in'); 
//           } else {
              
//               $this.removeClass('fade-in');
//               $this.find('.box1').removeClass('fade-in');
//           }

//           if (sectionBottom > windowTop && sectionTop < windowBottom) {
          
//             $this.addClass('fade-in1');
//             $this.find('img').addClass('fade-in'); 
//             $this.find('p').addClass('fade-in'); 
//         } else {
//             $this.removeClass('fade-in1');
//             $this.find('img').removeClass('fade-in');
//             $this.find('p').removeClass('fade-in');
//         }
          
//       });
//   }
//   $(window).on('scroll', handleScroll);
//   handleScroll();
// });




$(document).ready(function(){
    $(".video").hover(function(){
        $(this).css("background-color", "#4399fa");
        $(this).css("color","white");
        $(this).css("border-color","#4399fa");
    }, function(){
        $(this).css("background-color", "darkblue");
        $(this).css("border-color","darkblue");
    })

    $(".know").hover(function(){
        $(this).css("background-color", "darkblue");
        $(this).css("color","white");
        $(this).css("border-color","darkblue");
    }, function(){
        $(this).css("background-color", "#4399fa");
        $(this).css("border-color","#4399fa");
    })
    $(".dropdown-item").hover(function(){
        $(this).css("background-color", "#002c73");
    }, function(){
        $(this).css("background-color", "#002c73");
    })
    $(".cnt").hover(function(){
        $(this).css("background-color", "#4399fa");
        $(this).css("color","white");
        $(this).css("border-color","#4399fa");
    }, function(){
        $(this).css("background-color", "darkblue");
        $(this).css("border-color","darkblue");
    }, function(){
      $(this).css("background-color", "white");
      $(this).css("border-color","black");
    })
    $(".footer-links a").hover(function(){
      $(this).css("text-decoration","underline");
      $(this).css("text-decoration-thickness","3px");
      $(this).css("text-underline-offset", "5px");
    },function(){
      $(this).css("text-decoration","none");
    })
    $(".foo").hover(function(){
      $(this).css("border","solid 1px #002d75");
      $(this).css("background-color","#002d75");
    },function(){
      $(this).css("border","solid 1px black");
      $(this).css("background-color","black");
    })
});


$(document).ready(function() {
  let $carouselItems = $('.text-wrapper'); 
  let $indicators = $('.indicators button');
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    $carouselItems.removeClass('active');
    $indicators.removeClass('active');

    $carouselItems.eq(index).addClass('active');
    $indicators.eq(index).addClass('active');    
    $('.inner').css('transform', 'translateX(' + (-index * 100) + '%)');
  }
  $indicators.on('click', function() {
    currentIndex = $(this).data('slide-to');
    showSlide(currentIndex);
  });
  function nextSlide() {
    currentIndex = (currentIndex + 1) % $carouselItems.length;
    showSlide(currentIndex);
  }
  slideInterval = setInterval(nextSlide, 5000);

  $('.carousel').hover(function() {
    clearInterval(slideInterval);
  }, function() {
    slideInterval = setInterval(nextSlide, 5000);
  });

  showSlide(currentIndex);
});


$(document).ready(function() {
  let $carouselItems = $('.team-wrapper'); 
  let $indicators = $('.indicators1 button');
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    $carouselItems.removeClass('active');
    $indicators.removeClass('active');
    $carouselItems.eq(index).addClass('active');
    $indicators.eq(index).addClass('active');    
    $('.inner').css('transform', 'translateX(' + (-index * 100) + '%)');
  }
  $indicators.on('click', function() {
    currentIndex = $(this).data('slide-to');
    showSlide(currentIndex);
  });
  function nextSlide() {
    currentIndex = (currentIndex + 1) % $carouselItems.length;
    showSlide(currentIndex);
  }
  slideInterval = setInterval(nextSlide, 5000);
  $('.carousel1').hover(function() {
    clearInterval(slideInterval);
  }, function() {
    slideInterval = setInterval(nextSlide, 5000);
  });
  showSlide(currentIndex);
});

$(document).ready(function(){
  $('.video').click(function(){
    var watch="https://www.youtube.com/live/q_JsgpiuY98?si=SewhFGnCsLepO7F4";
    window.open(watch,'_parent');
  })
})

$(document).ready(function(){
  $('.fa-facebook-f').click(function(){
    window.location.href='https://www.facebook.com';
  })
  $('.fa-linkedin').click(function(){
    window.location.href='https://www.linkedin.com';
  })
  $('.fa-google-plus-g').click(function(){
    window.location.href='https://www.google.com';
  });
  $('.fa-twitter').click(function(){
    window.location.href='https://www.twitter.com';
  });
});

$(document).ready(function(){
  $('.nav-link').on('click',function(){
    $('.nav-link').removeClass("active");
    $(this).addClass("active");
  });
});

  
$(document).ready(function () {
  var $navLinks = $('nav a');
  var $sections = $('section');

  $(window).on('scroll', function () {
    var scrollPos = $(document).scrollTop(); 
    var windowHeight = $(window).height(); 

    $sections.each(function () {
        var $currentSection = $(this);
        var sectionTop = $currentSection.offset().top; 
        var sectionBottom = sectionTop + $currentSection.outerHeight(); 
        var sectionMiddle = sectionTop + ($currentSection.outerHeight() / 2); 
          if (scrollPos + windowHeight / 2 >= sectionMiddle && scrollPos + windowHeight / 2 < sectionBottom) {
            var id = $currentSection.attr('id'); 
            $navLinks.removeClass('active'); 
            $('a[href="#' + id + '"]').addClass('active'); 
        }
    });
  });
  $navLinks.on('click', function (e) {
    e.preventDefault(); 
    $navLinks.removeClass('active'); 
    var targetId = $(this).attr('href');
    var $targetSection = $(targetId); 
    $('html, body').animate({
        scrollTop: $targetSection.offset().top
    });
    $navLinks.removeClass('active');
    $(this).addClass('active');
  });
});



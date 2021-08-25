var yourNavigation = $(".navigation-bar");

$(window).scroll(function() {
  if( $(this).scrollTop() > 100 ) {
    yourNavigation.addClass("bg-dark");
  } else {
    yourNavigation.removeClass("bg-dark");
  }
});

$(document).ready(function(){
  

    $("#canClick").click(function(){
        $(".content").toggleClass("vis-active");

        $("#content")[0].scrollIntoView({behavior: 'smooth'});
        $("#canClick").removeClass("fa-chevron-down");
        $("#canClick").addClass("fa-chevron-up open");
        if (!$(".content").hasClass("vis-active")) {
            $("#canClick").removeClass("fa-chevron-up");
            $("#canClick").addClass("fa-chevron-down");
        }
    })

    // $('#register').click(function() {
    //   $('.register-form').toggleClass("d-none");
    //   $('.login-form').toggleClass("d-none");
    // });
    
    // $('#login').click(function() {
    //   $('.register-form').toggleClass("d-none");
    //   $('.login-form').toggleClass("d-none");
    // });

    $('.to-SignUp').click(function() {
        $('.Register').removeClass("vis-none");
        $('.LogIn').addClass("vis-none");
        
    })
    $('.to-SignIn').click(function() {
      $('.Register').addClass("vis-none");
      $('.LogIn').removeClass("vis-none");
      
  })
    
})


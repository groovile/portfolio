// $("#preload").load(function(evt){
//     $(this).fadeIn(1000);
// });
var v3d = $('.f3dart').html()
var vMusic = $('.fmusic').html()
var v2d = $('.f2dart').html()
var vSound = $('.fsound').html()
var vCode = $('.fcode').html()
var vAnimation = $('.fanimation').html()
$(document).ready(function () {
    // $('.home').addClass('tcboo');
    $('.xtraBody').css('opacity', '1');
    $('body').css('display', 'none');
    $('body').fadeIn(1000);
    if (window.location.hash.substr(1) == "3d") {
        $('.f3dart').addClass('tagYoureIt');
        $('.n3D').addClass("active");
    }
    else if (window.location.hash.substr(1) == "music") {
        $('.fmusic').addClass('tagYoureIt');
        $('.nMusic').addClass("active");
    }
    else if (window.location.hash.substr(1) == "2d") {
        $('.f2dart').addClass('tagYoureIt');
        $('.n2D').addClass("active");
    }
    else if (window.location.hash.substr(1) == "sound") {
        $('.fsound').addClass('tagYoureIt');
        $('.nSound').addClass("active");
    }
    else if (window.location.hash.substr(1) == "code") {
        $('.fcode').addClass('tagYoureIt');
        $('.nCode').addClass("active");
    }
    else if (window.location.hash.substr(1) == "animation") {
        $('.fanimation').addClass('tagYoureIt');
        $('.nAnimation').addClass("active");
    }
    else if (window.location.hash.substr(1) == "") {
        $('.home').addClass('tagYoureIt');
        console.log("5")
    }
    // else if(window.location.hash) {
    //     $('.home').addClass('tagYoureIt');
    //     console.log("4")
    //   }
    else{
        $('.home').addClass('tagYoureIt');
        history.replaceState(null, null, ' ');
        console.log("6")
    }
    $('.tagYoureIt').fadeIn(1000);
    // $('.nlink').click(function (event) {
    //     event.preventDefault();
    //     newLocation = $(this).attr("href");
    //     $('.home').fadeOut(300, newpage);
    //     function newpage() {
    //         //window.location = newLocation;
    //         window.location.href.split('#')[0]
    //         $('.f3dart').fadeIn(300);
    //     }
    // });
    $('.ahome').click(function (event) {
        $('.tagYoureIt').removeClass('tagYoureIt').fadeOut(300, newpage);
        function newpage() {
            $('.home').addClass('tagYoureIt').fadeIn(300);
            history.replaceState(null, null, ' ');
        }
        $(".sl").removeClass("active");
    });
    $('.a3dart').click(function (event) {

        $('.tagYoureIt').removeClass('tagYoureIt').fadeOut(300, newpage);
        console.log("two");
        function newpage() {
            $('.f3dart').addClass('tagYoureIt').fadeIn(300);
            console.log("2")
        }
    });
    $('.amusic').click(function (event) {
        $('.tagYoureIt').removeClass('tagYoureIt').fadeOut(300, newpage);
        console.log("three");
        function newpage() {
            $('.fmusic').addClass('tagYoureIt').fadeIn(300);
            console.log("3")
        }
    });
    $('.a2dart').click(function (event) {

        $('.tagYoureIt').removeClass('tagYoureIt').fadeOut(300, newpage);
        function newpage() {
            $('.f2dart').addClass('tagYoureIt').fadeIn(300);
        }
    });
    $('.asound').click(function (event) {

        $('.tagYoureIt').removeClass('tagYoureIt').fadeOut(300, newpage);
        function newpage() {
            $('.fsound').addClass('tagYoureIt').fadeIn(300);
        }
    });
    $('.acode').click(function (event) {

        $('.tagYoureIt').removeClass('tagYoureIt').fadeOut(300, newpage);
        function newpage() {
            $('.fcode').addClass('tagYoureIt').fadeIn(300);
        }
    });
    $('.aanimation').click(function (event) {

        $('.tagYoureIt').removeClass('tagYoureIt').fadeOut(300, newpage);
        function newpage() {
            $('.fanimation').addClass('tagYoureIt').fadeIn(300);
        }
    });
    
});



$(document).ready(function() {
    $(".sl").click(function() {
      $(".sl").removeClass("active");
      $(this).addClass("active");
    });
});



$("a:contains(RSS Dog)").filter(function () {
    return $(this).remove();
}).remove();

$('.rssdog tr th a').text('BLOG POSTS');

$(function () {
    $('#a').hover(function () {
        $('#b').css('background-color', 'yellow');
    }, function () {
        // on mouseout, reset the background colour
        $('#b').css('background-color', '');
    });
});

setTimeout(function() {
    !(function ($doc, $win) {
        var /*screenWidth = $win.screen.width / 2,
            screenHeight = $win.screen.height / 2,*/
            screenWidth = document.getElementById("FreeDee").clientWidth / 2,
            screenHeight = document.getElementById("FreeDee").clientHeight / 2,
            $elems = $doc.getElementsByClassName("FreeDee"),
            validPropertyPrefix = '',
            otherProperty = 'perspective(1000px)',
            elemStyle = $elems[0].style;
        if (typeof elemStyle.webkitTransform == 'string') {
            validPropertyPrefix = 'webkitTransform';
        } else if (typeof elemStyle.MozTransform == 'string') {
            validPropertyPrefix = 'MozTransform';
        }
        $doc.addEventListener('mousemove', function (e) {
            var centroX = e.clientX - screenWidth,
                centroY = screenHeight - (e.clientY - 500),
                degX = centroX * 0.025,
                degY = centroY * 0.010,
                $elem
            for (var i = 0; i < $elems.length; i++) {
                $elem = $elems[i];

                if ($(window).width() < 639) {
                    $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + (degX -6) + 'deg)  rotateX(' + degY + 'deg)';
                    // $('body').css('background-color', 'green');
                }
                else if ($(window).width() < 1000) {
                    $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + (degX -12) + 'deg)  rotateX(' + degY + 'deg)';
                    // $('body').css('background-color', 'blue');
                }
                else if ($(window).width() < 1199) {
                    $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + (degX - 14.5) + 'deg)  rotateX(' + degY + 'deg)';
                    // $('body').css('background-color', 'pink');
                }
                else if ($(window).width() < 1479) {
                    $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + (degX - 18) + 'deg)  rotateX(' + degY + 'deg)';
                    // $('body').css('background-color', 'orange');
                }
                else if ($(window).width() < 1599) {
                    $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + (degX - 20) + 'deg)  rotateX(' + degY + 'deg)';
                    // $('body').css('background-color', 'purple');
                }
                else {
                    $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + (degX - 23) + 'deg)  rotateX(' + degY + 'deg)';
                    // $('body').css('background-color', 'white');
                }
                    // $('body').css('background-color', 'white');
            };
        });
    })(document, window);
}, 0);
// var countDownDate = new Date("Mar 25, 2020 00:00:00").getTime();
// var x = setInterval(function() {
//   var now = new Date().getTime();
//   var distance = countDownDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24);
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Output the result in an element with id="demo"
//   document.getElementById("county1").innerHTML = hours + "h "
//   + minutes + "m " + seconds + "s ";  // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("county1").innerHTML = "";
//   }
// }, 1000);

// var countDownDate = new Date("Mar 27, 2020 00:00:00").getTime();
// var x = setInterval(function() {
//   var now = new Date().getTime();
//   var distance = countDownDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24);
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Output the result in an element with id="demo"
//   document.getElementById("county01").innerHTML = hours + "h "
//   + minutes + "m " + seconds + "s ";  // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("county01").innerHTML = "";
//   }
// }, 1000);

// var countDownDate = new Date("Mar 27, 2020 00:00:00").getTime();
// var x = setInterval(function() {
//   var now = new Date().getTime();
//   var distance = countDownDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24);
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Output the result in an element with id="demo"
//   document.getElementById("county001").innerHTML = hours + "h "
//   + minutes + "m " + seconds + "s ";  // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("county001").innerHTML = "";
//   }
// }, 1000);

// var x2 = setInterval(function () {
//     var countDownDate = new Date("Mar 28, 2020 00:00:00").getTime();
//     var now = new Date().getTime();
//   var distance = countDownDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24);
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Output the result in an element with id="demo"
//     document.getElementById("county2").innerHTML = hours + "h ";
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("county2").innerHTML = "";
//     }
// }, 1000);

// var x3 = setInterval(function () {
//     var countDownDate = new Date("Mar 29, 2020 00:00:00").getTime();
//     var now = new Date().getTime();
//   var distance = countDownDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24);
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Output the result in an element with id="demo"
//     document.getElementById("county3").innerHTML = hours + "h " ;
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("county3").innerHTML = "";
//     }
// }, 1000);

// var x4 = setInterval(function () {
//     var countDownDate = new Date("Mar 30, 2020 00:00:00").getTime();
//     var now = new Date().getTime();
//   var distance = countDownDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24);
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Output the result in an element with id="demo"
//     document.getElementById("county4").innerHTML = hours + "h " ;
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("county4").innerHTML = "";
//     }
// }, 1000);

// var x5 = setInterval(function () {
//     var countDownDate = new Date("Mar 30, 2020 00:00:00").getTime();
//     var now = new Date().getTime();
//   var distance = countDownDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24);
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Output the result in an element with id="demo"
//     document.getElementById("county5").innerHTML = hours + "h " ;
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("county5").innerHTML = "";
//     }
// }, 1000);

// var x5 = setInterval(function () {
//     var countDownDate = new Date("Mar 31, 2020 00:00:00").getTime();
//     var now = new Date().getTime();
//   var distance = countDownDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24);
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Output the result in an element with id="demo"
//     document.getElementById("county6").innerHTML = hours + "h " ;
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("county6").innerHTML = "";
//     }
// }, 1000);
$('#divRss').FeedEk({
    FeedUrl : 'https://github.com/groovile/portfolio/commits.atom',
    MaxCount : 5,
    ShowDesc : false,
    ShowPubDate:false,
    TitleLinkTarget:'_blank',
    DateFormat : 'MM/dd/yyyy',
    DateFormatLang : 'en'
  });

  new jBox('Modal', {
    theme: "TooltipDark",
    width: 300,
    height: 100,
    attach: '#emailModal',
    title: 'My E-mail address:',
    content: '<i>lumitrap@gmail.com</i>'
  });
  new jBox('Modal', {
    theme: "TooltipDark",
    width: 160,
    height: 80,
    attach: '#discordModal',
    title: 'My Discord Tag:',
    content: '<i>Bacontrap#7631</i>'
  });
  new jBox('Modal', {
    theme: "TooltipDark",
    width: 325,
    height: 100,
    attach: '#skypeModal',
    title: 'Skype name:',
    content: '<i>To add me on skype,<br/>please contact me through other methods. Thanks!</i>'
  });
  new jBox('Modal', {
    theme: "TooltipDark",
    width: 325,
    height: 100,
    attach: '#brokenlinkModal',
    title: 'Under construction',
    content: '<i>Unlike my other sites, this one\'s a wee bit trickier to setup. I hope you\'ll return and check it out some other time...!</i>'
  });

  new jBox('Tooltip', {
    attach: '.tooltip1',
    theme: "TooltipDark",
    delayOpen:0,
  });
  new jBox('Tooltip', {
    attach: '.tooltip2',
    theme: "TooltipDark",
    delayOpen:0,
  });
  new jBox('Tooltip', {
    attach: '.tooltip3',
    theme: "TooltipDark",
    delayOpen:0,
  });
  new jBox('Tooltip', {
    attach: '.tooltip4',
    theme: "TooltipDark",
    delayOpen:0,
  });
  new jBox('Tooltip', {
    attach: '.tooltip5',
    theme: "TooltipDark",
    delayOpen:0,
  });

  $('#nContact').hover(
    function(){ $(".icon").addClass('playa') },
    function(){ $(".icon").removeClass('playa') }
)
$( window ).on( 'hashchange', function( e ) {
    if(window.location.hash.substr(1) == ""){
        // location.hash = 'music';
        $('.tagYoureIt').removeClass('tagYoureIt').fadeOut(300, newpage);
        function newpage() {
            $('.home').addClass('tagYoureIt').fadeIn(300);
            history.replaceState(null, null, ' ');
        }
        $(".sl").removeClass("active");
        $( ".fmusic" ).empty().html(vMusic);
    }
    else if(window.location.hash.substr(1) == "3d"){

        $('.tagYoureIt').removeClass('tagYoureIt').fadeOut(300, newpage);
        function newpage() {
            $('.f3dart').addClass('tagYoureIt').fadeIn(300);
            $( ".fmusic" ).empty().html(vMusic);
        }
        $(".sl").removeClass("active");
        $('.n3D').addClass("active");
    }
    else if(window.location.hash.substr(1) == "music"){
        // location.hash = 'music';
        $('.tagYoureIt').removeClass('tagYoureIt').fadeOut(300, newpage);
        console.log("three");
        function newpage() {
            $('.fmusic').addClass('tagYoureIt').fadeIn(300);
            console.log("3")
        }
        $(".sl").removeClass("active");
        $('.nMusic').addClass("active");
    }
    else if(window.location.hash.substr(1) == "2d"){
        $('.tagYoureIt').removeClass('tagYoureIt').fadeOut(300, newpage);
        function newpage() {
            $('.f2dart').addClass('tagYoureIt').fadeIn(300);
        }
        $(".sl").removeClass("active");
        $('.n2D').addClass("active");
    }
    else if(window.location.hash.substr(1) == "sound"){
        $('.tagYoureIt').removeClass('tagYoureIt').fadeOut(300, newpage);
        function newpage() {
            $('.fsound').addClass('tagYoureIt').fadeIn(300);
        }
        $(".sl").removeClass("active");
        $('.nSound').addClass("active");
    }
    else if(window.location.hash.substr(1) == "code"){
        $('.tagYoureIt').removeClass('tagYoureIt').fadeOut(300, newpage);
        function newpage() {
            $('.fcode').addClass('tagYoureIt').fadeIn(300);
        }
        $(".sl").removeClass("active");
        $('.nCode').addClass("active");
    }
    else if(window.location.hash.substr(1) == "animation"){
        $('.tagYoureIt').removeClass('tagYoureIt').fadeOut(300, newpage);
        function newpage() {
            $('.fanimation').addClass('tagYoureIt').fadeIn(300);
        }
        $(".sl").removeClass("active");
        $('.nAnimation').addClass("active");
    }
} );

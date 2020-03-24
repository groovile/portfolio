// $("#preload").load(function(evt){
//     $(this).fadeIn(1000);
// });

$(document).ready(function () {
    $('.home').addClass('tcboo');
    $('.xtraBody').css('opacity', '1');
    $('body').css('display', 'none');
    $('body').fadeIn(1000);
    $('.nlink').click(function (event) {
        event.preventDefault();
        newLocation = $(this).attr("href");
        $('.menu2').fadeOut(300, newpage);
        function newpage() {
            window.location = newLocation;
        }
    });

    
});



$(document).ready(function() {
    $("a").click(function() {
      $(".mainLinks a.active, .subLinks a.active").removeClass("active");
      $(".mainLinks a b, .subLinks a.active").removeClass("active");
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

setInterval(function() {
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
                centroY = screenHeight - (e.clientY + 13),
                degX = centroX * 0.025,
                degY = centroY * 0.010,
                $elem
            for (var i = 0; i < $elems.length; i++) {
                $elem = $elems[i];
                
                if ($(window).width() < 639) {
                    $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + (degX -2.5) + 'deg)  rotateX(' + degY + 'deg)';
                    // $('body').css('background-color', 'green');
                }
                else if ($(window).width() < 1000) {
                    $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + (degX -2.5) + 'deg)  rotateX(' + degY + 'deg)';
                    // $('body').css('background-color', 'blue');
                }
                else if ($(window).width() < 1199) {
                    $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + (degX - 7) + 'deg)  rotateX(' + degY + 'deg)';
                    // $('body').css('background-color', 'pink');
                }
                else if ($(window).width() < 1479) {
                    $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + (degX - 9.5) + 'deg)  rotateX(' + degY + 'deg)';
                    // $('body').css('background-color', 'orange');
                }
                else if ($(window).width() < 1599) {
                    $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + (degX - 8.25) + 'deg)  rotateX(' + degY + 'deg)';
                    // $('body').css('background-color', 'purple');
                }
                else {
                    $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + (degX - 11.5) + 'deg)  rotateX(' + degY + 'deg)';
                    // $('body').css('background-color', 'white');
                }
            };
        });
    })(document, window);
}, 1000);
var countDownDate = new Date("Mar 25, 2020 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24);
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Output the result in an element with id="demo"
  document.getElementById("county1").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("county1").innerHTML = "";
  }
}, 1000);

var countDownDate = new Date("Mar 25, 2020 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24);
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Output the result in an element with id="demo"
  document.getElementById("county01").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("county01").innerHTML = "";
  }
}, 1000);

var countDownDate = new Date("Mar 25, 2020 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24);
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Output the result in an element with id="demo"
  document.getElementById("county001").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("county001").innerHTML = "";
  }
}, 1000);

var x2 = setInterval(function () {
    var countDownDate = new Date("Mar 27, 2020 12:00:00").getTime();
    var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24);
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Output the result in an element with id="demo"
    document.getElementById("county2").innerHTML = hours + "h ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("county2").innerHTML = "";
    }
}, 1000);

var x3 = setInterval(function () {
    var countDownDate = new Date("Mar 28, 2020 12:00:00").getTime();
    var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24);
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Output the result in an element with id="demo"
    document.getElementById("county3").innerHTML = hours + "h " ;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("county3").innerHTML = "";
    }
}, 1000);

var x4 = setInterval(function () {
    var countDownDate = new Date("Mar 29, 2020 12:00:00").getTime();
    var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24);
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Output the result in an element with id="demo"
    document.getElementById("county4").innerHTML = hours + "h " ;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("county4").innerHTML = "";
    }
}, 1000);

var x5 = setInterval(function () {
    var countDownDate = new Date("Mar 30, 2020 12:00:00").getTime();
    var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24);
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Output the result in an element with id="demo"
    document.getElementById("county5").innerHTML = hours + "h " ;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("county5").innerHTML = "";
    }
}, 1000);

var x5 = setInterval(function () {
    var countDownDate = new Date("Mar 31, 2020 12:00:00").getTime();
    var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24);
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);  // Output the result in an element with id="demo"
    document.getElementById("county6").innerHTML = hours + "h " ;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("county6").innerHTML = "";
    }
}, 1000);

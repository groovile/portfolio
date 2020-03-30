// $("#preload").load(function(evt){
//     $(this).fadeIn(1000);
// });
$(document).on('ready', function() {
    $('.t-block').on('DOMSubtreeModified propertychange',"#twitter-widget-0", function() {
      var cssLink = document.createElement("link") 
      cssLink.href = "/css/iframe.css"; 
      cssLink.rel = "stylesheet"; 
      cssLink.type = "text/css";

      $(this.contentDocument.documentElement).find("body").append(cssLink);
    });
  })
$(function() {
    $('a.link').click(function() {
        $('a.link').removeClass('active');
        $(this).addClass('active');
    });
 });

setInterval(function(){

if ($('#.bc1:hover').length != 0) {
    $('.bc1').css('background-image','url("../content/img/day.png")');
}

}, 200);

$("a:contains(RSS Dog)").filter(function () {
    return $(this).remove();
}).remove();

$('.rssdog tr th a').text('BLOG POSTS');

$(function() {
  $('#a').hover(function() {
    $('#b').css('background-color', 'yellow');
  }, function() {
    // on mouseout, reset the background colour
    $('#b').css('background-color', '');
  });
});


!(function ($doc, $win) {
    var screenWidth = $win.screen.width / 2,
        screenHeight = $win.screen.height / 2,
        $elems = $doc.getElementsByClassName("wrapper"),
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
            degX = centroX * 0.005,
            degY = centroY * 0.005,
            $elem

        for (var i = 0; i < $elems.length; i++) {
            $elem = $elems[i];
            $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + degX + 'deg)  rotateX(' + degY + 'deg)';
        };
    });
})(document, window);


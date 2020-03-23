var btn = document.createElement('button');
var input = util.q('#masthead-search-term');


btn.onclick = function (e) {
    e.preventDefault();
    var inputValue = input.value.trim();

    util.xmlReq('https://www.youtube.com/results?search_query=' + encodeURIComponent(inputValue), function (xhe) {
        var link = util.q('.yt-lockup-video .yt-uix-tile .yt-lockup-thumbnail a', xhe.target.response.body).href;
        //GM_openInTab(link, false);
        window.location.href = link;
    });
};
var ListenWithMe = (function() {
  // Add your own config here
  var LASTFM_API_KEY = "70069ca308ae5e5d116ca0d4a0ce4108";
  var LASTFM_USERNAME = "Shadetrap";
  var USER_NAME = "Shade";
  // Elements
  var $playerWrapper = document.getElementById('spotify-player-wrapper');
  var $trackIntro = document.getElementsByClassName('track-info--intro')[0]
  var $trackTitle = document.getElementsByClassName('track-info--title')[0]
  var $trackArtist = document.getElementsByClassName('track-info--artist')[0]
  var $trackCover = document.getElementsByClassName('track-info--cover')[0]
  var $trackAlbum = document.getElementsByClassName('track-info--album')[0]
  var $trackDate = document.getElementsByClassName('track-info--date')[0]
  var currentSong = {};
  var REFRESH_INTERVAL = 1000;
  var refreshTimer = null;
  return {
    init: init
  }
  
  function init() {
    var noArtwork = "https://orig00.deviantart.net/5162/f/2014/153/9/e/no_album_art__no_cover___placeholder_picture_by_cmdrobot-d7kpm65.jpg"
    var noDate = ""
    
    getCurrentTrack().then(function(data) {
      try {
              currentSong.nowPlaying = data['@attr'].nowplaying;        
      } catch(err) {
      }
      
      var brainzUrl = "https://ia601500.us.archive.org/23/items/mbid-"+ data.album['mbid'] + "/index.json";
      //var brainzUrl = "hi";
      console.log("brainzUrl before: " + brainzUrl)
      currentSong.artist = data.artist['#text'];
      currentSong.album = data.album['#text'];
      currentSong.track = data.name;
      //currentSong.image = data.image[1]['#text'] || brainzUrl;
      currentSong.image = data.image[1]['#text'] || noArtwork;
      currentSong.mbid = data.album['mbid']
      console.log("THIS IS THE MBID: " + currentSong.mbid)
      console.log("brainzUrl after: " + brainzUrl)
      console.log("ok wth: " + data.image[1]['#text'])
      currentSong.date = "";
      //if (!!currentSong.image){currentSong.album = noArtwork;}
      updateTitle();
      updateInfo();
      //$(".youtubeSearch").attr("href", 'https://www.youtube.com/results?search_query=' + encodeURIComponent(currentSong.track + " " + currentSong.album + " " + currentSong.artist))
      //$(".youtubeSearch").attr("href", 'https://www.youtube.com/embed?version=3&autoplay=1&controls=1&loop=1&rel=0&showinfo=0&listType=search&list=' + encodeURIComponent(currentSong.track + " " + currentSong.album + " " + currentSong.artist))
      
      $(".ifraudio").attr("src", 'https://www.youtube.com/embed?version=3&autoplay=1&controls=1&loop=1&rel=0&showinfo=0&listType=search&list=' + encodeURIComponent(currentSong.track + " " + currentSong.album + " " + currentSong.artist))

      if (currentSong.date != null){
        currentSong.album = data.album['#text'];
      }
      else if ( $('youtubeSearch.img').attr('src') == 'https://orig00.deviantart.net/5162/f/2014/153/9/e/no_album_art__no_cover___placeholder_picture_by_cmdrobot-d7kpm65.jpg' ) {
        $(".ifraudio").css("opacity","1");alert("I am an alert box!");
    }
      else if(currentSong.image == "https://orig00.deviantart.net/5162/f/2014/153/9/e/no_album_art__no_cover___placeholder_picture_by_cmdrobot-d7kpm65.jpg"){$(".ifraudio").css("opacity","1");alert("I am an alert box!");}

      return getTrackURI();
    }).then(function(data) {
      //console.log(data) NO NOT NOAW
      $playerWrapper.innerHTML = buildSpotifyPlayer(data.uri);
    })

    if(!refreshTimer) {
      refreshTimer = setInterval(refresh, REFRESH_INTERVAL)
    }
  }

  function refresh() {
    //console.log("ping"); NO NOT NOAW
    getCurrentTrack().then(function(data) {
      if(currentSong.track !== data.name && currentSong.track !== data.artist['#text']) {
        // kinda lazy
        init();
      }
    })
  }

  // Make a call to Last FM to get your latest played tracks;
  function getCurrentTrack() { 
    var url = "//ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + LASTFM_USERNAME + "&api_key=" + LASTFM_API_KEY + "&format=json";
    return new Promise(function(resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('GET', url);
      req.onload = function() {
        if (req.status == 200) {
          var data = JSON.parse(req.response);
          try {
            resolve(data.recenttracks.track[0]);
          } catch(err) {
            reject(err);
          }
        }
        else {
          reject(Error(req.statusText));
        }
      };
      req.onerror = function() {
        reject(Error("Network Error"));
      };
      req.send();
    });
  }
  


  // Make a call to Spotify to search for the track and return the info
  function getTrackURI() {
    var url = "//api.spotify.com/v1/search?q=track:" + encodeURIComponent(currentSong.track) + "%20artist:" + encodeURIComponent(currentSong.artist) + "&type=track" +
        encodeURIComponent(currentSong.image) + "&type=image"

    return new Promise(function(resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('GET', url);
      req.onload = function() {
        if (req.status == 200) {
          var data = JSON.parse(req.responseText);
          try {
            resolve(data.tracks.items[0]);
          } catch(err) {
            reject(err);
          }
        }
        else {
          //reject(Error(req.statusText));
        }
      };
      req.onerror = function() {
        reject(Error("Network Error"));
      };
      //req.send();
    })
  }

  // Returns an iframe with the track's URI
  function buildSpotifyPlayer(trackUri) {
    if(!trackUri) return;
    return '<iframe src="https://embed.spotify.com/?uri=' + trackUri + '" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
  }

  function updateTitle() {
    document.title = currentSong.track + " -- " + currentSong.artist + "--" + currentSong.image;
  }

  function updateInfo() {
    //var introMsg = USER_NAME + " last listened to...";
    var introMsg =" I recently listened to...";
    if(currentSong.nowPlaying) {
      //introMsg = USER_NAME + " is currently listening to:";
      introMsg = "Currently listening to:";
      
      $trackIntro.innerHTML = introMsg;
    $trackTitle.innerHTML = currentSong.track;
    $trackArtist.innerHTML = "" + currentSong.artist;
    $trackCover.src = currentSong.image.replace("64s/", "");
    $trackAlbum.innerHTML= "" + currentSong.album;
    $trackDate.innerHTML= currentSong.date;
    }
    
    // $(".youtubeSearch").attr("href", 'https://www.youtube.com/embed?version=3&autoplay=1&controls=1&loop=1&rel=0&showinfo=0&listType=search&list=' + encodeURIComponent(currentSong.track + " " + currentSong.album + " " + currentSong.artist))
    $(".ifraudio").attr("src", 'https://www.youtube.com/embed?version=3&autoplay=1&controls=1&loop=1&rel=0&showinfo=0&listType=search&list=' + encodeURIComponent(currentSong.track + " " + currentSong.album + " " + currentSong.artist))
    if ( $('.track-info--cover').attr('src') == 'https://orig00.deviantart.net/5162/f/2014/153/9/e/no_album_art__no_cover___placeholder_picture_by_cmdrobot-d7kpm65.jpg') {
        $(".ifraudio").css("opacity","1");
    }
    else if ( $('.track-info--cover').attr('src') == "https://lastfm.freetls.fastly.net/i/u/2a96cbd8b46e442fc41c2b86b821562f.png" ) {
        $(".ifraudio").css("opacity","1");
    } else{$(".ifraudio").css("opacity","0");}
  }
})();

ListenWithMe.init();

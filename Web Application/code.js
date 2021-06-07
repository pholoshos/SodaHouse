var video = document.getElementById('video');
var txt = document.getElementById('t');
var st = document.getElementById('status');

var c = 9;

var shows  = null;
st.innerHTML = "hello";
function load(link){
  st.innerHTML = "";
  console.log("loadin")
  var videoSrc = link;
  
  //var videoSrc = 'h/abc.m3u8';
  //
  // First check for native browser HLS support
  //
  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = videoSrc;
    //
    // If no native HLS support, check if HLS.js is supported
    //
  } else if (Hls.isSupported()) {

    
        var hls = new Hls();
        hls.loadSource(videoSrc);
        
        hls.attachMedia(video);

    

  }
}


function play(station){ 
  load(shows[station].link)   
  console.log("play")
  if(c >= 0){
      video.play();
      document.getElementById('play').innerHTML = "Now playing";
          if(1 == 2){
              st.innerHTML = "playing live stream.. ."
          }else{
            time = new Date();
            var startHour = shows[station].hour;
            var startMinutes =  shows[station].minutes;
            var startSeconds = startMinutes*60+startHour*60*60; 
            var hours =  time.getHours();
            var minutes =  time.getMinutes();
      
            var currrSecond = minutes*60+hours*60*60+time.getSeconds();
            var playTime = shows[station].duration;
            
            var difference = (currrSecond - startSeconds);
            txt.innerHTML = difference;
            if(difference >= 0 && difference <  playTime){
                video.currentTime  = difference;
                st.innerHTML = "now listening.. .";
            }if(difference > playTime){
                video.pause();
                st.innerHTML = "Ops! Stream has ended."
                
            }
            if(difference < 0){
                video.pause();
                var timeInMinutes = (difference/60)*-1;
                st.innerHTML = "not streaming, try again in "+parseInt(timeInMinutes)+" minutes "+"( "+startHour+"H"+startMinutes+" )";
            }
          }

      
      
  }
  
}



var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    show : 'SodaHouse',
    shows : null,
    description : 'more tunes'

  },
  mounted(){
    
    this.getShows()
    

  },

  methods: {
    play : function(){
      
    },
     getShows: function(){
        var showUrl = "shows.json";
        axios.get(showUrl)
        .then(function(response){
          shows = response.data.shows;
          this.shows = shows;

          
          
          
          
        })
     }
  },
})
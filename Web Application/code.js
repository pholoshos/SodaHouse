var video = document.getElementById('video');
var txt = document.getElementById('t');
var st = document.getElementById('status');
var c = 0;
st.innerHTML = "getting ready.. .";
function load(){

var videoSrc = 'h/abc.m3u8';
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
      video.currentTime = difference;


 

  

  console.log(difference);
  st.innerHTML = "ready to play.. .";
  

}
}
load();
function play(){
    
    
    if(c >= 0){
        video.play();
        
          time = new Date();
          var startHour = 00;
          var startMinutes = 4 ;
          var startSeconds = startMinutes*60+startHour*60*60; 
          var hours =  time.getHours();
          var minutes =  time.getMinutes();
    
          var currrSecond = minutes*60+hours*60*60+time.getSeconds();
          var difference = (currrSecond - startSeconds);
          txt.innerHTML = difference;
          if(difference >= 0){
              video.currentTime  = difference;
              st.innerHTML = "now listening.. .";
          }if(difference < 0){
              video.pause();
              st.innerHTML = "nothing is available";
          }
        
        
    }
    
}
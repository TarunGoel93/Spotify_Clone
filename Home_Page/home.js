//Set time out function
document.addEventListener('DOMContentLoaded', function() {
    const greeting = document.getElementById('greeting');
    const currentTime = new Date().getHours();
  
    if (currentTime >= 5 && currentTime < 12) {
      greeting.textContent = 'Good morning';
    } else if (currentTime >= 12 && currentTime < 18) {
      greeting.textContent = 'Good afternoon';
    } else {
      greeting.textContent = 'Good evening';
    }
  });


//change color on onmouseover
let sbox1 = document.querySelector("#sbox1");
let d2 = document.querySelector("#d2");
let p1=document.querySelector("#p1");
let originalColor = window.getComputedStyle(d2).backgroundColor;
sbox1.addEventListener("mouseenter", () => {
  d2.style.background = "linear-gradient(to bottom, rgb(102, 51, 0) ,rgb(31, 30, 30)) "
  p1.style.display="block";

});
sbox1.addEventListener("mouseleave", () => {
  d2.style.background = originalColor;
  p1.style.display="none";
});

let sbox2 = document.querySelector("#sbox2");
sbox2.addEventListener("mouseenter", () => {
  d2.style.background =  "linear-gradient(to bottom, rgb(255, 153, 0) ,rgb(31, 30, 30)) "
  p2.style.display="block";
});
sbox2.addEventListener("mouseleave", () => {
  d2.style.background = originalColor;
  p2.style.display="none";
});
let sbox3 = document.querySelector("#sbox3");
sbox3.addEventListener("mouseenter", () => {
  d2.style.background = "linear-gradient(to bottom ,rgb(192, 192, 192) ,rgb(31, 30, 30)) "
  p3.style.display="block";
});
sbox3.addEventListener("mouseleave", () => {
  d2.style.background = originalColor;
  p3.style.display="none";
});
let sbox4 = document.querySelector("#sbox4");
sbox4.addEventListener("mouseenter", () => {
  d2.style.background =  "linear-gradient(to bottom, rgb(255, 128, 149) ,rgb(31, 30, 30)) "
  p4.style.display="block";
});
sbox4.addEventListener("mouseleave", () => {
  d2.style.background = originalColor;
  p4.style.display="none";
});
let sbox5 = document.querySelector("#sbox5");
sbox5.addEventListener("mouseenter", () => {
  d2.style.background = "linear-gradient(to bottom ,rgb(128, 128, 128) ,rgb(31, 30, 30)) ";
  p5.style.display="block";
});
sbox5.addEventListener("mouseleave", () => {
  d2.style.background = originalColor;
  p5.style.display="none";
});
let sbox6 = document.querySelector("#sbox6");
sbox6.addEventListener("mouseenter", () => {
  d2.style.background = "linear-gradient(to bottom,brown 10% , rgb(31, 30, 30) 100%)";
  p6.style.display="block";
});
sbox6.addEventListener("mouseleave", () => {
  d2.style.background = originalColor;
  p6.style.display="none";
});


//Set color
let s1=document.querySelector("#s1");
s1.addEventListener("mouseover",()=>{
  s1.style.background="rgb(51, 50, 50)";
  });
s1.addEventListener("mouseleave",()=>{
  s1.style.background="#1C1C1C"
})
//Set color
let s2=document.querySelector("#s2");
s2.addEventListener("mouseover",()=>{
  s2.style.background="rgb(51, 50, 50)";
});
s2.addEventListener("mouseleave",()=>{
  s2.style.background="#1C1C1C"
})
//Set color
let s3=document.querySelector("#s3");
s3.addEventListener("mouseover",()=>{
  s3.style.background="rgb(51, 50, 50)";
});
s3.addEventListener("mouseleave",()=>{
  s3.style.background="#1C1C1C"
})
//Set color
let s4=document.querySelector("#s4");
s4.addEventListener("mouseover",()=>{
  s4.style.background="rgb(51, 50, 50)";
});
s4.addEventListener("mouseleave",()=>{
  s4.style.background="#1C1C1C"
})
//Set color
let s5=document.querySelector("#s5");
s5.addEventListener("mouseover",()=>{
  s5.style.background="rgb(51, 50, 50)";
});
s5.addEventListener("mouseleave",()=>{
  s5.style.background="#1C1C1C"
})
//Set color
let s6=document.querySelector("#s6");
s6.addEventListener("mouseover",()=>{
  s6.style.background="rgb(51, 50, 50)";
});
s6.addEventListener("mouseleave",()=>{
  s6.style.background="#1C1C1C"
})
//Set color
let s7=document.querySelector("#s7");
s7.addEventListener("mouseover",()=>{
  s7.style.background="rgb(51, 50, 50)";
});
s7.addEventListener("mouseleave",()=>{
  s7.style.background="#1C1C1C"
})

//clickable honey singh
let sbox33=document.querySelector("#sbox3");
sbox33.addEventListener("click",()=>{
  window.location.href="http://127.0.0.1:5500/Spotify/honey.html";
});

//Add title
let i3=document.querySelector("#i3");
let i2=document.querySelector("#i2");
let i1=document.querySelector("#i1");
let liked=document.querySelector("#liked");  
let guru=document.querySelector("#guru");
let parche=document.querySelector("#parche");

i3.addEventListener("mouseover",function(){
  this.title=this.getAttribute("data-tooltip");
});
 i3.addEventListener('mouseout', function() {
     this.title = '';
});
i2.addEventListener("mouseover",function(){
  this.title=this.getAttribute("data-tooltip");
});
 i2.addEventListener('mouseout', function() {
     this.title = '';
});
i1.addEventListener("mouseover",function(){
  this.title=this.getAttribute("data-tooltip");
});
 i1.addEventListener('mouseout', function() {
     this.title = '';
});
liked.addEventListener("mouseover",function(){
  this.title=this.getAttribute("data-tooltip");
});
liked.addEventListener('mouseout', function() {
     this.title = '';
});
guru.addEventListener("mouseover",function(){
  this.title=this.getAttribute("data-tooltip");
});
guru.addEventListener('mouseout', function() {
     this.title = '';
});
parche.addEventListener("mouseover",function(){
  this.title=this.getAttribute("data-tooltip");
});
parche.addEventListener('mouseout', function() {
     this.title = '';
});

// draw  LINE
let h2=document.querySelector("#h2");
let h1=document.querySelector("#h1");
h2.addEventListener("mouseover",()=>{
  h2.style.textDecoration="underline"
  h2.style.color="white"
});
h2.addEventListener("mouseout",()=>{
  h2.style.textDecoration="none"
  h2.style.color="rgb(163, 156, 156)"
});
h1.addEventListener("mouseover",()=>{
  h1.style.textDecoration="underline"
  
});
h1.addEventListener("mouseout",()=>{
  h1.style.textDecoration="none"
});

// show button on songs
let p11=document.querySelector("#p11");
let p12=document.querySelector("#p12");
let p13=document.querySelector("#p13");
let p14=document.querySelector("#p14");
let p15=document.querySelector("#p15");
let p16=document.querySelector("#p16");
let p17=document.querySelector("#p17");
s1.addEventListener("mouseover",()=>{
  p11.style.display="block"
});
s1.addEventListener("mouseout",()=>{
  p11.style.display="none"
});
s2.addEventListener("mouseover",()=>{
  p12.style.display="block"
});
s2.addEventListener("mouseout",()=>{
  p12.style.display="none"
});
s3.addEventListener("mouseover",()=>{
  p13.style.display="block"
});
s3.addEventListener("mouseout",()=>{
  p13.style.display="none"
});
s7.addEventListener("mouseover",()=>{
  p17.style.display="block"
});
s7.addEventListener("mouseout",()=>{
  p17.style.display="none"
});
s6.addEventListener("mouseover",()=>{
  p16.style.display="block"
});
s6.addEventListener("mouseout",()=>{
  p16.style.display="none"
});
s5.addEventListener("mouseover",()=>{
  p15.style.display="block"
});
s5.addEventListener("mouseout",()=>{
  p15.style.display="none"
});
s4.addEventListener("mouseover",()=>{
  p14.style.display="block"
});
s4.addEventListener("mouseout",()=>{
  p14.style.display="none"
});

//Add button on artist
let a1=document.querySelector("#a1");
let a2=document.querySelector("#a2");
let a3=document.querySelector("#a3");
let a4=document.querySelector("#a4");
let a5=document.querySelector("#a5");
let a6=document.querySelector("#a6");
let a7=document.querySelector("#a7");
let p777=document.querySelector("#p777");
let p666=document.querySelector("#p666");
let p555=document.querySelector("#p555");
let p444=document.querySelector("#p444");
let p333=document.querySelector("#p333");
let p222=document.querySelector("#p222");
let p111=document.querySelector("#p111");
// //clickable arijit singh
a1.addEventListener("mouseover",()=>{
  a1.style.background="rgb(51, 50, 50)"
  p111.style.display="block"
});
a1.addEventListener("click",()=>{
  window.location.href="http://127.0.0.1:5500/Spotify/arijit/arijit.html"
});
a1.addEventListener("mouseleave",()=>{
  a1.style.background="#1C1C1C"
  p111.style.display="none"
});

a7.addEventListener("mouseover",()=>{
  a7.style.background="rgb(51, 50, 50)"
  p777.style.display="block"
});
a7.addEventListener("mouseleave",()=>{
  a7.style.background="#1C1C1C"
  p777.style.display="none"
})

a6.addEventListener("mouseover",()=>{
  a6.style.background="rgb(51, 50, 50)"
  p666.style.display="block"
});
a6.addEventListener("mouseleave",()=>{
  a6.style.background="#1C1C1C"
  p666.style.display="none"
})

a5.addEventListener("mouseover",()=>{
  a5.style.background="rgb(51, 50, 50)"
  p555.style.display="block"
});
a5.addEventListener("mouseleave",()=>{
  a5.style.background="#1C1C1C"
  p555.style.display="none"
})

a4.addEventListener("mouseover",()=>{
  a4.style.background="rgb(51, 50, 50)"
  p444.style.display="block"
});
a4.addEventListener("mouseleave",()=>{
  a4.style.background="#1C1C1C"
  p444.style.display="none"
})

a3.addEventListener("mouseover",()=>{
  a3.style.background="rgb(51, 50, 50)"
  p333.style.display="block"
});
a3.addEventListener("mouseleave",()=>{
  a3.style.background="#1C1C1C"
  p333.style.display="none"
})

a2.addEventListener("mouseover",()=>{
  a2.style.background="rgb(51, 50, 50)"
  p222.style.display="block"
});
a2.addEventListener("mouseleave",()=>{
  a2.style.background="#1C1C1C"
  p222.style.display="none"
})

//add styling on artists name
let h3=document.querySelector("#h3");
h3.addEventListener("mouseover",()=>{
  h3.style.textDecoration="Underline"
});
h3.addEventListener("mouseout",()=>{
  h3.style.textDecoration="none"
});
let h4=document.querySelector("#h4");
h4.addEventListener("mouseover",()=>{
  h4.style.textDecoration="Underline"
  h4.style.color="white"
});
h4.addEventListener("mouseout",()=>{
  h4.style.textDecoration="none"
  h4.style.color="rgb(163, 156, 156)"
});



// play song
let songs = [
 ' Daku.mpeg',
  "s2.mpeg",
  "s3.mpeg",
  "s4.mpeg",
  "v2.mp4",
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const progressBar = document.getElementById('progress');

function play() {
  audioPlayer.play();
}

function pause() {
  audioPlayer.pause();
}

function next() {
  if (currentSongIndex < songs.length - 1) {
    currentSongIndex++;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
  }
}

function previous() {
  if (currentSongIndex > 0) {
    currentSongIndex--;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
  }
}

function updateProgressBar() {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;
  const progress = (currentTime / duration) * 100;
  progressBar.style.width = progress + '%';
}

document.getElementById('playButton').addEventListener('click', play);
document.getElementById('pauseButton').addEventListener('click', pause);
document.getElementById('nextButton').addEventListener('click', next);
document.getElementById('prevButton').addEventListener('click', previous);


//Clickable king
let a33=document.querySelector("#a2");
a33.addEventListener("click",()=>{
  window.location.href="http://127.0.0.1:5500/Spotify/king/king.html";
});

let gif5=document.querySelector("#gif5");
let pause5=document.querySelector("#pause5");
p5.addEventListener("click",()=>{
  p5.style.display="none";
  gif5.style.display="block";
})
















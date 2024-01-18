let audioelement=new Audio("songs/1.mp3");
let masterplay=document.getElementById("masterplay");
let progressbar=document.getElementById("progressbar");
let songitem=document.getElementsByClassName("songitem");
let songindex=0;
let gif=document.getElementsByClassName("gif")[0];
let mastersong=document.getElementById("mastersong");


let songs=[
    {songname:"Let-Me-Love-you",coverpath:"covers/1.jpg",filepath:"songs/1.mp3"},
    {songname:" Appeal Of The City",coverpath:"covers/2.jpg",filepath:"songs/2.mp3"},
    {songname:"Streets Of Your Life",coverpath:"covers/3.jpg",filepath:"songs/3.mp3"},
    {songname:"Honey, I'm Losing Control",coverpath:"covers/4.jpg",filepath:"songs/4.mp3"},
    {songname:"She Said You're Bad For",coverpath:"covers/5.jpg",filepath:"songs/5.mp3"},
    {songname:" She Hates I Am Trouble",coverpath:"covers/6.jpg",filepath:"songs/6.mp3"},
    {songname:"I Heard He's Going To Jail",coverpath:"covers/7.jpg",filepath:"songs/7.mp3"},
    {songname:"Honey",coverpath:"covers/8.jpg",filepath:"songs/8.mp3"},
    {songname:"I'm A Player",coverpath:"covers/9.jpg",filepath:"songs/9.mp3"}  
]


Array.from(songitem).forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src=songs[i].coverpath;
   element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})
const makeallplay=()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((e)=>{
        e.classList.add("fa-play");
        e.classList.remove("fa-pause");
    })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach(element=>{
    element.addEventListener("click",()=>{
        makeallplay();
        songindex=parseInt(element.id)
        element.classList.add("fa-pause");
        element.classList.remove("fa-play");
        audioelement.src=`songs/${songindex+1}.mp3`;
        audioelement.play();
        audioelement.currentTime=0;   
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");    
        gif.style.opacity=1;        
        mastersong.innerText=songs[songindex].songname;
    })
})


masterplay.addEventListener("click",()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        audioelement.play();
        gif.style.opacity=1;
        mastersong.innerText=songs[songindex].songname;

    }
    else if(audioelement.play){
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
        audioelement.pause();
        gif.style.opacity=0;
        mastersong.innerText=songs[songindex].songname;

    }
})



audioelement.addEventListener("timeupdate",()=>{
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    progressbar.value=progress;
})

progressbar.addEventListener("change",()=>{
    audioelement.currentTime=(progressbar.value*audioelement.duration)/100;
})



document.getElementById("next").addEventListener("click",()=>{
    if(songindex>9){
        songindex=0;
    }
    else{
        songindex=songindex+1;
    }
    audioelement.src=`songs/${songindex+1}.mp3`;
        audioelement.play();
        audioelement.currentTime=0;   
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");    
        gif.style.opacity=1;        
        mastersong.innerText=songs[songindex].songname;
})
 
document.getElementById("previous").addEventListener("click",()=>{
    if(songindex<=0){
        songindex=9;
    }
    else{
        songindex=songindex-1;
    }
        audioelement.src=`songs/${songindex+1}.mp3`;
        audioelement.play();
        audioelement.currentTime=0;   
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");    
        gif.style.opacity=1;        
        mastersong.innerText=songs[songindex].songname;
})


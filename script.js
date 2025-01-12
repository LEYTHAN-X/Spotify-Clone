console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('resources/songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {   
        songName: "Salam-e-Ishq",
        filePath: "resources/songs/1.mp3",
        coverPath: "resources/covers/1.jpg"
    },
    {   
        songName: "King always",
        filePath: "resources/songs/2.mp3",
        coverPath: "resources/covers/2.jpg"
    },
    {   
        songName: "Darkness world",
        filePath: "resources/songs/3.mp3",
        coverPath: "resources/covers/3.jpg"
    },
    {   
        songName: "Loin heart",
        filePath: "resources/songs/4.mp3",
        coverPath: "resources/covers/4.jpg"
    },
    {   
        songName: "koko meiala",
        filePath: "resources/songs/5.mp3",
        coverPath: "resources/covers/5.jpg"
    },
    {   
        songName: "Eagel speed",
        filePath: "resources/songs/6.mp3",
        coverPath: "resources/covers/6.jpg"
    },
    {   
        songName: "Welcome to Darkenss",
        filePath: "resources/songs/7.mp3",
        coverPath: "resources/covers/7.jpg"
    },
    {   
        songName: "Villene arc",
        filePath: "resources/songs/8.mp3",
        coverPath: "resources/covers/8.jpg"
    },
    {   
        songName: "Battel of Legends",
        filePath: "resources/songs/9.mp3",
        coverPath: "resources/covers/9.jpg"
    },
    {   
        songName: "Lil Tejya",
        filePath: "resources/songs/10.mp3",
        coverPath: "resources/covers/10.jpg"
    }
]
songItems.forEach((elements,i)=>{
    console.log(elements,i);
    elements.getElementsByTagName("img")[0].src=songs[i].coverPath;
    elements.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`resources/songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`resources/songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`resources/songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
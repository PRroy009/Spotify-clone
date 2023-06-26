console.log("Wellcome to my music shop");
console.log("Please pause the first song before playing the next song");
 
let songindex = 0;
let audio = new Audio('/Animations/music/music1.mp3');
let masterplay = document.getElementById('masterplay');
let PGB = document.getElementById('PGB');
let gif = document.getElementById('gif');
let forward = document.getElementById('forward');
let backward = document.getElementById('backward');
let songiteams = Array.from(document.getElementsByClassName('songItem'));
let songiteamplay = Array.from(document.getElementsByClassName('songiteamplay'));
let masterplay1 = document.getElementById('1');
let masterplay2 = document.getElementById('2');
// let songs = [
//     {songname: "We don't talk anymore", filepath:"/Animations/music/music1.mp3", coverpath:"/Animations/Music bg/1000.jpg"},
//     {songname: "Attention", filepath:"/Animations/music/music2.mp3", coverpath:"/Animations/Music bg/1000.jpg"},
//     {songname: "How Long", filepath:"/Animations/music/music3.mp3", coverpath:"/Animations/Music bg/1000.jpg"},
//     {songname: "Wushang clan", filepath:"/Animations/music/music4.mp3", coverpath:"/Animations/Music bg/1200.jpg"},
//     {songname: "Fudda chatto dabke", filepath:"/Animations/music/music5.mp3", coverpath:"/Animations/Music bg/1200.jpg"},
// ]

// songiteams.forEach((element, i)=>{
//     console.log(element, i)
// element.getElementsbyTagname("img")[0].src=songs[i].filepath;
// })

// audio.play();

//Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audio.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
backward.addEventListener('click',()=>{
    if(audio.currentTime>0){
        audio.currentTime=0;
    }
})



//Listen to events
audio.addEventListener('timeupdate',()=>{
// Updating Seekbar
 progress = parseInt((audio.currentTime/audio.duration)*100);
 PGB.value = progress;
})
PGB.addEventListener('change',()=>{
audio.currentTime = PGB.value*audio.duration/100;
})

// const makeall=()=>{
//     Array.from(document.getElementsByClassName('songiteamplay')).forEach((element)=>{
//         element.classList.remove('fa-circle-pause');
//         element.classList.add('fa-circle-play');
        
//     })
// }
// songiteamplay.forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         makeall();
//         index = parseInt(e.target.id);
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         audio.src = `/Animations/music/${index}.mp3`;
//         audio.currentTime = 0;
//         audio.play();
//         masterplay.classList.remove('fa-pause-circle');
//         masterplay.classList.add('fa-play-circle');
//     })
// })
masterplay1.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.src = '/Animations/music/music1.mp3'
        audio.play();
        masterplay1.classList.remove('fa-play-circle');
        masterplay1.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audio.pause();
        masterplay1.classList.remove('fa-pause-circle');
        masterplay1.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
masterplay2.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.src = '/Animations/music/music2.mp3'
        audio.play();
        masterplay2.classList.remove('fa-play-circle');
        masterplay2.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audio.pause();
        masterplay2.classList.remove('fa-pause-circle');
        masterplay2.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
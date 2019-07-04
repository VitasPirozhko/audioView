import '../css/index.css';
import audioSrc from '../audio/Twenty_Miles_-_NBSPLV.mp3'

let audio = document.getElementById('audio');
audio.src = audioSrc;
audio.crossOrigin = "anonymous";
const logo = document.getElementById('logo').style;
let analyser, context, src, array;
let AudioContext = window.AudioContext  || window.webkitAudioContext || false;

window.onclick = function () {
    if(!context) {
        preparation();
    }
    if(audio.paused){
        audio.play();
        loop();
    }else{
        audio.pause();
    }
};

function preparation() {
    context = new AudioContext();
    analyser = context.createAnalyser();
    src = context.createMediaElementSource(audio);

    src.connect(analyser);
    analyser.connect(context.destination);

    loop();
}

function loop() {
    if(!audio.paused) {
        window.requestAnimationFrame(loop);
    }
    array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);

    logo.height = (array[40]) + 'px';
    logo.width = (array[40]) + 'px'
}

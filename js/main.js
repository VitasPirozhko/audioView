let audio = document.getElementById('audio');
audio.crossOrigin = "anonymous";
const logo = document.getElementById('logo').style;
let analyser, context, src, array;

window.onclick = function () {
    if(audio.paused){
        audio.play();
        loop();
    }else{
        audio.pause();
    }
    if(!context) {
        preparation();
    }
};

function preparation() {
    context = new AudioContext;
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

    logo.minHeight = (array[40]) + 'px';
    logo.width = (array[40]) + 'px'
}
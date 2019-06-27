let audio = document.getElementById('audio');
audio.crossOrigin = "anonymous";
const logo = document.getElementById('logo').style;
let analyser, context, src, array;

window.onclick = function () {
    audio.paused ? audio.play() : audio.pause();
    preparation();
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
    window.requestAnimationFrame(loop);
    array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);

    logo.minHeight = (array[40]) + 'px';
    logo.width = (array[40]) + 'px'
}
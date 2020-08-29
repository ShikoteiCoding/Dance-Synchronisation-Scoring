let poseNet;
let video;

function storeVideo(file) {
    video = file;
}

function modelLoaded() {
    console.log('model is loaded');
}

function setup() {
    poseNet = ml5.poseNet(video, modelLoaded);
}

function draw() {
}
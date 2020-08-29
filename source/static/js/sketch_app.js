let poseNet;
let video;
let videoURL;
let ready = false;
let pose;
let videoWidth = 1920;
let videoHeight = 1080;

function storeVideo(file) {
    video = createVideo(URL.createObjectURL(file), () => { console.log('video loaded');});
    console.log(video.elt);
    video.hide();
}

function loadPoseNet() {

}

function modelLoaded() {
    console.log('model loaded');
}

function gotPoses(poses) {
    if (poses.length > 0) {
        pose = poses[0].pose;
    }
}

function runPoseNet() {
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    video.loop();
    ready = true;
}

function setup() {
    createCanvas(300, 150);
    background(220);
}

function draw() {
//    ellipse(200, 100, 10, 10);
    if (ready) {
        image(video, 0, 0, 300, 150);


        if (pose) {
            fill(255, 0, 0);
            noStroke();
            ellipse((pose.nose.x / videoWidth) * width, (pose.nose.y / videoHeight) * height, 10, 10);
            console.log(pose.nose.x, pose.nose.y);
        }
    }
}
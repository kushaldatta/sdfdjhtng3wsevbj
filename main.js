var nose_x = "";
var nose_y = "";

function preload() { }

function setup() {
    canvas = createCanvas(500, 410);
    canvas.position(450, 175);
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 500, 410);
}

function take_snapshot() {
    save("my_filter_image.png");
}

function modelLoaded() {
    console.log("PoseNet is initialized.");
}

function gotPoses(results) {
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
}
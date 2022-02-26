noseX = 0;
nosey = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(160, 210);

    canvas = createCanvas(550, 510);
    canvas.position(760,210);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);   
    }
}
function draw(){
    background('#ff4500')
}
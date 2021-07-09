function preload(){

}
function setup(){
    canvas=createCanvas(400,400)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video,modelLoaded)
}
function draw() {
    image(video,0,0,400)
    poseNet.on("pose",gotposes)
}
function take_snapshot() {
    save("Vihaansagenius.png")
}
function modelLoaded(){
    console.log("Pose net has given his profile pose(A horrible one at that)")
}

function gotposes(results){
    if (results.length>0) {
        console.log(results)
        console.log("x position of nose="+results[0].pose.nose.x)
        console.log("y position of nose="+results[0].pose.nose.y)
    }
    
}
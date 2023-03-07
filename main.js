img="";
stats = "";
object = [];

function preload(){
    img = loadImage('dog_cat.jpg');
}
function setup(){
canvas = createCanvas(380,380);
canvas.center()
video = createCapture(VIDEO);
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
video.hide();
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw(){
    image(video,0,0,380,380 );
if(stats != "")
{
    r = random(255);
    g = random(255);
    b = random(255);
    objectDetector.detect(video, gotResult);
    for(i = 0; i <object.length; i++){
document.getElementById("status").innerHTML = "Status: Detected Objects";
document.getElementById("num").innerHTML = "Number of OBJECTs is" +object.length;
fill(r,g,b);
percent = floor(object[i].confidence * 100);       
text(object[i].label + " " + percent + "%", object[i].x +15, object[i].y +15);
noFill();
stroke(r,g,b);
rect(object[i].x, object[i].y, object[i].width, object[i].height);
    }
}
}
function modelLoaded(){
console.log("You win first round buddy not next");
stats = true;
objectDetector.detect(video, gotResult);
}
function gotResult(error,results){
if(error)
{
    console.log(error);
    console.log("i told you i would win :)");
}
console.log(results);
object = results;
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
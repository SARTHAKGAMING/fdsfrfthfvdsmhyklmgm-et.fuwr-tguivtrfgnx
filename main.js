function preload() {
    //
    //
}

function setup() {

    var canvas=createCanvas(640,400);

    canvas.position(630,250);
var video=createCapture(VIDEO);
video.hide();
var tintcolour="";
}

function draw() {


    image(video,0,0,640,400);

    tint(tintcolour);


}
function take_snapshot(){
    save("YOU_ARE_PRO.png");

}
function change_btn(){
    tintcolour=document.getElementById("take123").value;
}
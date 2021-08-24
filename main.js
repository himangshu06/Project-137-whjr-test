video  = "";
status = "";
function preload(){
  video = createCapture("video.mp4");
  video.hide();
}
function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
}
function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
  image(video, 0, 0, 480, 380);
      if(status != "")
      {
        //code//-->>
          if(results == text_input1){
            document.getElementById("status").innerHTML = "Status : Objects Detected!";
          document.getElementById("number_of_objects").innerHTML = text_input1+" "+"has Been Found!";
 
          fill("#FF0000");
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke("#FF0000");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

          var synth = window.speechSynthesis;
     speak_data1 = "Your Object Has been Found!";
     var utterThis = new SpeechSynthesisUtterance(speak_data1);
     synth.speak(utterThis);
          }
          else{
            objectDetector.detect(video, gotResult);
            for (i = 0; i < objects.length; i++) {
              document.getElementById("status").innerHTML = "Status : Objects Detected";
              document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;
     
              fill("#FF0000");
              percent = floor(objects[i].confidence * 100);
              text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
              noFill();
              stroke("#FF0000");
              rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
          }
      }
    }
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Object Detecting!";
}
function modelLoaded(){
    console.log("modelLoaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}



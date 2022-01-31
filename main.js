 function preload() {
     doodlenetmodel = ml5.imageClassifier("DoodleNet");
 }


 function setup() {
     canvas = createCanvas(600, 400);
     canvas.center();
     background("lavender");
     canvas.mouseReleased(identifyDoodle);
     speechmodel = window.speechSynthesis;
 }

 function draw() {
     strokeWeight(8);
     stroke(0);
     if (mouseIsPressed) {
         line(pmouseX, pmouseY, mouseX, mouseY);
     }
 }

 function identifyDoodle() {
     doodlenetmodel.classify(canvas, getresults);
 }

 function getresults(error, resultsarray) {
     if (error) {
         console.error(error);
     } else {
         console.log(resultsarray);
         document.getElementById("doodlename").innerHTML = resultsarray[0].label;
         texttospeech = new SpeechSynthesisUtterance(resultsarray[0].label);
         speechmodel.speak(texttospeech);
     }
 }

 function clearcanvas() {
     background("lavender");
 }
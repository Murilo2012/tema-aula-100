var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content =="tire minha selfie")
      {
        console.log("tirando selfie --- ");
        speak();
      }
}
 function speak(){
  var synth=window.speechSynthesis
  speakData="tirando a sua foto em 5,4,3,2,1"
  var utterThis = new SpeechSynthesisUtterance(speakData);
  synth.speak(utterThis)
  Webcam.attach(camera)
  setTimeout(function()  {
    takeSelfie()
    save()
  },  5000);
 }
  camera=document.getElementById("camera")
  Webcam.set({
    width:359
  , height:249,
  image_format:"jpeg",
  jpeg_quality:89
  })

  function takeSelfie(){
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img id="selfieImage" src="'+data_uri+'"/>'

    })
  }

  function  save(){
    link=document.getElementById("link")
    img=document.getElementById("selfieImage").src 
    link.href=img
    link.click()
    }
  
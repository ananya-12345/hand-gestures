prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera= document.getElementById("camera");
Webcam.attach('#camera');
function click1(){
    Webcam.snap(function(a){
    document.getElementById("result").innerHTML='<img id="done" src="'+a+'"/>';
    });
}
console.log("ml5 version is loaded",ml5.version);
x= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WcFiSpRV6/model.json',succesful);
function succesful(){
    console.log("model is loaded");
}
function answer(){
    final= document.getElementById("done");
x.classify(final,complete);
}
function complete(error,result){
if (error) {
    console.log(error);
}
else{
console.log(result);
document.getElementById("result_emotion_name").innerHTML=result[0].label;
document.getElementById("result_emotion_name2").innerHTML=result[1].label;
prediction1=result[0].label;
prediction2=result[1].label;
speak();
if(result[0].label=="fist"){
document.getElementById("pic").innerHTML="&#9994;";
}
if(result[0].label=="superb"){
    document.getElementById("pic").innerHTML="&#128076;";
    }
 if(result[0].label=="peace"){
    document.getElementById("pic").innerHTML="&#9996;";
    }
    if(result[0].label=="thumbsup"){
        document.getElementById("pic").innerHTML="&#128077;";
        }
        if(result[1].label=="fist"){
            document.getElementById("pic2").innerHTML="&#9994;";
            }
            if(result[1].label=="superb"){
                document.getElementById("pic2").innerHTML="&#128076;";
                }
             if(result[1].label=="peace"){
                document.getElementById("pic2").innerHTML="&#9996;";
                }
                if(result[1].label=="thumbsup"){
                    document.getElementById("pic2").innerHTML="&#128077;";
                    }
}
}
function speak(){
    y= window.speechSynthesis;
    r="the first prediction is"+prediction1;
    t="the second prediction is"+prediction2;
    p= new SpeechSynthesisUtterance(r+t);
    y.speak(p);
}
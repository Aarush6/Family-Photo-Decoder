//https://teachablemachine.withgoogle.com/models/[...]
//https://teachablemachine.withgoogle.com/models/UP9cn9e4G/




Webcam.set({
    width: 350,
    height: 300,
image_format: "png",
png_quality:90
});

camera=document.getElementById("camera")

Webcam.attach('#camera')

function capture(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'/> ";
});

}
console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/UP9cn9e4G/model.json',modelLoaded);

function modelLoaded(){
console.log("model Loaded");
}

function identify(){
    image=document.getElementById("capture_image");
    classifier.classify(image,gotResult);
}

function gotResult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
document.getElementById("Obj").innerHTML=result[0].label;
document.getElementById("Accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}
function preload(){

}
function setup(){

    canvas = createCanvas(350,350);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lO4SJg1Qb/model.json', modelLoaded);

}
function draw(){

    image(webcam, 0, 0, 350, 350);
    classifier.classify(webcam, gotResult);

}
function modelLoaded(){

    console.log("la model has been loaded");

}

function gotResult(error, results){

    if(error){
        console.error(error);
    }
    else{

        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2);

    }

}
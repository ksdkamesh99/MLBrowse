let img;
let classifier;

function onpredict(error,results){
	if(!error){
		console.log(results);
		document.getElementById('result').textContent=results[0]['label'];
		console.log('done');
	}
	else{
		console.log(error);
	}
}

function onloaded(){
	console.log('mobilenet loaded!');
	classifier.predict(img,onpredict);
}


function setup(){
	createCanvas(500,500);
	img=loadImage('images/dog.jfif');
	console.log('image loaded');
	classifier=ml5.imageClassifier('MobileNet',onloaded);

}


function draw(){
	image(img,0,0);
}
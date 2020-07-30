let video;
let classifier;

function onpredict(error,results){
	if(!error){
		console.log(results);
		document.getElementById('result').textContent=results[0]['label'];
		console.log('done');	
		classifier.predict(video,onpredict);

	}
	else{
		console.log(error);
	}
}

function onloaded(){
	console.log('mobilenet loaded!');
	classifier.predict(video,onpredict);
}


function setup(){
	createCanvas(500,500);
	video=createCapture(
	{
		     video: {
        
         facingMode: {
          exact: "user"
        }
     }

	}
		);
	
	console.log('video loaded');
	video.hide();
	classifier=ml5.imageClassifier('MobileNet',video,onloaded);

}


function draw(){
	image(video,0,0);
}
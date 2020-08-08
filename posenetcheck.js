let pose;

function setup(){
	createCanvas(500,500);
	video=createCapture(
	{
		     video: {
        
         facingMode: {
          exact: "environment"
        }
     }

	}
		);
	
	console.log('video loaded');
	video.hide();
	posenet=ml5.poseNet(video,onloaded);
	posenet.on("pose",getposes);

}

function getposes(poses){
	console.log(poses);
	if(poses.length>0){
		pose=poses[0];
	}

	
	
	
	
}

function onloaded(){
	console.log('posenet loaded');
}

function draw(){
	image(video,0,0);
	fill('yellow');
	if(pose){
		for (var i=0;i<17;i++) {
			var x=pose.pose.keypoints[i].position.x;
			var y=pose.pose.keypoints[i].position.y;
			ellipse(x,y,12,12);
		}
		
	}
}
song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
song1Status = " ";
song2Status = " ";

function preload()
{
   song1 = loadSound("music.mp3");
   song2 = loadSound("music2.mp3");
}

function setup()
{
      canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("poseNet.... ACTIVEATE!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        //left wrist x
        leftWristX = results[0].pose.leftWrist.x;
        console.log("left wrist X = " + leftWristX);
        //left wrist y
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left wrist Y = " + leftWristY);
        //right wrist x
        rightWristX = results[0].pose.rightWrist.x;
        console.log("right wrist X = " + rightWristX);
        //right wrist y
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right wrist Y = " + rightWristY);
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
    fill("red");
    stroke("red");
    song1Status = song1Status.isPlaying();
    if(leftWristX > 0.2)
    {
        circle(leftWristX, leftWristY, 20);
        song2Status.stop();
       
        if(song1Status = false)
        {
            song1.play();
            document.getElementById("song_name").innerHTML = " Peter Pan Song is now playing";
        }      
    }
    
}




/* Html code that I got rid of that I might use eventually 
</h3>
    <div class="disk_speed">
      <img src="disk.gif" class="div_speed_img"> 
      <br>
      <h3 class="btn btn-danger" id="speed"> Speed </h3>
    </div>

    <div class="disk_volume">
      <img src="disk.gif" class="div_volume_img"> 
      <br>
      <h3 class="btn btn-danger" id="volume"> volume </h3>
    </div>
	<br><br>
*/
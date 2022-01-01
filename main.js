song1 = "";
song2 = "";

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
}

function draw()
{
    image(video, 0, 0, 600, 500);
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
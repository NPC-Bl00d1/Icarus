img = "";
noseX = 0;
noseY = 0;
marioX = 0;
marioY = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("die.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("mario05.png");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video=createCapture(VIDEO);
	video.size(700,300);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded)
	poseNet.on('pose' , gotPoses);

	instializeInSetup(mario);
}


function modelLoaded(){

	console.log("ẗ̸̛̮͍́͂̃̒̇́͊̐̒́̽̿h̶̢̭̞̳̭́̽̆͌̏́́̆̌̀̕̕ē̴͙̤̱̪̯̙̠͓̉̒̀̚͜ ̶͍̩̤̳̱̜͓̯͉̈̑̾͒́̽̑̄̓͘͘͜m̵̧̮̱̗̖͙͖̩̙̦̪̜͇̫̞̎̈́́̇̿͠ǒ̸̢͎̦̙͖̻̳̝́̀͛̒d̶̖̩̬͈̗̱͇͈͇͊̋͋̂̈̇́̓̿̌͘͝è̵̢̬̦̜̩̖̙̘̜̫̟̬̱̎̃̒̋̓̀̊͒̂̚͠͠l̵̓̉̾̓͜ ̷͕̬͎͎̮̈͑͒̈͋̄̒̀̊̑̈́̓̈́̈́͠h̴̤̯̬̲̣͉̼͑̑̍̀̌̈̇͛̓̔̆̚͠a̶̩͔̲̗̦͔̼͓͉̟̲͇̾š̷̹ ̵̗̥̖͚̹͇͇͕͉̹̜̘̘͋͊̒͂̒͊͛̊̂͒̚͠͝ͅͅl̶͖̑̆̈̊̆͑̔͛́̆̎̏͊̕͠o̷̢̪̣͉̯̰̠̮̫͓͍͖̬̾̐̈́͌͆̒̑́̌͘͜͠a̶̰̦̿̀̕͜d̸͎͈͚͉̠̲̝̺͕͇̖̭̓͗̐̄̋̏́͘͜͝͝͠ë̴͔͎͔͔͖̮͙̗̯̙͍͈͔̩́̇͒͋͋d̷̦͕͔͍̬̰̠̜̔͗ͅ");

}

function gotPoses(results){

	console.log(results);
	
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
	console.log("noseX = " + noseX + " and noseY = " + noseY);

}


function draw() {
	game();


	if(noseX < 300){

		marioX = marioX - 1;

	}
	if(noseX > 300){

		marioX = marioX + 1;

	}

	if(noseY < 150){

		marioY = marioY - 1

	}




	image(img, marioX, marioY, 40, 70);


}
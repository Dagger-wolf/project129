scoreleft = 0;
song_variable = "";
leftwristx = 0;
rightwristx = 0;
leftwristy = 0;
rightwristy = 0;

function setup(){

    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modeLoaded);
    posenet.on('pose', gotposes);

}

function draw(){

    image(video, 0, 0, 600,500);

    fill("red");
    stroke("red");

    sound_variable.isPlaying();

    if(scoreleft > 0.2){

        circle(leftwristx + 100, leftwristy, 20);

        song2.stop();

        if(sound_variable == "false"){

            song1.play();

            document.getElementById("song_name").innerHTML = "SONG: Song1";

        }

    }

}

sound1 = "";
sound2 = "";

function preload(){

    sound1 = loadSound("mp3.mp3");
    sound2 = loadSound("music.mp3");

}

function modeLoaded(){

    console.log("Model loaded");

}

function gotposes(results){

    if(results.length > 0){

        console.log(results);

        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;

        console.log("Left Wrist X = " + leftwristx + " Left Wrist Y = " + leftwristy + " Right Wrist X = " + rightwristx + " Right Wrist Y = " + rightwristy);

        scoreleft = results[0].pose.keypoints[9].score;

    }

}
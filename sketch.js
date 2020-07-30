var ball;
var database;
var position;
var gameState = 0;
var playerCount ;
var form;
var player;
var game;
function setup(){
    createCanvas(1000,600);
   
   database= firebase.database();
   game = new Game();
   game.start();
}


function draw(){
    background("white");
    fill(0);
    textSize(20);
    text("Enter Email",50,450);
    
    text("Q-1 Which web browser do you use? ",0,20);
    text("Q-2 Which operating system does your phone has?",3,95);
    text("Q-3 How many hours do you use your phone?",3,170);
    text("Q-4 Which company's smartphone do you use?",1,230);
    text("Q-5 On which social media platform do you spend the most time?",1,300)
    text("Q-6 Was the survey useful to you?",3,370);
}



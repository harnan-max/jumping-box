var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    engine=Engine.create();
    world=engine.world;
    var options={
      isStatic:true
    }
   ground=Bodies.rectangle(200,390,400,20,options);
   World.add(world,ground);
   var squareoption={
     restitution:1
   }
   ball=Bodies.circle(200,100,20,squareoption);
   World.add(world,square);
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    function draw() {
        background(0);  
       Engine.update(engine)
       rectMode(CENTER)
       rect(ground.position.x,ground.position.y,400,20)
       ellipseMode(RADIUS)
       ellipse(square.position.x,square.position.y,20)
      }
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}

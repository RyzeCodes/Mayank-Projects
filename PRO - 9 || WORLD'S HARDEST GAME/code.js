var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e0dd286a-2288-46f7-bb88-21ce8d844734","3052e52b-e9e0-4d7d-91cd-33c391b8429c","8870cbc4-713f-4949-a46f-8b83c23fe1c0","861ec057-a830-4e13-be12-ed4f853f7781"],"propsByKey":{"e0dd286a-2288-46f7-bb88-21ce8d844734":{"name":"astro","sourceUrl":"assets/api/v1/animation-library/gamelab/.4bOiEdS4cf2KjoHtGusEIPFYdvLBPSo/category_icons/helmet.png","frameSize":{"x":384,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":".4bOiEdS4cf2KjoHtGusEIPFYdvLBPSo","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.4bOiEdS4cf2KjoHtGusEIPFYdvLBPSo/category_icons/helmet.png"},"3052e52b-e9e0-4d7d-91cd-33c391b8429c":{"name":"et","sourceUrl":"assets/api/v1/animation-library/gamelab/H5phfnIRZFnEoKoKyFVXtetS5O_VnTKO/category_fantasy/alienGreen_climb.png","frameSize":{"x":68,"y":94},"frameCount":2,"looping":true,"frameDelay":2,"version":"H5phfnIRZFnEoKoKyFVXtetS5O_VnTKO","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/H5phfnIRZFnEoKoKyFVXtetS5O_VnTKO/category_fantasy/alienGreen_climb.png"},"8870cbc4-713f-4949-a46f-8b83c23fe1c0":{"name":"space","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"861ec057-a830-4e13-be12-ed4f853f7781":{"name":"rocket","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":false,"frameDelay":12,"version":"N_CmI8MDcUUfzJqKRTimOLhoUGKxxPhS","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/861ec057-a830-4e13-be12-ed4f853f7781.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var back = createSprite(200,150)
var attempts = 0;
var rocket = createSprite(350,200,50,50)
rocket.setAnimation("rocket");
rocket.scale = 0.3
var astro = createSprite(40,190,13,13);

  
var et1 = createSprite(100,130,10,10);
et1.setAnimation("et")
et1.scale = 0.3
var et2 = createSprite(215,130,10,10);
et2.setAnimation("et")
et2.scale = 0.3
var et3 = createSprite(165,250,10,10);
et3.setAnimation("et")
et3.scale = 0.3
var et4 = createSprite(270,250,10,10);
et4.scale = 0.3;
et4.setAnimation("et")
 
var wall1 = createSprite(190,100,250,0.001);
wall1.shapeColor = "blue";
var wall2 = createSprite(190,290,250,0.001);
wall2.shapeColor = "blue";
var wall3 = createSprite(67,145,0.001,50);
wall3.shapeColor = "blue";
var wall4 = createSprite(67,235,0.001,50);
wall4.shapeColor = "blue";
var wall5 = createSprite(313,145,0.001,50);
wall5.shapeColor = "blue";
var wall6 = createSprite(313,235,0.001,50);
wall6.shapeColor = "blue";
var wall7 = createSprite(41,170,50,0.001);
wall7.shapeColor = "blue";
var wall8 = createSprite(41,210,50,0.001);
wall8.shapeColor = "blue";
var wall9 = createSprite(337,210,50,0.001);
wall9.shapeColor = "blue";
var wall10 = createSprite(337,170,50,0.001);
wall10.shapeColor = "blue";
var wall11 = createSprite(18,190,0.001,40);
wall11.shapeColor = "blue";
var wall12 = createSprite(361,190,0.001,40);
wall12.shapeColor = "blue";
  
et1.velocityY = 8;
et2.velocityY = 8;
et3.velocityY = -8;
et4.velocityY = -8;

playSound("assets/category_music/clear_evidence_loop1.mp3", true);



function draw() {
  back.setAnimation("space");
  //draw_background();
  fill(rgb(1, 0, 67));
  strokeWeight(0);
  rect(0, 350, 400, 50)
  astro.setAnimation("astro");
  astro.scale = 0.05;
  et1.bounceOff(wall1);
  et1.bounceOff(wall2);
  et2.bounceOff(wall1);
  et2.bounceOff(wall2);
  et3.bounceOff(wall1);
  et3.bounceOff(wall2);
  et4.bounceOff(wall1);
  et4.bounceOff(wall2);
  
  if (keyDown("RIGHT") || keyDown("d")){
    astro.x = astro.x+3;
  }
  
  if (keyDown("LEFT") || keyDown("a")){
    astro.x = astro.x-3;
  }
  
  if (astro.isTouching(et1)||
  astro.isTouching(et2)||
  astro.isTouching(et3)||
  astro.isTouching(et4)
  ) {
    astro.x=40
    astro.y=190
    attempts=attempts+1;
  }
  
  if (astro.isTouching(rocket)) {
    rocket.velocityY = -3;
    astro.x = 388;
    astro.y = 113;
    astro.y = rocket.y;
    playSound("assets/category_movement/cartoon_blast_off.mp3", false);
  }
  
  
  draw_attempts();
  drawSprites();
}

function draw_attempts(){
  textSize(15);
  textAlign(CENTER, BOTTOM);
  textFont("Impact");
  fill("yellow");
  stroke("red");
  strokeWeight(5);
  text("Attempts : "+attempts, 0, 0, 600, 370);}
  
function draw_background(){
   fill(rgb(0,0,128))
   strokeWeight(0)
   rect(0,0,400,40)
   fill(rgb(25,25,112))
   strokeWeight(0)
   rect(0,40,400,40) 
   fill(rgb(0,0,139))
   rect(0,80,400,40)
   fill(rgb(0,0,205))
   rect(0,120,400,40)
   fill(rgb(0,0,255))
   rect(0,160,400,40)
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6df5a7a5-e9cd-4029-8393-bcc985192c68","ba15ac53-d130-4bba-987d-0cb0b499c200","774dd834-7289-49ee-aa62-512d5c2fc2a1","1c1fd5ae-cd03-4853-a526-22ca33aa50b6","309dae0d-b9b0-4b35-abd7-4e1cf52ae5e3","7e98c335-e65a-4894-8342-e1e2d8876aeb","894ce1c2-ec18-4909-a299-e16b46df15c7","13623a83-4e31-404c-abaa-d98fbdbdc8ba","0ce6a378-f199-453b-8db6-1fb437d49e24","16c34db4-dfd6-4ca3-a742-31ad9911b69b","2b3b6077-3b98-468c-af8d-812b21b022f4","25b4b534-59e0-4446-8692-fdcfcb394ddf","1ca1fc0e-8cf0-4a13-b2af-d2406aa45304","f218c69c-2bbb-4fbe-93a1-a7456a91883f","5a6c0868-c31d-40b8-8f5a-93907159967b","cb543031-36b7-4f17-9574-6d91b5e982ba","bf6d756f-e19a-4c00-9b00-c65f9e2304cc","3c54cf0d-93ea-4f8e-b012-39bafcd94410","2792704a-2bfa-4e39-a5ea-11dd4b9d0386"],"propsByKey":{"6df5a7a5-e9cd-4029-8393-bcc985192c68":{"name":"Ufo","sourceUrl":null,"frameSize":{"x":75,"y":52},"frameCount":1,"looping":true,"frameDelay":12,"version":"yesKnCJFMjvNgsusd797HbmqFXNZgKp3","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":52},"rootRelativePath":"assets/6df5a7a5-e9cd-4029-8393-bcc985192c68.png"},"ba15ac53-d130-4bba-987d-0cb0b499c200":{"name":"animation","sourceUrl":null,"frameSize":{"x":100,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"RjXQDt0EkdSTljcVPGfPieBtXI7VZLqJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":51},"rootRelativePath":"assets/ba15ac53-d130-4bba-987d-0cb0b499c200.png"},"774dd834-7289-49ee-aa62-512d5c2fc2a1":{"name":"bullet","sourceUrl":null,"frameSize":{"x":10,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"rvMrrOw0.yfzR80UDIhur2OgslEzbn9i","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":28},"rootRelativePath":"assets/774dd834-7289-49ee-aa62-512d5c2fc2a1.png"},"1c1fd5ae-cd03-4853-a526-22ca33aa50b6":{"name":"bullet2","sourceUrl":null,"frameSize":{"x":10,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"Y3MDDphASinK_vaqHZ1NLv_PkhDs3WiT","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":28},"rootRelativePath":"assets/1c1fd5ae-cd03-4853-a526-22ca33aa50b6.png"},"309dae0d-b9b0-4b35-abd7-4e1cf52ae5e3":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":200,"y":133},"frameCount":1,"looping":true,"frameDelay":12,"version":"YsoYmW0.cpSUXQ1o.ce5KtzFh1DaiRrg","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":133},"rootRelativePath":"assets/309dae0d-b9b0-4b35-abd7-4e1cf52ae5e3.png"},"7e98c335-e65a-4894-8342-e1e2d8876aeb":{"name":"animation_2","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"894ce1c2-ec18-4909-a299-e16b46df15c7":{"name":"animations","sourceUrl":null,"frameSize":{"x":399,"y":378},"frameCount":1,"looping":true,"frameDelay":12,"version":"7JlmcU67hqP9uC9HXhboi4y6VS6wxWw0","loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":378},"rootRelativePath":"assets/894ce1c2-ec18-4909-a299-e16b46df15c7.png"},"13623a83-4e31-404c-abaa-d98fbdbdc8ba":{"name":"burst10","sourceUrl":null,"frameSize":{"x":390,"y":420},"frameCount":1,"looping":true,"frameDelay":12,"version":"S23mf6Myp0VCPcCS2ZUTxpwJPOpooCSL","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":420},"rootRelativePath":"assets/13623a83-4e31-404c-abaa-d98fbdbdc8ba.png"},"0ce6a378-f199-453b-8db6-1fb437d49e24":{"name":"Ufo11","sourceUrl":null,"frameSize":{"x":376,"y":372},"frameCount":1,"looping":true,"frameDelay":12,"version":"dU5JQrVVqlUiEI4.C6FAWI2_W98SidU0","loadedFromSource":true,"saved":true,"sourceSize":{"x":376,"y":372},"rootRelativePath":"assets/0ce6a378-f199-453b-8db6-1fb437d49e24.png"},"16c34db4-dfd6-4ca3-a742-31ad9911b69b":{"name":"battery","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"0Ghj5ZhTvs4GOONOwZL.A92Svb22frla","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/16c34db4-dfd6-4ca3-a742-31ad9911b69b.png"},"2b3b6077-3b98-468c-af8d-812b21b022f4":{"name":"battery1","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"Sb3Em3ienGAzCaK3mkcSyY8rOnEyNle.","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/2b3b6077-3b98-468c-af8d-812b21b022f4.png"},"25b4b534-59e0-4446-8692-fdcfcb394ddf":{"name":"battery2","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"kHwQGfUTs9ZqJM3oSQb3Vu.CNuJZstVU","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/25b4b534-59e0-4446-8692-fdcfcb394ddf.png"},"1ca1fc0e-8cf0-4a13-b2af-d2406aa45304":{"name":"battery3","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"S3FG01WCH3pEmsqwVFXhX1EnuaRaHtiT","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/1ca1fc0e-8cf0-4a13-b2af-d2406aa45304.png"},"f218c69c-2bbb-4fbe-93a1-a7456a91883f":{"name":"battery4","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"WHZEs46bdwefhniYu.ncUkLdCIn.3qA3","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/f218c69c-2bbb-4fbe-93a1-a7456a91883f.png"},"5a6c0868-c31d-40b8-8f5a-93907159967b":{"name":"battery5","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"EiJQpDbsU.ssU7A7cc.pe0ni6mxT4VP1","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/5a6c0868-c31d-40b8-8f5a-93907159967b.png"},"cb543031-36b7-4f17-9574-6d91b5e982ba":{"name":"space_","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"CS2j7uPaN1.j0jYkBC5sKaxPS.L746wc","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/cb543031-36b7-4f17-9574-6d91b5e982ba.png"},"bf6d756f-e19a-4c00-9b00-c65f9e2304cc":{"name":"space_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Nfe6ZoxsnvHPx2_IeNChMsmHVEKpBMtx","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/bf6d756f-e19a-4c00-9b00-c65f9e2304cc.png"},"3c54cf0d-93ea-4f8e-b012-39bafcd94410":{"name":"Ufo0","sourceUrl":null,"frameSize":{"x":75,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"jZ7n0o68Bb.NocfDC38re.uQrMhlYfR4","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":50},"rootRelativePath":"assets/3c54cf0d-93ea-4f8e-b012-39bafcd94410.png"},"2792704a-2bfa-4e39-a5ea-11dd4b9d0386":{"name":"Reset","sourceUrl":null,"frameSize":{"x":100,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"dr81AAlF_OumBvn1rcW4Wi3L9SkI1166","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":50},"rootRelativePath":"assets/2792704a-2bfa-4e39-a5ea-11dd4b9d0386.png"}}};
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

var score = 0;
var delay = 200;
var delay1 = 200;
var delay2 = 200;
var bulletCount = 0;
var enemybulletcount = 0;
var enemy1bulletcount = 0;
var enemy2bulletcount = 0;
var scene = createSprite(200, 200, 400, 400);
scene.setAnimation("space_1");
var enemybullet1 = createSprite(-200, 200);
enemybullet1.setAnimation("bullet2");
var enemybullet2 = createSprite(-100, 100);
enemybullet2.setAnimation("bullet2");
var enemybullet3 = createSprite(-100, -100);
enemybullet3.setAnimation("bullet2");
var enemybullet4 = createSprite(-100, -100);
enemybullet4.setAnimation("bullet2");
var enemybullet5 = createSprite(-100, -100);
enemybullet5.setAnimation("bullet2");
var enemybullet11 = createSprite(-200, 200);
enemybullet11.setAnimation("bullet2");
var enemybullet21 = createSprite(-100, 100);
enemybullet21.setAnimation("bullet2");
var enemybullet31 = createSprite(-100, -100);
enemybullet31.setAnimation("bullet2");
var enemybullet41 = createSprite(-100, -100);
enemybullet41.setAnimation("bullet2");
var enemybullet51 = createSprite(-100, -100);
enemybullet51.setAnimation("bullet2");
var enemybullet12 = createSprite(-200, 200);
enemybullet12.setAnimation("bullet2");
var enemybullet22 = createSprite(-100, 100);
enemybullet22.setAnimation("bullet2");
var enemybullet32 = createSprite(-100, -100);
enemybullet32.setAnimation("bullet2");
var enemybullet42 = createSprite(-100, -100);
enemybullet42.setAnimation("bullet2");
var enemybullet52 = createSprite(-100, -100);
enemybullet52.setAnimation("bullet2");
var shooter = createSprite(200, 320, 100, 50);
shooter.setAnimation("Ufo");
var enemy1 = createSprite(100, 50);
enemy1.setAnimation("animation");
var enemy2 = createSprite(300, 50);
enemy2.setAnimation("animation");
var enemy3 = createSprite(200, 130);
enemy3.setAnimation("animations");
var bullet1 = createSprite(-100 -100);
bullet1.setAnimation("bullet");
var bullet2 = createSprite(-100, -100);
bullet2.setAnimation("bullet");
var bullet3 = createSprite(-100, -100);
bullet3.setAnimation("bullet");
var bullet4 = createSprite(-100, -100);
bullet4.setAnimation("bullet");
var bullet5 = createSprite(-100, -100);
bullet5.setAnimation("bullet");
var divider = createSprite(200, 50, 5, 100);
divider.shapeColor="#0f042d";
var divider1 = createSprite(200, 200, 100, 5);
divider1.shapeColor="#0f042d";
var bar = createSprite( 60, 20);
bar.setAnimation("battery");
var bar1 = createSprite( -60, 20);
bar1.setAnimation("battery1");
var bar2 = createSprite( -60, 20);
bar2.setAnimation("battery2");
var bar3 = createSprite( -60, 20);
bar3.setAnimation("battery3");
var bar4 = createSprite( -60, 20);
bar4.setAnimation("battery4");
var bar5 = createSprite( -60, 20);
bar5.setAnimation("battery5");
var healthbar1 = 5;
enemy2.rotation=90;
enemy1.rotation=90;
enemy3.rotation=90;
enemy1.scale=0.9;
enemy2.scale=0.9;
shooter.scale=1;
enemy3.scale = 0.285;
enemy1.setCollider("circle", 0, 0, 30);
enemy2.setCollider("circle", 0, 0, 30);
enemy3.velocityY=4;
shooter.setCollider("circle", 0, 0, 25);

function draw() {
createEdgeSprites();
playermovement();
bullets();
bounceOff();
checkcollider();
resetenemy();
drawSprites();
dividers();
score1();
enemybullets(); 
enemybulletcount1();
enemybulletcount2 ();
playerhealth();
resetenemybullet();
resetbullet();
gameover(); 
}
function bounceOff() {
shooter.bounceOff(edges);
enemy1.bounceOff(topEdge);
enemy1.bounceOff(rightEdge);
enemy1.bounceOff(leftEdge);
enemy2.bounceOff(topEdge);
enemy2.bounceOff(rightEdge);
enemy2.bounceOff(leftEdge);
enemy1.bounceOff(divider);
enemy2.bounceOff(divider);
enemy3.bounceOff(divider1);
enemy3.bounceOff(edges);
}


function bullets() {
  if (keyWentDown("space") || keyWentDown("ENTER")) {
    bulletCount = bulletCount + 1;
    if (bulletCount == 1) {
      bullet1.y = shooter.y - 40;
      bullet1.x = shooter.x;
      bullet1.velocityY = -15;
    }
    if (bulletCount == 2) {
      bullet2.y = shooter.y - 40;
      bullet2.x = shooter.x;
      bullet2.velocityY = -15;
    }
    if (bulletCount == 3) {
      bullet3.y = shooter.y - 40;
      bullet3.x = shooter.x;
      bullet3.velocityY = -15;
    }
    if (bulletCount == 4) {
      bullet4.y = shooter.y - 40;
      bullet4.x = shooter.x;
      bullet4.velocityY = -15;
    }
    if (bulletCount == 5) {
      bullet5.y = shooter.y - 40;
      bullet5.x = shooter.x;
      bullet5.velocityY = -15;
      bulletCount = 0;
    }

}

}
function playermovement() {
  if (keyDown("left")) {
    shooter.x = shooter.x-5;
  }
  if (keyDown("right")) {
    shooter.x = shooter.x+5;
  }
}
function checkcollider() {
  if (bullet1.isTouching(enemy1)) {
    bullets();
    enemy1.setAnimation("animation_4");
    score=score+1;
    enemy1.velocityX = 0;
    delay = 0;
    healthbar1=healthbar1-1;
  }
   if (bullet2.isTouching(enemy1)) {
    bullets();
    enemy1.setAnimation("animation_4");
     score=score+1;
    delay = 0;
       enemy1.velocityX = 0;
       healthbar1=healthbar1-1;
  }
   if (bullet3.isTouching(enemy1)) {
    bullets();
    enemy1.setAnimation("animation_4");
     score=score+1;
    delay = 0;
       enemy1.velocityX = 0;
       healthbar1=healthbar1-1;
  }
   if (bullet4.isTouching(enemy1)) {
    bullets();
    enemy1.setAnimation("animation_4");
     score=score+1;
    delay = 0;
       enemy1.velocityX = 0;
       healthbar1=healthbar1-1;
  }
   if (bullet5.isTouching(enemy1)) {
    bullets();
    enemy1.setAnimation("animation_4");
     score=score+1;
    delay = 0;
    healthbar1=healthbar1-1;
    
       enemy1.velocityX = 0;
  }
   if (bullet1.isTouching(enemy2)) {
    bullets();
    enemy2.setAnimation("animation_4");
     score=score+1;
    delay1 = 0;
       enemy2.velocityX = 0;
  }
   if (bullet2.isTouching(enemy2)) {
    bullets();
    enemy2.setAnimation("animation_4");
     score=score+1;
    delay1 = 0;
    enemy2.velocityX = 0;
  }
   if (bullet3.isTouching(enemy2)) {
    bullets();
    enemy2.setAnimation("animation_4");
     score=score+1;
    delay1 = 0;
    enemy2.velocityX = 0;
  }
   if (bullet4.isTouching(enemy2)) {
    bullets();
    enemy2.setAnimation("animation_4");
     score=score+1;
    delay1 = 0;
    enemy2.velocityX = 0;
  }
   if (bullet5.isTouching(enemy2)) {
    bullets();
    enemy2.setAnimation("animation_4");
     score=score+1;
    delay1 = 0;
    enemy2.velocityX = 0;
  }
  if (bullet1.isTouching(enemy3)) {
    bullets();
    enemy3.setAnimation("burst10");
     score=score+1;
    delay2 = 0;
    
  }
  if (bullet2.isTouching(enemy3)) {
    bullets();
    enemy3.setAnimation("burst10");
     score=score+1;
    delay2 = 0;
   
  }
  if (bullet3.isTouching(enemy3)) {
    bullets();
    enemy3.setAnimation("burst10");
     score=score+1;
    delay2 = 0;
    
  }if (bullet4.isTouching(enemy3)) {
    bullets();
    enemy3.setAnimation("burst10");
     score=score+1;
    delay2 = 0;
    
  }
  if (bullet5.isTouching(enemy3)) {
    bullets();
    enemy3.setAnimation("burst10");
     score=score+1;
    delay2 = 0;
   
  }
  delay = delay+15;
  delay1 = delay1+15;
  delay2 = delay2+15;
}

function dividers() {
if (divider.visible === false) {
    divider.visible = false;
  } else {
    divider.visible = false;
  }
  
if (divider1.visible === false) {
    divider1.visible = false;
  } else {
    divider1.visible = false;
  }
}
function resetenemy() {
  if (delay<200) {
    enemy1.setAnimation("animation_4");
  } else {
      if (enemy1.velocityX==0) {
    enemy1.velocityX = -5;}
    enemy1.setAnimation("animation");
  
  }
  if (delay1<200) {
    enemy2.setAnimation("animation_4");
  } else {
    enemy2.setAnimation("animation");
    if (enemy2.velocityX==0) {
    enemy2.velocityX = 5;
  }     
  
  }
  if (delay2<200) {
    enemy3.setAnimation("burst10");
  } else {
    enemy3.setAnimation("animations");
  
  }
}    
  
function score1() {
textSize(20);
stroke("white");
text("Score: "+score, 150, 25);
textFont("Times new roman");
                                
}
function enemybullets() {
if (keyWentDown("space") || keyWentDown("ENTER")) {
    enemybulletcount = enemybulletcount + 1;
    if (enemybulletcount == 1) {
      enemybullet1.y = enemy3.y + 40;
      enemybullet1.x = enemy3.x;
      enemybullet1.velocityY = 7;
    }
    if (enemybulletcount == 2) {
      enemybullet2.y = enemy3.y + 40;
      enemybullet2.x = enemy3.x;
      enemybullet2.velocityY = 7;
    }
    if (enemybulletcount == 3) {
      enemybullet3.y = enemy3.y + 40;
      enemybullet3.x = enemy3.x;
      enemybullet3.velocityY = 7;
    }
    if (enemybulletcount == 4) {
      enemybullet4.y = enemy3.y + 40;
      enemybullet4.x = enemy3.x;
      enemybullet4.velocityY = 7;
    }
    if (enemybulletcount == 5) {
      enemybullet5.y = enemy3.y + 40;
      enemybullet5.x = enemy3.x;
     enemybullet5.velocityY = 7;
     
  enemybulletcount = 0;
    } 
    
}
  
}

function enemybulletcount1() {
if (keyWentDown("space") || keyWentDown("enter")) {
    enemy1bulletcount = enemy1bulletcount + 1;
    if (enemybulletcount == 1) {
      enemybullet11.y = enemy1.y + 40;
      enemybullet11.x = enemy1.x;
      enemybullet11.velocityY = 7;
    }
    if (enemybulletcount == 2) {
      enemybullet21.y = enemy1.y + 40;
      enemybullet21.x = enemy1.x;
      enemybullet21.velocityY = 7;
    }
    if (enemybulletcount == 3) {
      enemybullet31.y = enemy1.y + 40;
      enemybullet31.x = enemy1.x;
      enemybullet31.velocityY = 7;
    }
    if (enemybulletcount == 4) {
      enemybullet41.y = enemy1.y + 40;
      enemybullet41.x = enemy1.x;
      enemybullet41.velocityY = 7;
    }
    if (enemybulletcount == 5) {
      enemybullet51.y = enemy1.y + 40;
      enemybullet51.x = enemy1.x;
     enemybullet51.velocityY = 5;
     
  enemy1bulletcount = 0;
    } 
    
}  
}

function enemybulletcount2() {
if (keyDown("space") || keyWentDown("ENTER")) {
    enemy1bulletcount = enemy1bulletcount + 1;
    if (enemybulletcount == 1) {
      enemybullet12.y = enemy2.y + 40;
      enemybullet12.x = enemy2.x;
      enemybullet12.velocityY = 5;
    }
    if (enemybulletcount == 2) {
      enemybullet22.y = enemy2.y + 40;
      enemybullet22.x = enemy2.x;
      enemybullet22.velocityY = 5;
    }
    if (enemybulletcount == 3) {
      enemybullet32.y = enemy2.y + 40;
      enemybullet32.x = enemy2.x;
      enemybullet32.velocityY = 5;
    }
    if (enemybulletcount == 4) {
      enemybullet42.y = enemy2.y + 40;
      enemybullet42.x = enemy2.x;
      enemybullet42.velocityY = 5;
    }
    if (enemybulletcount == 5) {
      enemybullet52.y = enemy2.y + 40;
      enemybullet52.x = enemy2.x;
      enemybullet52.velocityY = 5;
     
  enemy2bulletcount = 0;
    } 
}    
}

function resetenemybullet() {
if (enemybullet1.isTouching(shooter)) {
enemybullet1.x=randomNumber(-400, -450);
  }
  if (enemybullet2.isTouching(shooter)) {
enemybullet2.x=randomNumber(-400, -450);
  }
  if (enemybullet3.isTouching(shooter)) {
enemybullet3.x=randomNumber(-400, -450);
  }
  if (enemybullet4.isTouching(shooter)) {
enemybullet4.x=randomNumber(-400, -450);
  }
  if (enemybullet5.isTouching(shooter)) {
enemybullet5.x=randomNumber(-400, -450);
  }
  if (enemybullet11.isTouching(shooter)) {
enemybullet11.x=randomNumber(-400, -450);
  }
  if (enemybullet21.isTouching(shooter)) {
enemybullet21.x=randomNumber(-400, -450);
  }
  if (enemybullet31.isTouching(shooter)) {
enemybullet31.x=randomNumber(-400, -450);
  }
  if (enemybullet41.isTouching(shooter)) {
enemybullet41.x=randomNumber(-400, -450);
  }
  if (enemybullet51.isTouching(shooter)) {
enemybullet51.x=randomNumber(-400, -450);
  } 
  if (enemybullet12.isTouching(shooter)) {
enemybullet12.x=randomNumber(-400, -450);
  } 
  if (enemybullet22.isTouching(shooter)) {
enemybullet22.x=randomNumber(-400, -450);
  } 
  if (enemybullet32.isTouching(shooter)) {
enemybullet32.x=randomNumber(-400, -450);
  } 
  if (enemybullet42.isTouching(shooter)) {
enemybullet42.x=randomNumber(-400, -450);
  } 
  if (enemybullet52.isTouching(shooter)) {
enemybullet52.x=randomNumber(-400, -450);
  } 
    
    
}

function resetbullet() {
if (bullet1.isTouching(enemy1)) {
bullet1.x=randomNumber(-400, -450);
  }
  if (bullet2.isTouching(enemy1)) {
bullet2.x=randomNumber(-400, -450);
  }
  if (bullet3.isTouching(enemy1)) {
bullet3.x=randomNumber(-400, -450);
  }
  if (bullet4.isTouching(enemy1)) {
bullet4.x=randomNumber(-400, -450);
  }
  if (bullet5.isTouching(enemy1)) {
bullet5.x=randomNumber(-400, -450);
  }
  if (bullet1.isTouching(enemy2)) {
bullet1.x=randomNumber(-400, -450);
  }
  if (bullet2.isTouching(enemy2)) {
bullet2.x=randomNumber(-400, -450);
  }
  if (bullet3.isTouching(enemy2)) {
bullet3.x=randomNumber(-400, -450);
  }
  if (bullet4.isTouching(enemy2)) {
bullet4.x=randomNumber(-400, -450);
  }
  if (bullet5.isTouching(enemy2)) {
bullet5.x=randomNumber(-400, -450);
  }
  if (bullet1.isTouching(enemy3)) {
bullet1.x=randomNumber(-400, -450);
  }
  if (bullet2.isTouching(enemy3)) {
bullet2.x=randomNumber(-400, -450);
  }
  if (bullet3.isTouching(enemy3)) {
bullet3.x=randomNumber(-400, -450);
  }
  if (bullet4.isTouching(enemy3)) {
bullet4.x=randomNumber(-400, -450);
  }
  if (bullet5.isTouching(enemy3)) {
bullet5.x=randomNumber(-400, -450);
  }
        
}


function playerhealth() {
  
if (enemybullet1.isTouching(shooter) || enemybullet2.isTouching(shooter) || enemybullet3.isTouching(shooter) || enemybullet4.isTouching(shooter) || enemybullet5.isTouching(shooter)) {
healthbar1=healthbar1-1;
  }
if (enemybullet11.isTouching(shooter) || enemybullet21.isTouching(shooter) || enemybullet31.isTouching(shooter) || enemybullet41.isTouching(shooter) || enemybullet51.isTouching(shooter)) {
healthbar1=healthbar1-1;
  }
if (enemybullet12.isTouching(shooter) || enemybullet22.isTouching(shooter) || enemybullet32.isTouching(shooter) || enemybullet42.isTouching(shooter) || enemybullet52.isTouching(shooter)) {
healthbar1=healthbar1-1;
  }
if (healthbar1 == 4) {
bar1.x=60;
bar1.y=20;       
  }
if (healthbar1 == 3) {
bar2.x=60;
bar2.y=20;       
  }   
if (healthbar1 == 2) {
bar3.x=60;
bar3.y=20;       
  }
  if (healthbar1 == 1) {
bar4.x=60;
bar4.y=20;       
  }
  if (healthbar1 == 0) {
bar5.x=60;
bar5.y=20;       
  }
    
}
function gameover() {

if (healthbar1<=0) {
enemy1.velocityX=0;
enemy2.velocityX=0;
enemy3.velocityY=0;
shooter.x=200;
shooter.y=315;
textSize(50);
textFont("Georgia");
stroke("white");
text("Game Over", 70, 200);
bulletCount=0;
bulletCount=bulletCount-1;
enemybulletcount=0;
enemybulletcount=enemybulletcount-1;
enemy1bulletcount=0;
enemy1bulletcount=enemy1bulletcount-1;
enemy2bulletcount=0;
enemy2bulletcount=enemy2bulletcount-1;
  }
    
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

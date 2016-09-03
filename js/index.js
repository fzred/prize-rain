/*
 Crafty.init(window.innerWidth, window.innerHeight, document.getElementById('game'))

 Crafty.e('Floor, 2D, Canvas, Color')
 .attr({ x: 0, y: 700, w: 250, h: 10 })
 .color('green');

 Crafty.e('2D, Canvas, Image, Twoway, Gravity, Mouse')
 .attr({ x: 0, y: 0, w: 100, h: 100, z: 22 })
 .image('img/phaser.png')
 .twoway(200)
 .gravity('Floor')
 .bind('Click', function () {
 console.log('Click', Date.now())
 })


 const square = Crafty.e('2D, Canvas, Color')
 .attr({ x: 200, y: 200, w: 100, h: 100, alpha: 0.1 })
 .color('red')
 .origin('center')
 .bind('EnterFrame', function () {
 this.rotation += 1
 })
 .flip("Y")

 Crafty.e('2D, DOM, Fourway, Text, Gravity')
 .attr({ x: 200, y: 400, w: 200, h: 50 })
 .text('Hello jane')
 .textColor('#ff00ff')
 .fourway(500)
 .gravity('Floor')

 Crafty.e('2D, DOM, Image')
 .attr({ w: 100, h: 100 })


 */

var assetsObj = {
  "sprites": {
    "img/phaser.png": {
      tile: 382,
      tileh: 331,
      map: {
        phaser: [0, 0]
      }
    }
  }
};
var scale = window.innerWidth / 375
window.onload = function () {
  Crafty.init(scale * 375, scale * 400, document.getElementById('game'));

  Crafty.load(assetsObj, go);
};
function go() {

  Crafty.e("2D, Canvas, Image")
    .attr({ w: Crafty.viewport.width, h: Crafty.viewport.height })
    .image("img/phaser.png", "repeat");


  var walker = Crafty.e('2D, Canvas, phaser, SpriteAnimation')
    .attr({ x: 100, y: 100, w: 100, h: 100 })
    .reel("walking", 500, [
      [0, 0]
    ])
    .animate("walking", -1);

  Crafty.viewport.scale(scale)

}

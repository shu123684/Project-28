class Mango{
    constructor(x, y, r) {
      var options = {
          isStatic: true,
          'restitution':0,
          'friction':1,
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      this.image = loadImage("mango.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.position;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50)
        pop();
    }
  };
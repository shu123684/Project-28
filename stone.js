class Stone{
    constructor(x, y, r) {
      var options = {
          isStatic: false,
          'restitution':0.8,
          'friction':100,
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.position;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r)
        pop();
    }
  };
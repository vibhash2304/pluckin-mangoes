class mango
{
    constructor(x,y,r)
    {
        var options =
        {
            isStatic:true,
            restitution:0,
            friction:1
        }
    this.x=x;
    this.y=y;
    this.r=r;
    this.image = loadImage("sprites/mango.png");
    this.body=Bodies.circle(this.x,this.y,this.r,options);
    World.add(world,this.body);
    }

    display()
    {
        var mangoPos =this.body.position;
        push();
        //translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,mangoPos.x,mangoPos.y,this.r);
        pop();
    }
}

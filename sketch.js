
let x = 0.01;
let y = 0;
let z = 0;

let a = 10;
let b = 28;
let c = 8.0/3.0;

let points = new Array();

function setup(){
createCanvas(900,700,WEBGL);
colorMode(HSB);

}

function draw(){
background(0);

scale(1.75);
stroke("white");

let dt = 0.01;

let dx = (a * (y - x)) * dt;
let dy = (x * (b - z) - y) * dt;
let dz = (x * y - c * z) * dt;

x = x + dx;
y = y + dy;
z = z + dz;

points.push(new p5.Vector(x,y,z));

rotateX(x/40);
rotateY(y/40);
rotateZ(z/40);

scale(5);
noFill();

let hu = 0;
let hu2 = 255;
let hu3 = 0;

beginShape();

for( let v of points ){
    stroke(hu,255,255);
    scale(1);
    vertex(v.x,v.y,v.z);
    ellipse(v.x,v.y,0.5)
    rect(v.x,v.y,0.5,0.5);
    

    hu += 1;
    if(hu > 255){
      hu = 0;
    }
}
  endShape();

 
}



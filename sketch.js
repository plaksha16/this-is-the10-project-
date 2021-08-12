var weight =[30,35,45,38,40]
var sum =0
console.log(weight.length)

console.log(weight[0])
for(var i=0;i<weight.length;i++){
  console.log(weight[i])
sum=sum+weight[i]

}
console.log(sum/weight.length)
function setup() 
{
  createCanvas(400,400);
}

function draw() 
{
background(51);

}


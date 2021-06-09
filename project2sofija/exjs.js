var can= document.getElementById("canvas");
// to access the elements inside of the canvas
var ctx = can.getContext("2d");
var brushColor= "black";
var brushWidth= 2;
var usingBrush=false;
 var img1 = document.getElementById("slika1");
  var img2 = document.getElementById("slika2");
   var img3 = document.getElementById("slika3");
   var blank = document.getElementById("slika4");

function BeginDrawing(){
usingBrush=true;
}

function EndDrawing(){
usingBrush=false;
ctx.beginPath();
}

function CurrentlyDrawing(event){
if (usingBrush==true) {
ctx.lineWidth=brushWidth;
ctx.strokeStyle=brushColor;
// we want the line to follow out mouse and that is why we need the event to be passed
ctx.lineTo(event.clientX,event.clientY);
ctx.stroke();}
else {return;}
}

function ChangeColor(color){
brushColor=color;
}

function ChangeWidth(n){
brushWidth= n;
}

function Erase() {
brushColor= "white";
brushWidth= 10;	
ctx.lineCap = "square"
BeginDrawing();
}

function Back(num){
if (num==1) {
 ctx.drawImage(blank,0, 0);	
 ctx.drawImage(img1, 10, 10);
}
else if (num==2){
	ctx.drawImage(blank,0, 0);	
  ctx.drawImage(img2, 10, 10);

}
else{
	ctx.drawImage(blank,0, 0);	
  ctx.drawImage(img3, 10, 10);

}
}

function DragOver(ev) {
	// the elements can't ususaly be dropped into other elements so we are perventing the usual dealing with the element
  ev.preventDefault();
}

function StartDrag(ev) {

  ev.dataTransfer.setData("text", ev.target.id);
  // we get the id of the picture aka draggable element
}

function Drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var slika=document.getElementById(data);
  //slika.style.height="10px";
  // in data we have the id of the picture
  //ev.target.appendChild(document.getElementById(data));
  //ctx.drawImage(slika, 10, 10, 80, 80);
  ctx.drawImage(slika, ev.clientX, ev.clientY , 80, 80);
  // distance from the top and left// size of picture
}

function Restart(){
	ctx.drawImage(blank,0,0);
}


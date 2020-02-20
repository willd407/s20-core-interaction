var palmtree = document.getElementById("trunk");

console.log (palmtree);

//palmtree.style.backgroundColor = "pink";

var trunkHeight = 1;

setInterval (function(){

palmtree.style.borderBottom = "solid "+ trunkHeight + "rem rgb(112,93,70)";

trunkHeight = trunkHeight + 1;

}, 1000);
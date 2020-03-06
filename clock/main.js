
// get html elements
var seconds = document.getElementById('eleven')
var minutes = document.getElementById('nine')
var hours = document.getElementById('seven')

var secondsTenth = document.getElementById('ten')
var minutesTenth = document.getElementById('eight')
var hoursTenth = document.getElementById('six')

// Hundr
function timeUnit(output, seconds){

 

  if(output <10){
      seconds.innerHTML = output;
  }else{
      seconds.innerHTML = output;
  }

  if(output >=10 && output <=20) {
  	seconds.innerHTML = output - 10;
  }

  if(output >=20 && output <=30) {
  	seconds.innerHTML = output - 20;
  }

   if(output >=30 && output <=40) {
  	seconds.innerHTML = output - 30;
  }

 if(output >=40 && output <=50) {
  	seconds.innerHTML = output - 40;
  }

  if(output >=50 && output <=60) {
  	seconds.innerHTML = output - 50;
  }
  

}



function Clock(){

  var currentDate = new Date;

  timeUnit(currentDate.getHours(), hours)
  timeUnit(currentDate.getMinutes(), minutes)
  timeUnit(currentDate.getSeconds(), seconds)

}

// mouse inactive
// idle mouse

// Tenth of Time

function timeUnitTwo(outputTwo, secondsTenth){

 

  if(outputTwo <10){
    secondsTenth.innerHTML = 0;

  }else{
    secondsTenth.innerHTML = outputTwo;
  }
  
  if(outputTwo >=10 && outputTwo <=20) {
    secondsTenth.innerHTML = 1;
  }

  if(outputTwo >=20 && outputTwo <=30) {
    secondsTenth.innerHTML = 2;
  }

   if(outputTwo >=30 && outputTwo <=40) {
    secondsTenth.innerHTML = 3;
  }

 if(outputTwo >=40 && outputTwo <=50) {
    secondsTenth.innerHTML = 4;
  }

  if(outputTwo >=50 && outputTwo <=60) {
    secondsTenth.innerHTML = 5;

  }
  
}


function ClockTwo(){

  var currentDate = new Date;

  timeUnitTwo(currentDate.getHours(), hoursTenth)
  timeUnitTwo(currentDate.getMinutes(), minutesTenth)
  timeUnitTwo(currentDate.getSeconds(), secondsTenth)

}

// timer 

//var timeoutInMiliseconds = 60000;
//var timeoutId; 
 
//function startTimer() { 
    // window.setTimeout returns an Id that can be used to start and stop a timer
    //timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
//}
 
//function doInactive() {
    //document.getElementById('zero')
//}

setInterval(Clock, 1000)
setInterval(ClockTwo, 1000)

// random number hover 

// get html elements
document.getElementById('zero').onmouseover = function() {mouseOver()};
document.getElementById('zero').onmouseout = function() {mouseOut()};
document.getElementById('one').onmouseover = function() {mouseOverOne()};
document.getElementById('one').onmouseout = function() {mouseOutOne()};
document.getElementById('two').onmouseover = function() {mouseOverTwo()};
document.getElementById('two').onmouseout = function() {mouseOutTwo()};
document.getElementById('three').onmouseover = function() {mouseOverThree()};
document.getElementById('three').onmouseout = function() {mouseOutThree()};
document.getElementById('four').onmouseover = function() {mouseOverFour()};
document.getElementById('four').onmouseout = function() {mouseOutFour()};
document.getElementById('five').onmouseover = function() {mouseOverFive()};
document.getElementById('five').onmouseout = function() {mouseOutFive()};

document.getElementById('twelve').onmouseover = function() {mouseOverTwelve()};
document.getElementById('twelve').onmouseout = function() {mouseOutTwelve()};
document.getElementById('thirteen').onmouseover = function() {mouseOverThirteen()};
document.getElementById('thirteen').onmouseout = function() {mouseOutThirteen()};
document.getElementById('fourteen').onmouseover = function() {mouseOverFourteen()};
document.getElementById('fourteen').onmouseout = function() {mouseOutFourteen()};
document.getElementById('fifteen').onmouseover = function() {mouseOverFifteen()};
document.getElementById('fifteen').onmouseout = function() {mouseOutFifteen()};
document.getElementById('sixteen').onmouseover = function() {mouseOverSixteen()};
document.getElementById('sixteen').onmouseout = function() {mouseOutSixteen()};
document.getElementById('seventeen').onmouseover = function() {mouseOverSeventeen()};
document.getElementById('seventeen').onmouseout = function() {mouseOutSeventeen()};
    
    function mouseOver(){
      document.getElementById('zero').innerHTML = Math.round(Math.random() * 9);
    }

    function mouseOut(){
      document.getElementById('zero').innerHTML = Math.round(Math.random() * 9);

    }


    function mouseOverOne(){
      document.getElementById('one').innerHTML = Math.round(Math.random() * 9);
    }

    function mouseOutOne(){
      document.getElementById('one').innerHTML = Math.round(Math.random() * 9);

    }

    function mouseOverTwo(){
      document.getElementById('two').innerHTML = Math.round(Math.random() * 9);
    }

    function mouseOutTwo(){
      document.getElementById('two').innerHTML = Math.round(Math.random() * 9);

    }

    function mouseOverThree(){
      document.getElementById('three').innerHTML = Math.round(Math.random() * 9);
    }

    function mouseOutThree(){
      document.getElementById('three').innerHTML = Math.round(Math.random() * 9);

    }

    function mouseOverFour(){
      document.getElementById('four').innerHTML = Math.round(Math.random() * 9);
    }

    function mouseOutFour(){
      document.getElementById('four').innerHTML = Math.round(Math.random() * 9);

    }

    function mouseOverFive(){
      document.getElementById('five').innerHTML = Math.round(Math.random() * 9);
    }

    function mouseOutFive(){
      document.getElementById('five').innerHTML = Math.round(Math.random() * 9);

    }

    //

    function mouseOverTwelve(){
      document.getElementById('twelve').innerHTML = Math.round(Math.random() * 9);
    }

    function mouseOutTwelve(){
      document.getElementById('twelve').innerHTML = Math.round(Math.random() * 9);

    }


    function mouseOverThirteen(){
      document.getElementById('thirteen').innerHTML = Math.round(Math.random() * 9);
    }

    function mouseOutThirteen(){
      document.getElementById('thirteen').innerHTML = Math.round(Math.random() * 9);

    }

    function mouseOverFourteen(){
      document.getElementById('fourteen').innerHTML = Math.round(Math.random() * 9);
    }

    function mouseOutFourteen(){
      document.getElementById('fourteen').innerHTML = Math.round(Math.random() * 9);

    }

    function mouseOverFifteen(){
      document.getElementById('fifteen').innerHTML = Math.round(Math.random() * 9);
    }

    function mouseOutFifteen(){
      document.getElementById('fifteen').innerHTML = Math.round(Math.random() * 9);

    }

    function mouseOverSixteen(){
      document.getElementById('sixteen').innerHTML = Math.round(Math.random() * 9);
    }

    function mouseOutSixteen(){
      document.getElementById('sixteen').innerHTML = Math.round(Math.random() * 9);

    }

    function mouseOverSeventeen(){
      document.getElementById('seventeen').innerHTML = Math.round(Math.random() * 9);
    }

    function mouseOutSeventeen(){
      document.getElementById('seventeen').innerHTML = Math.round(Math.random() * 9);

    }
    
  
  

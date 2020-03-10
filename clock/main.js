
// get html elements
var seconds = document.getElementById('eleven')
var minutes = document.getElementById('nine')
var hours = document.getElementById('seven')

var secondsTenth = document.getElementById('ten')
var minutesTenth = document.getElementById('eight')
var hoursTenth = document.getElementById('six')

// js variables 
var counter = 0;
var firstRandomNumber = Math.round(Math.random()*9);
var secondRandomNumber = Math.round(Math.random()*9);
var thirdRandomNumber = Math.round(Math.random()*9);
var fourthRandomNumber = Math.round(Math.random()*9);


// Hundredth
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
  var hourNumbers = currentDate.getHours();
  var minuteNumbers = currentDate.getMinutes();
  
  if (counter < 30) {

    hourNumbers = firstRandomNumber;
    minuteNumbers = thirdRandomNumber;
  } 
  // do not need else; unless want two options
  timeUnit(hourNumbers, hours)
  timeUnit(minuteNumbers, minutes)
  timeUnit(currentDate.getSeconds(), seconds)

}

// mouse inactive/idle mouse
 
 onInactive(3000, function () {
    document.getElementById('zero').classList.add('fadeTwo');
    document.getElementById('one').classList.add('fadeFour');
    document.getElementById('two').classList.add('fade');
    document.getElementById('three').classList.add('fadeOne');
    document.getElementById('four').classList.add('fadeFive');
    document.getElementById('five').classList.add('fadeThree');

    document.getElementById('twelve').classList.add('fadeThree');
    document.getElementById('thirteen').classList.add('fade');
    document.getElementById('fourteen').classList.add('fadeOne');
    document.getElementById('fifteen').classList.add('fadeFive');
    document.getElementById('sixteen').classList.add('fadeTwo');
    document.getElementById('seventeen').classList.add('fadeFour');

    function counterFunction(){

      counter = counter + 1; 
      console.log(counter)

      document.onmousemove = document.mousedown = document.mouseup = document.onkeydown = document.onkeyup = document.focus = function () {
        if(counter === 31){
           clearInterval(timerID);
        }  
        location.reload();
        console.log('reload');
      }
    };
      
     
    
    timerID = setInterval(counterFunction, 1000)

   

});

function onInactive(ms, cb) {

    var wait = setTimeout(cb, ms);

    document.onmousemove = document.mousedown = document.mouseup = document.onkeydown = document.onkeyup = document.focus = function () {
        clearTimeout(wait);
        wait = setTimeout(cb, ms);

    };
}

// mouse active 


 function reset(){
    document.getElementById('zero').classList.remove('fadeTwo');
    document.getElementById('one').classList.remove('fadeFour');
    document.getElementById('two').classList.remove('fade');
    document.getElementById('three').classList.remove('fadeOne');
    document.getElementById('four').classList.remove('fadeFive');
    document.getElementById('five').classList.remove('fadeThree');

    document.getElementById('twelve').classList.remove('fadeThree');
    document.getElementById('thirteen').classList.remove('fade');
    document.getElementById('fourteen').classList.remove('fadeOne');
    document.getElementById('fifteen').classList.remove('fadeFive');
    document.getElementById('sixteen').classList.remove('fadeTwo');
    document.getElementById('seventeen').classList.remove('fadeFour');



    }

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
  var hoursNumbersTenth = currentDate.getHours();
  var minutesNumbersTenth = currentDate.getMinutes();

  if(counter < 30){

    hoursNumbersTenth = secondRandomNumber;
    minutesNumbersTenth = fourthRandomNumber;
    timeUnit(hoursNumbersTenth, hoursTenth)
    timeUnit(minutesNumbersTenth, minutesTenth)
  }else{
    timeUnitTwo(hoursNumbersTenth, hoursTenth)
    timeUnitTwo(minutesNumbersTenth, minutesTenth)

  }

  timeUnitTwo(currentDate.getSeconds(), secondsTenth)

}

// counter 

var minuteCounter = 0;
var hourCounter = 0;


 


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
    
  
  

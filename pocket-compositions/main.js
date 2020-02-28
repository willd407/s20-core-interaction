console.log("hello!");

var myRootDiv = document.getElementById("one");


for (var i = 0; i < 50; i++) {

    var r = Math.ceil(Math.random()*255); 
    var g = Math.round(Math.random()*255);
    var b = Math.floor(Math.random()*255);

    var myModule = `

        <div id="one" style="background-color: rgb(${r}, ${g}, ${b})";
        </div>

    `;

    myRootDiv.insertAdjacentHTML('beforeend', myModule)


}
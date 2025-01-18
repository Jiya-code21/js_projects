let valueDisplays=document.querySelectorAll(".num");

let interval=5000;

//This loops through each element in the valueDisplays collection.
valueDisplays.forEach((valueDisplays)=>{

let startvalue=0;
//Fetches the data-val attribute from the current .num element, converts it to an integer, and stores it in endvalue.

let endvalue=parseInt(valueDisplays.getAttribute("data-val"));


let duration=Math.floor(interval/endvalue);

let counter=setInterval(function(){
    startvalue+=1;

    valueDisplays.textContent=startvalue;
    //The counter effect should stop when it reaches the desired value.
    if(startvalue==endvalue){
        //Stops the setInterval timer once the counter reaches the endvalue.
        clearInterval(counter);
    }
},duration);
});
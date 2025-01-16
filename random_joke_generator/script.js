const jokecontainer=document.getElementById("joke");
const btn=document.getElementById("btn");

const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
//getjoke is being declared as an arrow function.
// Arrow functions are a simpler way to define functions in JavaScript..
//let getjoke = () => {}

let getjoke =() =>{
    fetch(url)
    //.then() is used to handle the Promise once the fetch operation is complete..
    //.json convert raw data to a javascript object so that we can easily use it..

    .then(data=>  data.json())
    .then(item =>{
        //Updating the Text on the Web Page:
        jokecontainer.textContent=`${item.joke}`;
    });
}
btn.addEventListener("click",getjoke);
getjoke();
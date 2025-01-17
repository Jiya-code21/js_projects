let searchbtn=document.getElementById("search-btn");

let  countryinp=document.getElementById("country-inp");

searchbtn.addEventListener("click",()=>{
    let countryname=countryinp.value;
    let finalurl=`https://restcountries.com/v3.1/name/${countryname}?fullText=true`;
    console.log(finalurl);

    fetch(finalurl)

    .then((response)=> {
        if (!response.ok) {
            throw new Error("Country not found");
        }
        return response.json();
    })
       
    .then((data)=>{
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(",")
    );
    document.getElementById("result").innerHTML=`
    <img src="${data[0].flags.svg}" class="flag-img">
    <h2>${data[0].name.common}</h2>
    <div class="wrapper">
     <div class="data-wrapper">
    <h4>Capital : </h4>
    <span>${data[0].capital[0]}</span>
    </div>
    </div>

         <div class="wrapper">
     <div class="data-wrapper">
    <h4>Continent: </h4>
    <span>${data[0].continents[0]}</span>
    </div>
    </div>


    <div class="wrapper">
     <div class="data-wrapper">
    <h4>Population: </h4>
    <span>${data[0].population}</span>
    </div>
    </div>


     <div class="wrapper">
     <div class="data-wrapper">
    <h4>Currency: </h4>
    <span>${data[0].currencies[Object.keys(data[0].currencies)].name}-${Object.keys(data[0].currencies)[0]}</span>
    </div>
    </div>

    
     <div class="wrapper">
     <div class="data-wrapper">
    <h4>Common Languages: </h4>
    <span>${
        Object.values(data[0].languages).toString().split(",").join(",")
    }</span>
    </div>
    </div>



    `;
    }).catch(()=>{
        if(countryname.length==0){
            result.innerHTML=`<h2>Tje input field cannot be empty</h2>`;
        }

        else{
            result.innerHTML=`<h2>Please enter a valid country name.</h2>`;
        }
    })
});


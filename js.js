const url="https://api.openweathermap.org/data/2.5/weather?units=metric";
const key="352ea726965f29c7e4632b307c6416c5";

place=document.querySelector("#place");
temp=document.querySelector("#temp");
humidity=document.querySelector("#humidity");
wind=document.querySelector("#wind");
img=document.querySelector(".change");

async function check(e){
    let response=await fetch(url+`&q=${e}`+`&appid=${key}`);
    console.log(response);  
    json_obj= await response.json();
    console.log(json_obj);

    if(json_obj.cod!=404){
        place.innerText= e.toUpperCase();
        temp.innerText=json_obj.main.temp+"° C";
        humidity.innerText=json_obj.main.humidity+"%";
        wind.innerText=json_obj.wind.speed+"km/h";

        if(json_obj.weather[0].main==="Clear") img.src="clear.png";
        else if(json_obj.weather[0].main==="Clouds") img.src="clouds.png";
        else if(json_obj.weather[0].main==="Rain") img.src="rain.png";
        else if(json_obj.weather[0].main==="Drizzle") img.src="drizzle.png";
        else if(json_obj.weather[0].main==="Humidity") img.src="humidity.png";
        else if(json_obj.weather[0].main==="Mist") img.src="mist.png";
        else if(json_obj.weather[0].main==="Snow") img.src="snow.png";
        else if(json_obj.weather[0].main==="Wind") img.src="wind.png";
    }

    else alert("Enter Right Location");
}

inp=document.querySelector("input");
btn=document.querySelector(".search");
btn.addEventListener("click", () => {
    val=inp.value;
    console.log(val);
    check(val);
})
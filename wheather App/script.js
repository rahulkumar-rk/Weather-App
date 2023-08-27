const apiKey = "c8d1d45b71cb852d223d7e4970a897ee";
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

      const searchBox=document.querySelector(".search input");
      const searchBtn=document.querySelector(".search button");
      const wethearIcon=document.querySelector(".wethear-icon");

        async function checkWeathear(city)
        {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".wethear").style.display="none";
            }
            else{
                var data=await response.json();
                document.querySelector(".card").style.marginTop = "4%";

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp )+ "°C";
document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

if(data.weather[0].main=="Clouds")
{
    wethearIcon.src="images/clouds.png";
}
else if(data.weather[0].main=="Clear")
{
    wethearIcon.src="images/clear.png"; 
}
else if(data.weather[0].main=="Rain")
{
    wethearIcon.src="images/rain.png"; 
}
else if(data.weather[0].main=="Drizzle")
{
    wethearIcon.src="images/drizzle.png"; 
}
else if(data.weather[0].main=="Mist")
{
    wethearIcon.src="images/mist.png"; 
}
document.querySelector(".wethear").style.display="block"; 
document.querySelector(".error").style.display="none"
}

            
        }
        searchBtn.addEventListener("click", ()=>{
            checkWeathear(searchBox.value);  
        })
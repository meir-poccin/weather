/*https://api.openweathermap.org/data/2.5/
weather?q=brooklyn&units=imperial
&APPID=19dd7ce9a1ef71da5a690e0ff39fb1e3*/


let weather = {
	'apiKey':'19dd7ce9a1ef71da5a690e0ff39fb1e3',
	fetchWeather: function(city){
	  fetch('https://api.openweathermap.org/data/2.5/weather?q='
	  	+city+
	  	'&units=imperial&APPID='+this.apiKey
	  	).then((response)=> response.json())
	     .then((data) => this.displayWeather(data) )
	},

	displayWeather: function(data){
      const {name} = data 
      const {icon, description} = data.weather[0]
      const {temp, humidity} = data.main
      const {speed} = data.wind 
      console.log(name,icon,description,
      	temp,humidity,speed)
      document.querySelector('.city').innerText='Weather in ' + name
//document.querySelector('.icon').src='https://api.openweathermap.org/img/wn/'+icon+'@2x.png'
      document.querySelector('.description').innerText=description
      document.querySelector('.temp').innerText=temp+'°  F' 
	  document.querySelector('.humidity').innerText='Humidity: '+humidity+'%' 
	 document.querySelector('.wind').innerText='Wind Speed: '+speed+' km/h'
	 
	},
	search : function (){
	this.fetchWeather(
	 document.querySelector('.search-bar').value)
	}
}

document.querySelector('.search button').
addEventListener('click', function(){
  weather.search()
} )
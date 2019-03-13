import React from "react";

const toQueryString = (obj) => {
  const parts = [];
  for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
          parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
      }
  }
  return parts.join('&');
}

export default class Weather extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      weather:null
    };
    this.pollWeather = this.pollWeather.bind(this)
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.pollWeather);
  }
  pollWeather(location) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    const params = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    };
    url += toQueryString(params);
    const apiKey = '96d0fcee4e618fcc99580249dceca31e';
    url += `&APPID=${apiKey}`;

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE){
        const data = JSON.parse(xmlhttp.responseText);
        this.setState({weather:data})
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }


  render(){

    let content = <div></div>

    if(this.state.weather){
      const weather = this.state.weather
      const temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div>
                  <p>{weather.name}</p>
                  <p>{temp.toFixed(1)} degrees</p>
                </div>;
    } else {
      content = <div className='loading'>loading weather...</div>;
    }
    console.log(this.state.weather)
    return(
      <div>
        <h1>Weather</h1>
        <div className='weather'>
          {content}
        </div>
      </div>
    )
  }
}

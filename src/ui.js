
class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.coord = document.getElementById('w-coord');
    this.sunrise = document.getElementById('w-sunrise');
    this.sunset = document.getElementById('w-sunset');
    this.temp = document.getElementById('w-temp');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.wind_speed = document.getElementById('w-wind-speed');
    this.wind_dir = document.getElementById('w-wind-dir');
    this.clouds = document.getElementById('w-clouds');
  }

  showRes(weather) {

    weather.weather.map((x) => {
      this.desc.textContent = x.description;
      this.icon.setAttribute('src', `http://openweathermap.org/img/w/${x.icon}.png`);
    })

    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.coord.textContent = `Long: ${weather.coord.lon} Lat: ${weather.coord.lat}`;
    this.sunrise.textContent = `Sunrise: ${weather.sys.sunrise} UTC`;
    this.sunset.textContent = `Sunset: ${weather.sys.sunset } UTC`;
    this.temp.textContent = `Temperature: ${weather.main.temp}k`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}hPa`;
    this.wind_speed.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
    this.wind_dir.textContent = `Wind Direction: ${weather.wind.deg}%`;
    this.clouds.textContent = `Cloudiness: ${weather.clouds.all}%`;
  }

  showAlert(msg, cN, err_f, err_h) {
    this.clearAlert();

    const div = document.createElement('div');
    div.className = cN;
    div.appendChild(document.createTextNode(msg));

    const err_foot = document.querySelector(`${err_f}`);
    const err_head = document.getElementById(`${err_h}`);

    err_head.insertBefore(div, err_foot);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }
}

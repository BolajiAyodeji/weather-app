
const ui = new UI;
const weather = new Weather('Lokoja', 'Nigeria');

document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
  weather.getWeather()
    .then(res => {
      ui.showRes(res);
    })
    .catch(err => {
      console.log(err);
    })
}

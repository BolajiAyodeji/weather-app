
const ui = new UI;
const weather = new Weather('Lokoja', 'Nigeria');

document.addEventListener('DOMContentLoaded', getWeather)

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  if(city === '' || country === '') {
    alert('Incomplete fields');
  } else {
    weather.changeLocation(city, country);

    getWeather();

    $('#locModal').modal('hide');
  }
});

function getWeather() {
  weather.getWeather()
    .then(res => {
      ui.showRes(res);
    })
    .catch(err => {
      console.log(err);
    })
}

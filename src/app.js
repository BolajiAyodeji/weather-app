
const ui = new UI;
const weather = new Weather('Lokoja', 'Nigeria');

document.addEventListener('DOMContentLoaded', getWeather)

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  if(city === '') {
    ui.showAlert('Enter city name', 'alert alert-danger', 'err_f', 'err_h');
  } else if(country === '') {
    ui.showAlert('Enter country name', 'alert alert-danger', 'err_f', 'err_h');
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
      ui.showAlert('something went wrong, check your connection and try again.', 'alert alert-danger', 'errr_f', 'errr_h');
    })
}

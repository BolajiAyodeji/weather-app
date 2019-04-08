
const storage = new Storage;
const weatherLoc = storage.getLocData();

const ui = new UI;
const weather = new Weather(weatherLoc.city, weatherLoc.country);

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

    storage.setLocData(city, country);

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
      if (err.message === 'Not Found') {
        ui.showAlert('Location not found, try another location', 'alert alert-danger', 'errr_f', 'errr_h');
        } else {
          ui.showAlert('Something went wrong, check your connection and try again.', 'alert alert-danger', 'errr_f', 'errr_h');
        }
    });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js').then(function () {
      console.log('Service Worker Registered')
    })
  })
}

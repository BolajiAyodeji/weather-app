
class Weather {
  constructor(city, country) {
    this.apiKey = '9a7339ff0be7ada3934d6a37ced14a6a';
    this.city = city;
    this.country = country;
  }

  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${this.apiKey}&q=${this.city},${this.country}.json`)

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}

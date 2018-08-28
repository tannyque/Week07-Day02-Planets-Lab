const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const InputView = require('./views/input_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();

  const inputView = new InputView();
  inputView.bindEvents();


});

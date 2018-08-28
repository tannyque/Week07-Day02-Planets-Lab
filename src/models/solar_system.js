const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe("InputView:click", (event) => {
    for (planet of this.planets) {
      if (planet.name === event.detail) {
        result = planet
      }
    }
    console.dir(result);
    PubSub.publish("SolarSystem:result", result);
  })
};

module.exports = SolarSystem;

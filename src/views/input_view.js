const PubSub = require('../helpers/pub_sub.js');

const InputView = function () {

}

  InputView.prototype.bindEvents = function () {
    const form = document.querySelectorAll('li.planet-menu-item');
    form.forEach((planet) => {
      planet.addEventListener('click', (event) => {
        const selectedPlanet = event.target.id;
        PubSub.publish("InputView:click", selectedPlanet);
            console.log(selectedPlanet);
      })
    })
  };

module.exports = InputView;

const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return startLocation = this.journeys.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return endLocation = this.journeys.map((journey) => {
    return journey.endLocation;
  });

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return type = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return movement = this.journeys.filter((journey) => {
    return journey.distance > minDistance
  })

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return distance = this.journeys.reduce((total, journey) => {
    return total + journey.distance
  }, 0);

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  
  let transportation = this.journeys.map((journey) => {
    return journey.transport
  })

  const uniqueTransport = transportation.filter((journey, index) => {
    return transportation.indexOf(journey) === index 
  });
  return uniqueTransport;

  

};


module.exports = Traveller;

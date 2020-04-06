//business logic for places objects 
function Place (location, landmarks, season, food) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.food = food;
}

var place1 = new Place("seattle", ["pikes place", "rock museum", "space needle"], "summer", "seafood");
var place2 = new Place("hungary", ["balaton", "old church", "downtown budapest"], "fall", "goulash");
console.log(place1);
console.log(place2);
console.log(place1.landmarks);
console.log(place2.landmarks);
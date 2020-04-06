//business logic for VacationList
function VacationList() {
  this.places = [];
  this.currentId = 0;

}

VacationList.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

VacationList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


//business logic for places objects 
function Place (location, landmarks, season, food) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.food = food;
}

/* var place1 = new Place("seattle", ["pikes place", "rock museum", "space needle"], "summer", "seafood");
var place2 = new Place("hungary", ["balaton", "old church", "downtown budapest"], "fall", "goulash");
console.log(place1);
console.log(place2);
console.log(place1.landmarks);
console.log(place2.landmarks);

var vacationList = new VacationList();
vacationList.addPlace(place1);
vacationList.addPlace(place2);
console.log(vacationList.places[0]); */

//UI logic
$(document).ready(function() {
  $("#vacationForm").submit(function(event) {
    event.preventDefault();
    var location = $("#location").val(); 
    var landmarks = $("#landmarks").val();
    var season = $("#season").val();
    var food = $("#food").val();    
    
    

  });
});
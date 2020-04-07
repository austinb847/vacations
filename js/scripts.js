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

VacationList.prototype.findPlace = function(id) {
  for (i=0; i < this.places.length; i++) {
    if (this.places[i].id) {
      if (this.places[i].id === id){
        return this.places[i];
      }
    }
  };
  return false;
}



//business logic for places objects 
function Place (location, landmarks, season, food) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.food = food;
}

//UI logic
$(document).ready(function() {
  var vacationList = new VacationList();

  var showProperties = function(selectedPlaceObj) {
    var panel = $(".panel");
    panel.html("<div class='panel-heading panel-custom'>" +
                  "<h2 class='panel-title'>" + selectedPlaceObj.location + "</h2>" +
                "</div>" +
                "<div class='panel-body'>" +
                  "<p>Trip Details:</p>" +
                  "<ul>" +
                    "<li>" + selectedPlaceObj.season + "</li>" +
                    "<li>" + selectedPlaceObj.food + "</li>" +
                  "</ul>" +
                "</div>");
    panel.toggle();

  };
  
  $("#vacationForm").submit(function(event) {
    event.preventDefault();

    
    var location = $("#location").val(); 
    var landmarks = $("#landmarks").val().split(",");
    var season = $("#season").val();
    var food = $("#food").val();    
    
    
    console.log(vacationList);
    var place = new Place(location, landmarks, season, food);
    console.log(place);
    vacationList.addPlace(place);
    var selectedPlace = vacationList.findPlace(place.id);
    $(".locations").append("<li id="+ selectedPlace.id  + ">" + selectedPlace.location + "</li>") 
    $("#vacationForm").toggle();
    $("#btnShow").toggle();
    $(".itemPanel").toggle();
    /* console.log(vacationList);
    $(".locations").append("<li>" + vacationList.places[0].location + "</li>");
    console.log(vacationList.places[0].location); */

  });

  //bind click event to ul which is the parent of li elements.
  $(".locations").on('click', 'li' , function(event) {
    var liId = parseInt($(this).attr("id")); //get id of clicked li element
    var selectedPlace = vacationList.findPlace(liId); // use id to get properties from object
    console.log(selectedPlace);
    showProperties(selectedPlace);
    
  });

  $("#btnShow").click(function() {
    $("#vacationForm").toggle();
    $("#btnShow").toggle();
    $(".itemPanel").toggle();
    $(".panel").hide();
  });

  
});
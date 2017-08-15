
$(document).ready(function() {

  hotels.forEach(function(hotelObj) {
    $("#hotel-choices").append("<option>" + hotelObj.name + "</option>");
  });
  restaurants.forEach(function(restaurantsObj) {
    $("#restaurant-choices").append("<option>" + restaurantsObj.name + "</option>");
  });
  activities.forEach(function(activitiesObj) {
    $("#activity-choices").append("<option>" + activitiesObj.name + "</option>");
  });

});

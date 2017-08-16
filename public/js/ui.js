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


    $('button[data-action="add"]').on('click', function() {
        /* body... */
        var hotelVal = $("#hotel-choices option:selected").val();
        console.log(hotelVal);

        // should we insert a custom id or try to traverse with what is there in the DOM

        // what is the proper data value for this element
        var span = $("#hotelspan")
        console.log(span);
    });


});

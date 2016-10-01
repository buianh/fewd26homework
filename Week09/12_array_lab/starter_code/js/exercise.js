function selectPet(petType){

    // Get the specific pet data set
    var thisPet = petData[petType];

    // Set the title
    $(".displayName").html(thisPet['displayName']);
    // Empty the specification data
    $('.petsDataSpecs').empty();

    // Add the space required, size, weight
    var petCharacteristics = ["Size", "Weight", "Space Required"]
    var petClass = ["size", "weight", "spaceRequired"]
    for(q=0; q<petCharacteristics.length; q++) {
    $('.petsDataSpecs').append(
        "<dt>" + petCharacteristics[q] + "</dt>"+
        "<dd>" + thisPet[petClass[q]] + "</dd>"
        );
    } 

    //jQuery.each(petCharacteristics, function(index, value) {
       // $('.petsDataSpecs').append(
        /*"<dt>" + petCharacteristics[q] + "</dt>"*/
        //"<dd>" + petClass[index] + "</dd>"

       // );

    //})

    /*$('.petsDataSpecs').append(
            "<dt>Size</dt><dt>Weight</dt><dt>Space Required</dt><dt>Trainable</dt><dt>Fits on a Lap</dt><dt>Foods</dt>"

    );*/

    // Add logic to add the trainability and lap size images
    var trainlap = ["fitsOnLap", "trainability"];

     foreach(q=0; q<trainlap.length; q++) {

    if(thisPet[trainlap[q]] == "true") {
        $('.petsDataSpecs').append(
        "<dt>" + thisPet[trainlap[q]] + "</dt>"+
        "<class = 'checkmark'"+
        "src='../img/animals/200px-Gnome-emblem-default.svg.png'"
    )}
}


    // Add the foods (may require loop)



    // Update the images

        // Set the main image


        // Empty the thumbnails

        // Add the thumbnails



        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)


    // Empty the ideal for

    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



jQuery(document).ready(function(){

    // Initial run

        var selectedPet = $('#petType').val();

        selectPet(selectedPet);

    //Update whenever a new value is picked
    $('#petType').on("change", function() {

        var selectedPet = $('#petType').val();

        selectPet(selectedPet);
    })
});







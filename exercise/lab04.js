let count = 0;
let buttonCreature = {
    name: "Boron",
    species: "goat",
    favoriteFood: "Iced Risotto for pleasure",
    moods: ["angry", "dreadful", "contemplative", "on edge", "sad", "confused"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

let message = "<p>You clicked me " + count + " times.</p>";
message = message + "<p>Now that you clicked on me, I feel " + currentMood + ".</p>";
message = message + "<p>My name is Boron, but my friends call me Bor, so you can call me  " + buttonCreature.name + ".</p>";
message = message + "<p>I am the mother flippin " + buttonCreature.species + ".</p>";
message = message + "<p>I often consume  " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});